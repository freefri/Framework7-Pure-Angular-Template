MyApp.angular.directive('navbarApp', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/templates/directive/navbar-app.html',
        controller: function ($scope) {
        }
    };
});