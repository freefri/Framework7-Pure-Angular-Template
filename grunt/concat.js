module.exports = {
    // concatenates js files
    options: {
        separator: '\n/* EOF */\n'
    },
    app: {
        src: [
            'node_modules/angular/angular.min.js',
            'node_modules/framework7/dist/js/framework7.min.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            '<%= pkg.src_js_dir %>/config.js',
            '<%= pkg.src_js_dir %>/service/*.js',
            '<%= pkg.src_js_dir %>/directive/*.js',
            '<%= pkg.src_js_dir %>/controller/*.js',
            '<%= pkg.src_js_dir %>/config-ng.js'
        ],
        dest: 'tmp/app.js',
        nonull: true
    }
};