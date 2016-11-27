module.exports = {
    html: {
        options:      {
            bootstrap:  function(module, script) {
                return 'MyApp.angular.run(function($templateCache) { ' + script + ' });';
            }
        },
        src: [
            'templates/controller/*',
            'templates/directive/*'
        ],
        dest: 'tmp/templates.js'
    }
};