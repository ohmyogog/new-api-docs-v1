import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const i18nMiddleware = createI18nMiddleware(i18n);

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/zh/docs/api', request.url));
  }

  return i18nMiddleware(request, event);
}

export const config = {
  // Matcher ignoring API routes, Next.js internals, and static assets
  // Important: exclude metadata routes like `/robots.txt` and `/sitemap.xml`
  // so they won't be redirected to `/{lang}/...` which would 404 unless you implement localized metadata routes.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets/|robots\\.txt|sitemap\\.xml|llms?\\.txt|llm-full\\.txt|llms-full\\.txt).*)',
  ],
};
