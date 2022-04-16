/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  i18n: {
    locales: ['default', 'en', 'ar'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: false,
  images: {
    // domains: ['cdn-stg-revamp.almentor.net'],
  },
};
