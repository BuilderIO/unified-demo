import { builder } from "@builder.io/sdk";
import { RenderBuilderLiveDataPreview } from "@/src/components/builderLiveDataPreview";
import { RenderBuilderContent } from "@/src/components/builder";
import { Button } from "@/src/components/ui/button";
// import { useEffect, useState } from "react";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

export default async function BlogPage(props: BlogPageProps) {
    const builderBlogModelName = "blog-article-data";
    const builderBlogCategoryModelName = "blog-category";
    // const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const blogData = await builder
    // Get the page content from Builder with the specified options
    .getAll(builderBlogModelName, {
        fields: "data,id"
        // query: {
        //     data: {
        //         category: currentCategory 
        //     }
        // }
    })
    // Convert the result to a promise
    const blogCategories = await builder
    // Get the page content from Builder with the specified options
    .getAll(builderBlogCategoryModelName, {
    })
    console.log(blogCategories)

// useEffect(() =>{

// }
// , [currentCategory])


  return (
    <>
      {/* Render the Builder page */}
      {/* {blogCategories.map((data: any) => (
        <div key={data.id}> 
            <Button variant="ghost">{data.data.name}</Button>
        </div>
      ))} */}
      {blogData.map((data: any) => (
        <div key={data.id}> 
            <a href={`/blog/${data.data.slug}`}>{data.data.title}</a>
        </div>
      ))}
    </>
  );
}
