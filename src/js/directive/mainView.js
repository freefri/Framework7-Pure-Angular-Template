MyApp.angular.directive('mainView', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/templates/directive/main-view.html',
        controller: function ($scope) {
        }
    };
});
