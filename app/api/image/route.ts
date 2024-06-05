// 'use server'
import fs from 'fs';

//export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(req : Request){
  console.log('req', req)
  return new Response('this a new api route');
}
// export  async function POST(request: Request) {
//     console.log('are u here?')
//   const { filePath, folderId } = await request.json();

// const file: fs.ReadStream = fs.createReadStream(filePath);
// const chunks: any[] = [];
// const formData = new FormData();
// file.on('data', (chunk) => {
//   chunks.push(chunk);
// });

// file.on('end', () => {
//   const blob = new Blob(chunks, { type: 'image/jpeg' });
//   formData.append('file', blob);
// });
//   const url = `https://builder.io/api/v1/upload/?folder=${folderId}`;
//   const headers = {
//     'Content-Type': 'image/jpeg',
//     Authorization: `Bearer ${process.env.BUILDER_API_KEY}!`,
//   };

// console.log('formData', formData)
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers,
//       body: formData
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message);
//     }
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error: any) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }

// export async function GET(request :Request ) {
//   console.log('are u here?', Request);
//   // return new Response("This is a new API route");
//  const {filePath, folderId} = await request.json()
//  console.log('filePath', filePath);
//  console.log('folderId', folderId);

//  const file: fs.ReadStream = fs.createReadStream(filePath);
//  console.log('file', file);
//  const chunks: any[] = [];
//  const formData = new FormData();
//  file.on('data', (chunk) => {
//    chunks.push(chunk);
//  });

//  file.on('end', () => {
//    const blob = new Blob(chunks, { type: 'image/jpeg' });
//    formData.append('file', blob);
//  });

//  const url = `https://builder.io/api/v1/upload/?folder=${folderId}`;
//    const headers = {
//      'Content-Type': 'image/jpeg',
//      Authorization: `Bearer ${process.env.BUILDER_API_KEY}!`,
//    };
 
//  console.log('formData', formData)
//   //  try {
//   //    const response = await fetch(url, {
//   //      method: 'POST',
//   //      headers,
//   //      body: formData
//   //    });
//   //    const data = await response.json();
//   //    if (!response.ok) {
//   //      throw new Error(data.message);
//   //    }
//   //    return new Response(JSON.stringify(data), { status: 200 });
//   //  } catch (error: any) {
//   //    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   //  }
// }


