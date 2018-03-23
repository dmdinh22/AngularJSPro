function tab() {
    return {
        scope: {},
        transclude: true,
        template: `
			<div ng-if="tab.selected">
				<div ng-transclude></div>
			</div>
		`,
        require: '^^tabs', // ^ - look for tabs controller on current directive, then parent, but ^^ only looks at parent, not local
        link: function ($scope, $element, $attrs, $ctrl) {
            $scope.tab = {
                label: $attrs.label,
                selected: false
            };
            // access from parent controller
            $ctrl.addTab($scope.tab);
        }
    };
}

angular
    .module('app')
    .directive('tab', tab);
