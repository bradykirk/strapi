module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env(005f8195334662c0000000002),
                secretAccessKey: env(K005aa90IbXsga7tscg75XEW2wSyawQ),
                endpoint: env(s3.us - east-005.backblazeb2.com),
                region: us - east-005,
                params: {
                    Bucket: env(hcm - website),
                },
            },
        },
    },
});