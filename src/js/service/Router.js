MyApp.angular.factory('Router', function ($timeout) {
  'use strict';

  var Router = {};

  var fw7 = MyApp.fw7;

  Router.go = function(page) {
    var mainView = fw7.views[0];
    mainView.router.loadPage(page);
  };

  Router.back = function(opt) {
    $timeout(function () {
      var mainView = fw7.views[0];
      mainView.router.back(opt);
    });
  };

  return Router;

});