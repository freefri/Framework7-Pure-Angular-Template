/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('detailPageController', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'src/templates/controller/details.html',
    controller: function ($scope) {
      $scope.items = [
        {
          after: '24-10-2016 11:25',
          title: 'First step'
        },
        {
          after: '24-10-2016 11:40',
          title: 'Second step'
        },
        {
          after: '25-10-2016 12:40',
          title: 'Third step'
        }
      ];
    }
  };
});
