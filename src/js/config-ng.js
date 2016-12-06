var MyApp = {};

MyApp.conf = {
    checkUrl: 'app.json',
    "version": "1.2.3"
};

MyApp.angular = angular.module('MyApp', [
    'pascalprecht.translate'
]);