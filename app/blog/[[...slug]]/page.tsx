import { Content, fetchOneEntry, isEditing, isPreviewing, fetchEntries } from '@builder.io/sdk-react';
import { redirect } from 'next/navigation';

const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;
console.log('key', key)
if (!key) {
  throw new Error("Builder.io API key is not defined. Please set NEXT_PUBLIC_BUILDER_API_KEY in your environment.");
}

interface PageProps {
  params: { slug: string[] };
  searchParams: Record<string, string>;
}

export default async function BlogPostPage({ params, searchParams }: PageProps) {
  const urlPath = '/' + (params?.slug?.join('/') || '');
  const builderBlogArticleModelName = "blog-article";
  const builderBlogArticleTemplateModelName = "blog-article-template";

  // Fetch all articles to find the correct slug
  const articles = await fetchEntries({
    apiKey: key,
    model: builderBlogArticleModelName,
    options: { noTargeting: true },
    fields: 'data.slug',
  });

  const articleUrl = articles.map((article) => `/blog/${article.data?.slug}`);

  // Fetch specific article content based on slug
  const content = await fetchOneEntry({
    query: {
      'data.slug': params?.slug.join('/'),
    },
    cacheSeconds: 1,
    apiKey: key,
    options: {
      enrich: true,
    },
    model: builderBlogArticleModelName,
    userAttributes: { urlPath },
  }) || null;

  // Fetch article template
  const template = await fetchOneEntry({
    apiKey: key,
    model: builderBlogArticleTemplateModelName,
    enrich: true,
    userAttributes: { urlPath },
  });

  const canShowContent = content || isPreviewing(searchParams) || isEditing(searchParams);
  if (!canShowContent) {
    console.log('ArticleData not found');
    return redirect('/404');
  }

  return (
    <>
      {content && template && (
        <Content 
          apiKey={key} 
          model={builderBlogArticleModelName}
          data={{ article: content }} 
          content={template} 
          enrich={true}
          context={{ article: content }}
        />
      )}
    </>
  );
}
