export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('B2_ACCESS_KEY_ID'),
        secretAccessKey: env('B2_SECRET_ACCESS_KEY'),
        endpoint: env('B2_ENDPOINT'),
        region: 'us-east-005',
        params: {
          Bucket: env('B2_BUCKET_NAME'),
        },
      },
    },
  },
});
