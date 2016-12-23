MyApp.angular.directive('actions', function ($rootScope) {
    return {
        restrict: 'A',
        scope: true,
        link: function calendarLink(scope, element, attr) {
            var buttons = scope.$eval(attr.actions);
            var app;

            element.on('click', function () {
                var myCalendar = app.actions(buttons);
            });

            if (MyApp && MyApp.fw7 && MyApp.fw7.app) {
                app = MyApp.fw7.app;
            }

            $rootScope.$on('f7:mainInit', function () {
                app = MyApp.fw7.app;
            });
        }
    };
});
