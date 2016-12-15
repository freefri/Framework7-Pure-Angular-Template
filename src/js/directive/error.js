MyApp.angular.directive('error', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        compile: function errorCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function errorLink(scope, element, attr) {
                $compile.$$addBindingInfo(element, attr.ngModel);
                var input = element[0];
                var model = attr.ngModel.split('.');
                var fieldName = model.pop();

                scope.getErrorrrMsg = function (i) {
                    var classList = input.parentElement.parentElement.parentElement.classList;
                    if (i && i.errors && i.errors[fieldName]) {
                        classList.add('input-error');
                        var errors = i.errors[fieldName];
                        return errors[Object.keys(errors)[0]];
                    }
                    classList.remove('input-error');
                    return '';
                };

                var div = document.createElement('div');
                div.className = 'error-message';
                var attrNgModel = model.join('.');
                div.innerHTML = '{{ getErrorrrMsg('+attrNgModel+') }}';
                input.parentElement.appendChild(div);
                angular.element(div).replaceWith($compile(div)(scope));
            };
        }
    };
});
