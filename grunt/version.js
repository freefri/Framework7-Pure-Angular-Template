module.exports = {
    project: {
        options: {
            prefix: '"version"\\s*:\\s*"'
        },
        src: [
            'src/js/config-ng.js',
            'package.json',
            'www/app.json'
        ]
    }
};