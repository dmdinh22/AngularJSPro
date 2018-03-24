function DatePicker($timeout, PikadayService) { // inject the service
    return {
        scope: {
            date: '=' // bind to date property
        },
        template: `
			<div>
				Isolate date: {{ date | date: 'MMM d, yyyy' }}
				<input type="text">
			</div>
		`,
        link: function ($scope, $element, $attrs) {
            //grab input to bind pikaday object
            var field = $element[0].querySelector('input');
            // call pikaday service
            var picker = PikadayService({
                field: field,
                onSelect: function (date) {
                    // $timeout to call digest
                    $timeout(function () {
                        // pass new object back and set it to scope prop
                        $scope.date = date;
                    });
                }
            });
            // set initial value
            picker.setDate($scope.date);
        }
    };
}

angular
    .module('app')
    .directive('datePicker', DatePicker);
