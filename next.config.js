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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  }
};
