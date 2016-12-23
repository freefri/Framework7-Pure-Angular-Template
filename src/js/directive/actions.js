MyApp.angular.directive('actions', function ($rootScope, $translate) {
    return {
        restrict: 'A',
        scope: true,
        link: function calendarLink(scope, element, attr) {
            var buttons = scope.$eval(attr.actions);
            var app;

            function translate(btn) {
                if (btn.text) {
                    $translate(btn.text).then(function (txt) {
                        btn.text = txt;
                    });
                }
            }

            buttons.forEach(function (btn) {
                if (Array.isArray(btn)) {
                    btn.forEach(translate);
                } else {
                    translate(btn);
                }
            });

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
