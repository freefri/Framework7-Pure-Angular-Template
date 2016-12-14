module.exports = {
    html: {
        options: {
            url:  function(url) {
                return url.replace(/^.*src\/templates/i, 'src/templates');
            },
            bootstrap:  function(module, script) {
                return 'MyApp.angular.run(function($templateCache) { ' + script + ' });';
            }
        },
        src: [
            '<%= pkg.src_dir %>/templates/controller/*',
            '<%= pkg.src_dir %>/templates/directive/*'
        ],
        dest: 'tmp/built-templates.js'
    }
};