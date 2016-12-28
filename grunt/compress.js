module.exports = {
    assets: {
        options: {
            mode: 'gzip'
        },
        files: [
            {
                expand: true,
                cwd: '<%= pkg.dist_dir %>/',
                src: ['*.js', '*.min.css'],
                dest: 'tmp/s3/'
            }
        ]
    },
    appjson: {
        options: {
            mode: 'gzip'
        },
        files: [
            {
                expand: true,
                cwd: '<%= pkg.dist_dir %>/../',
                src: ['app.json'],
                dest: 'tmp/s3/'
            }
        ]
    }
};
