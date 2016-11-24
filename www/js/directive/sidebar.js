MyApp.angular.directive('sidebar', function () {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/directive/sidebar.html',
        controller: function ($scope) {
        }
    };
});
