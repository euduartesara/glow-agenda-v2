import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const { pathname } = request.nextUrl;

  // Rotas públicas que não precisam de autenticação
  const publicPaths = ['/', '/login', '/cadastro', '/pagamento'];
  const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith('/api/auth/login'));

  // Se está tentando acessar rota protegida sem sessão
  if (!session && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Se está logado e tenta acessar login, redirecionar para dashboard
  if (session && pathname === '/login') {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|img|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
