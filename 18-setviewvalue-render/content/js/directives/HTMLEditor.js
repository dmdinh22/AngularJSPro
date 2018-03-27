function HTMLEditor() {
    return {
        // because ng-model is bound to markup
        require: 'ngModel', 
        link: function ($scope, $element, $attrs, $ctrl) {
            var ngModelCtrl = $ctrl;
            // View -> Model
            $element.on('input', function (event) {
                ngModelCtrl.$setViewValue(event.target.innerHTML);
            });
            // Model -> View
            ngModelCtrl.$render = function () {
                $element.html(ngModelCtrl.$modelValue);
            };
            //				          same as jQuery's element.html()
            ngModelCtrl.$setViewValue($element[0].innerHTML);
        }
    };
}

angular
    .module('app')
    .directive('htmlEditor', HTMLEditor);
