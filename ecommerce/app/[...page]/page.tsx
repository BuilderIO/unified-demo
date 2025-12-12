import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/src/components/builder';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = 'page';
  let locale = 'en-US';

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.page?.join('/') || ''),
        // When content is localized through Targeting, the locale should be passed to the userAttributes
        // As of Gen1 SDK v6.0.3 or Gen2 SDK v2.0.31, locale in either UserAttributes OR base options are checked for all locale features, and only one is needed
        // locale: locale,
        loggedIn: true,
      },
      // When content is localized in-page, the locale should be passed directly to the options
      locale: locale,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent
        locale={locale}
        content={content}
        model={builderModelName}
        options={{ enrich: true }}
        data={{ username: 'user@builder' }}
      />
    </>
  );
}
