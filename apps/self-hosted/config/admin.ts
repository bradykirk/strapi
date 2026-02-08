export default ({ env }) => {
  const clientUrl = env('CLIENT_URL');
  const previewSecret = env('PREVIEW_SECRET');

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: clientUrl,
        async handler(uid, { documentId, locale, status }) {
          const document = await strapi.documents(uid).findOne({ documentId });
          if (!document) return null;

          if (uid === 'api::blog.blog') {
            const pathname = `/${document.category}/${document.slug}`;
            const urlSearchParams = new URLSearchParams({
              url: pathname,
              secret: previewSecret,
              status,
            });
            return `${clientUrl}/api/preview?${urlSearchParams}`;
          }

          return null;
        },
      },
    },
  };
};
