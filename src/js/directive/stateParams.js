MyApp.angular.directive('stateParams', function (StateParams) {
    return {
        restrict: 'A',
        replace: false,
        link: function($scope, $element, $attrs) {
            $element.on('click', function (e) {
                var params = $scope.$eval($attrs.stateParams);
                var targetPage = $attrs.href;
                if (targetPage.charAt(0) == '#') {
                    targetPage = targetPage.substr(1);
                }
                StateParams.set(targetPage, params);
            });
        },
        controller: function ($scope) {
        }
    };
});
