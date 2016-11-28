module.exports = {
    html: {
        options:      {
            bootstrap:  function(module, script) {
                return 'MyApp.angular.run(function($templateCache) { ' + script + ' });';
            }
        },
        src: [
            'src/templates/controller/*',
            'src/templates/directive/*'
        ],
        dest: 'www/dist/templates.js'
    }
};