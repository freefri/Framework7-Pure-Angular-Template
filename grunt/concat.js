module.exports = {
    // concatenates js files
    options: {
        separator: '\n/* EOF */\n'
    },
    lib: {
        src: [
            //'node_modules/angular/angular.js',
            'angular.js',
            '<%= pkg.src_js_dir %>/config-ng.js'
        ],
        dest: 'www/dist/init.js',
        nonull: true
    },
    app: {
        src: [
            'node_modules/framework7/dist/js/framework7.min.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            '<%= pkg.src_js_dir %>/config-ng.js',
            'tmp/built-templates.js',
            '<%= pkg.src_js_dir %>/config-lang.js',
            '<%= pkg.src_js_dir %>/service/*.js',
            '<%= pkg.src_js_dir %>/directive/*.js',
            '<%= pkg.src_js_dir %>/controller/*.js',
            '<%= pkg.src_js_dir %>/bootstrap-ng.js',
            '<%= pkg.src_js_dir %>/config-f7.js'
        ],
        dest: 'www/dist/app.js',
        nonull: true
    }
};