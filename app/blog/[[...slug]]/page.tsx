import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { redirect } from 'next/navigation';
// import { BuilderContent, BuilderComponent } from '@builder.io/react';
import { Content, fetchOneEntry, isEditing, isPreviewing, fetchEntries , subscribeToEditor } from '@builder.io/sdk-react';

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: { slug: string[] };
  searchParams: Record<string, string>;
}
export const revalidate = 0;
export const dynamic = 'force-dynamic';



export default async function BlogPostPage(props: PageProps) {
  const urlPath = '/' + (props.params?.slug?.join('/') || '');
  const builderBlogArticleModelName = "blog-article";
  const builderBlogArticleTemplateModelName = "blog-article-template";
  
  console.log('props.params?.slug', props.params?.slug);
  const articles = await fetchEntries({
        apiKey: key,
        model: 'blog-article',
        options: { noTargeting: true },
        fields: 'data.slug',
      });

  const articleUrl = articles.map((article) => `/blog/${article.data?.slug}`);

  console.log('articleUrl', articleUrl);
  const content = await fetchOneEntry({
    query: {
      'data.slug': props.params?.slug.join('/'),
    },
    cacheSeconds: 1,
    apiKey: key,
    options: {
      enrich: true,
    },
    model: builderBlogArticleModelName,
    userAttributes: { urlPath },
  }) || null;
  //state.article.data.title
//  StateProvider.
  const template = await fetchOneEntry({
    apiKey: key,
    model: builderBlogArticleTemplateModelName,
    enrich: true,
    userAttributes: { urlPath },
  });

    const canShowContent = content || isPreviewing(props.searchParams) || isEditing(props.searchParams);
  if (!canShowContent) {
    // Handle case where article data is not found
    console.log('ArticleData not found');
    // return redirect('/404');
  }

  return (
    <>
    {/* <Content model={builderBlogArticleModelName} apiKey={key} content={content} /> */}
    {content && template && (
    <Content 
      apiKey={key} 
      model={builderBlogArticleModelName}
      data={{article: content}} 
      content={template} 
      enrich={true}
      context={{article: content}}
    />
     )} 
    </>
  );
}




