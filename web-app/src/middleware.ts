import createMiddleware from 'next-intl/middleware'
import { isLocaleEnabled, localePrefix, locales } from './config'

export default createMiddleware({
  locales: isLocaleEnabled ? locales : [],
  defaultLocale: 'en',
  localePrefix,
  alternateLinks: false,
  localeDetection: false
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    `/(en|ur)/:path*`,
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ]
  // matcher: ['/', `/(${locales.reverse().join('|')})/:path*`]
}
