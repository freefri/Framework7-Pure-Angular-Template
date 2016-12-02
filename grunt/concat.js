module.exports = {
    // concatenates js files
    options: {
        separator: '\n/* EOF */\n'
    },
    init: {
        src: [
            //'node_modules/angular/angular.js',
            'angular.js',
            'node_modules/node-forge/js/util.js',
            'node_modules/node-forge/js/sha256.js',
            '<%= pkg.src_js_dir %>/init/file.js',
            '<%= pkg.src_js_dir %>/init/updater.js'
        ],
        dest: 'www/dist/init.js',
        nonull: true
    },
    app: {
        src: [
            '<%= pkg.src_js_dir %>/config-ng.js',
            'node_modules/framework7/dist/js/framework7.min.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            '<%= pkg.src_js_dir %>/config-ng.js',
            '<%= pkg.src_js_dir %>/cfg.js',
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