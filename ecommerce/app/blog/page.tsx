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
        fields: "data,id",
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
      fields: "id,data.name" 
    })

  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {blogData.map((data: any) => (
        <div key={data.id} className="flex"> 
            <a href={`/blog/${data.data.slug}`}>
              <div className="flex overflow-hidden flex-col self-stretch pb-7 my-auto rounded-lg border border-solid bg-zinc-100 border-zinc-300 min-w-[240px] w-[372px] min-h-[360px]">
              <img
                loading="lazy"
                sizes="(max-width: 638px) 58vw, (max-width: 998px) 38vw, 27vw"
                src={data.data.heroImage}
                alt={data.data.title}
                className="object-contain w-full aspect-[1.69]"
              />
              <div className="flex flex-col items-start pr-9 pl-9 mt-6 w-full max-md:px-5">
                <div className="text-2xl font-semibold text-right text-black pointer-events-auto tracking-[4.83px]">
                  <p>{data.data.title}</p>
                </div>
                <div className="flex flex-row justify-start">
                  {data.data.category.map((category: any) => {
                    let blogCategory = blogCategories.find((blogCategory: any) => blogCategory.id === category.category.id);
                    return (
                      <div key={`${data.id}-${blogCategory?.id}`} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                        <p>{blogCategory?.data?.name}</p>
                      </div>
                  )})}  
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
      </div>
    </>
  );
}
