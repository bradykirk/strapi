export default [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://f005.backblazeb2.com',
            'https://*.backblazeb2.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://f005.backblazeb2.com',
            'https://*.backblazeb2.com',
          ],
        },
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
