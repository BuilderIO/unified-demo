import { builder } from "@builder.io/sdk";
import { RenderBuilderLiveDataPreview } from "@/src/components/builderLiveDataPreview";
import { RenderBuilderContent } from "@/src/components/builder";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const builderBlogModelName = "blog-article-data";

  const blogData = await builder
    // Get the page content from Builder with the specified options
    .getAll(builderBlogModelName, {
        fields: "data"
    })
    // Convert the result to a promise
  return (
    <>
      {/* Render the Builder page */}
      {blogData.map((data: any) => (
        <div> 
            <a href={`/blog/${data.data.slug}`}>{data.data.title}</a>
        </div>
      ))}
    </>
  );
}
