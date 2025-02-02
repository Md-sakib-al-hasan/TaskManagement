import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  
  // Check if the user is authenticated
  const token = req.cookies.get('token')?.value;
  const isAuthenticated = token; 

  
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

 
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/'],
};
