export default {
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: process.env.B2_KEY_ID,
            secretAccessKey: process.env.B2_APPLICATION_KEY,
          },
          endpoint: process.env.B2_ENDPOINT,
          region: process.env.B2_REGION,
        },
        params: {
          Bucket: process.env.B2_BUCKET,
        },
      },
    },
  },
};
