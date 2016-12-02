var MyApp = {};

MyApp.conf = {
    checkUrl: 'app.json',
    version: '1.0.2'
};

MyApp.angular = angular.module('MyApp', [
    'pascalprecht.translate'
]);