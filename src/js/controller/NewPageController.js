/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('newPageController', function ($rootScope, Router, ItemsService) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'src/templates/controller/new.html',
    controller: function ($scope) {
      $scope.addNew = function () {
        ItemsService.add($scope.item).then(function () {
          Router.back();
        });
      };

      $rootScope.$on('f7:pageReinit', function (e, param) {
        $scope.$apply(function () {
          if (param.detail.page.name == 'newPage') {
            $scope.item = {};
          }
        });
      });
    }
  };
});