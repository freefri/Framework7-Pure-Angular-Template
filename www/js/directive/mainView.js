MyApp.angular.directive('mainView', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directive/main-view.html',
        controller: function ($scope) {
        }
    };
});
