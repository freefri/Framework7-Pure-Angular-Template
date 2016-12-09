MyApp.angular.directive('navbarApp', function (StateParams) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/templates/directive/navbar-app.html',
        controller: function ($scope) {
            $scope.current = {};
            StateParams.get('detailPage', function (params) {
                $scope.current = params;
            });
        }
    };
});
