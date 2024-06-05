// for example, in $.tsx
import { Content, fetchOneEntry, isEditing, isPreviewing, fetchEntries} from '@builder.io/sdk-react';
import  {headerComponent}  from '@/builder-registry';


const apiKey :string = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function App() {
    const content = await fetchOneEntry({
        apiKey: apiKey,
        model: 'page',
        enrich: true,
        // userAttributes: { urlPath },
      });

      console.log('content', content);

      const header = await fetchEntries({
        query: {
          'data.slug': 'gen2'
        },
        apiKey: apiKey,
        options: {
          enrich: true,
        },
        model: 'header',
      }).then(header => header.flatMap(item => item?.data?.logo));


  return (
    <>
    {header && content && (
       <Content
       model="page"
       data={{header: header}}
       content={content}
       apiKey={apiKey}
       customComponents={headerComponent} // <-- Add component here
     />
    )}
   
    </>
  );
}

