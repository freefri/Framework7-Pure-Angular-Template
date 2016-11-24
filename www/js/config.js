/*jslint browser: true*/
/*global console, angular, Framework7*/

// Init angular
MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('MyApp', [
  'pascalprecht.translate'
]);

MyApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};