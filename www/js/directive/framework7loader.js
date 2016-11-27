MyApp.angular.directive('framework7loader', function (InitService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directive/framework7loader.html',
        controller: function ($scope) {
            InitService.initFramework7();
        }
    };
});
