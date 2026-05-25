import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/saved',
        '/api/',
        '/_next/',
        '/private/',
      ],
    },
    sitemap: 'https://indievibestack.vercel.app/sitemap.xml',
    host: 'https://indievibestack.vercel.app',
  };
}