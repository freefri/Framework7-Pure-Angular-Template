MyApp.angular.directive('calendar', function ($rootScope) {
    return {
        restrict: 'A',
        scope: true,
        link: function calendarLink(scope, element, attr) {
            var id = ('calendar' + Math.random()).replace('.', '');
            element[0].id = id;

            var cal = scope.$eval(attr.calendar);
            if (!cal) {
                cal = {};
            }
            cal.input = '#' + id;
            if (cal.closeOnSelect === undefined) {
                cal.closeOnSelect = true;
            }

            $rootScope.$on('f7:mainInit', function () {
                var myCalendar = MyApp.fw7.app.calendar(cal);
            });
        }
    };
});
