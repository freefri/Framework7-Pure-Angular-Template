MyApp.angular.factory('StateParams', function ($rootScope, F7App) {
  'use strict';

  var StateParams = {};
  var paramList = {};
  var currentPage;

  var app;
  F7App.then(function (f7app) {
    app = f7app;
  });

  var setCurrentpage = function (e, param) {
    currentPage = param.detail.page.name;
  };

  $rootScope.$on('f7:pageReinit', setCurrentpage);
  $rootScope.$on('f7:pageInit', setCurrentpage);


  StateParams.set = function (targetPage, params) {
    paramList[targetPage] = params;
  };

  StateParams.get = function (pageName, fn) {
    var getCurrentParams = function (e, param) {
      if (param.detail.page.name == pageName || pageName == '*') {
        fn(paramList[currentPage], app);
      }
    };
    $rootScope.$on('f7:pageReinit', getCurrentParams);
    $rootScope.$on('f7:pageInit', getCurrentParams);
  };

  return StateParams;
});