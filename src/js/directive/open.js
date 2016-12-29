MyApp.angular.directive('open', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function openLink(scope, element) {
            var className = 'item-open';
            var $elem = Dom7(element[0]);
            $elem.on('click', function () {
                if ($elem.hasClass(className)) {
                    $elem.removeClass(className);
                } else {
                    $elem.addClass(className);
                }
            });
        }
    };
});
