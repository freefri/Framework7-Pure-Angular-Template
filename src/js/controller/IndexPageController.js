/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('indexPageController', function (ItemsService) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'src/templates/controller/index.html',
    controller: function ($scope) {
      ItemsService.getAll().then(function (res) {
        $scope.items = res;
      });
    }
  };
});