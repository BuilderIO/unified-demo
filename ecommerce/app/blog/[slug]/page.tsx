import { builder } from "@builder.io/sdk";
import { BuilderContent } from "@builder.io/react";
import { RenderBuilderContent } from "@/src/components/builder";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const builderBlogModelName = "blog-article-data";
  const builderBlogTemplateModelName = "blog-template";

  const blogData = await builder
    // Get the page content from Builder with the specified options
    .get(builderBlogModelName, {
      query: {
        data: {
          slug: props?.params?.slug
        }
      }
    })
    // Convert the result to a promise
    .toPromise();

    const blogTemplate = await builder
    // Get the page content from Builder with the specified options
    .get(builderBlogTemplateModelName, {
      userAttributes: {
        category: blogData?.data?.category,
        urlPath: `/blog/${props?.params?.slug}`
      }
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      {/* <BuilderContent model={builderBlogModelName} content={blogData}> 
        {(data, loading, content) => {
          if (loading) return <div>Loading...</div>;
          return ( */}
            <RenderBuilderContent content={blogTemplate} model={builderBlogTemplateModelName} data={{ article: blogData?.data }} />
          {/* );
        }}
      </BuilderContent> */}
    </>
  );
}
