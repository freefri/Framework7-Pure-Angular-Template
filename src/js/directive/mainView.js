MyApp.angular.directive('mainView', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/templates/controller/main-view.html',
        controller: function ($scope) {
        }
    };
});
