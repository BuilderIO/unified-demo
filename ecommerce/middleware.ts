// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.split(/[-:]/)[0];

  console.log('HOSTNAME ', hostname)

  let env = {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY!
  };
  if (hostname === 'tim') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: '50b344f9116e4820a020e382058146e0'
    };
  } else if (hostname === 'ahmed') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: '7ec105910cf246d6aa8c723d02331672'
    };
  } else if (hostname === 'andreas') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: '56f79af48c2d436f91b396a6743e7962'
    };
  } else if (hostname === 'gustavo') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: '4f69c4bc4d3940e79c665dfd1dcd28ab'
    };
  } else if (hostname === 'jj') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: 'd4c7ddab657a44bb90a21c97c69f8595'
    };
  } else if (hostname === 'madison') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: '4fd379f37fc94196b23e235fe472eee6'
    };
  }
  /*on localhost add .env.local file with NEXT_PUBLIC_BUILDER_API_KEY
   of the same value of your hostname
   refer to .env.example for the format
   */
  else if (hostname === 'localhost') {
    env = {
      NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY!
    }
  }

  console.log('HOST NAME ', env)
  const response = NextResponse.next();
  // Set custom headers with environment variables
  response.headers.set('x-env-NEXT_PUBLIC_BUILDER_API_KEY', env.NEXT_PUBLIC_BUILDER_API_KEY);

  return response;
}

export const config = {
  matcher: ['/:path*'], 
};