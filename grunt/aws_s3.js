module.exports = {
    options: {
        accessKeyId: '<%= aws.S3.key %>',
        secretAccessKey: '<%= aws.S3.secret %>',
        region: '<%= aws.S3.region %>',
        uploadConcurrency: 5,
        access: 'public-read',
        bucket: '<%= aws.S3.bucketpub %>',
        params: {
            // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
            ContentEncoding: 'gzip',
            CacheControl: 'max-age=4555000, public'
        }
    },
    prd: {
        files: [
            {
                expand: true,
                cwd: 'tmp/s3/',
                src: ['*'],
                dest: 'dh/prd/'
            }
        ]
    }
};
