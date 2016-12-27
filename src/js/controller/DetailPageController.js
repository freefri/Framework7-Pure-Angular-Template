/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('detailPageController', function (StateParams) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'src/templates/controller/detail.html',
    controller: function ($scope) {
      StateParams.get('detailPage', function (params) {
        $scope.items = [
          {
            after: params.timestamp,
            title: 'First step of ' + params.title,
            icon: 'fa-truck',
            color: 'color-lightblue',
            text: 'Paid ' + params.price + '€'
          },
          {
            after: params.timestamp + 15 * 60 * 1000,
            icon: 'fa-credit-card fa-ban',
            color: 'color-red',
            title: 'Second step'
          },
          {
            after: params.timestamp + 30 * 60 * 1000,
            icon: 'fa-thumbs-up',
            color: 'color-green',
            title: 'Third step'
          }
        ];
      });
    }
  };
});
