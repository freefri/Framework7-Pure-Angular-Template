/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('indexPageController', function (ItemsService, F7App) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'src/templates/controller/index.html',
    controller: function ($scope) {

      var ptrContent = Dom7('.pull-to-refresh-content');
      F7App.then(function (app) {
        app.pullToRefreshTrigger(ptrContent);
      });

      ptrContent.on('refresh', function () {
        ItemsService.getAll().then(function (res) {
          $scope.items = res;
          F7App.then(function (app) {
            app.pullToRefreshDone();
          });
        });
      });
    }
  };
});