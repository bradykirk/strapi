export default {
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: process.env.S3_PUBLIC_URL,
        s3Options: {
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
          },
          endpoint: process.env.S3_ENDPOINT,
          region: process.env.S3_REGION,
          forcePathStyle: true,
          params: {
            Bucket: process.env.S3_BUCKET,
          },
        },
      },
    },
  },
};
