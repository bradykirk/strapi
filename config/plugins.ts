export default {
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: process.env.B2_ACCESS_KEY_ID,
            secretAccessKey: process.env.B2_SECRET_ACCESS_KEY,
          },
          endpoint: process.env.B2_ENDPOINT,
          region: process.env.B2_REGION,
          forcePathStyle: true,
        },
        params: {
          Bucket: process.env.B2_BUCKET_NAME,
        },
      },
    },
  },
};
