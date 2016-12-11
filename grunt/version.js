module.exports = {
    project: {
        options: {
            prefix: '"version"\\s*:\\s*"'
        },
        src: [
            '<%= pkg.src_dir %>/js/config-ng.js',
            'package.json',
            'www/app.json'
        ]
    }
};