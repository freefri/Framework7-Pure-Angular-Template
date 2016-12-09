MyApp.angular.factory('F7App', function ($rootScope, $q) {
  'use strict';

  var q = $q.defer();

  $rootScope.$on('f7:mainInit', function () {
    q.resolve(MyApp.fw7.app);
  });

  return q.promise;
});