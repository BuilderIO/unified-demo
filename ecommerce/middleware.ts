// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { config as dotEnvConfig } from 'dotenv';

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.split(/[-:]/)[0];

  console.log('HOST NAME ', hostname)

  let envFilePath;
  if (hostname === 'localhost') {
    envFilePath = '.env';
  } else if (hostname === 'tim') {
    envFilePath = '.env.tim';
  } else if (hostname === 'ahmed') {
    envFilePath = '.env.ahmed';
  } else if (hostname === 'andreas') {
    envFilePath = '.env.andreas';
  } else if (hostname === 'gustavo') {
    envFilePath = '.env.gustavo';
  } else if (hostname === 'jj') {
    envFilePath = '.env.jj';
  }
  

  if (envFilePath) {
    dotEnvConfig({ path: envFilePath });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};