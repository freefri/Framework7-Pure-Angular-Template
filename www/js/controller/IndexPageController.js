/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('indexPageController', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/controller/index.html',
    controller: function ($scope) {
    }
  };
});