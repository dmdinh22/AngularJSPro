var outerComponent = {
    bindings: {},
    controller: function ($rootScope, $scope) {
        var unbind = $rootScope.$on('logout', function (event, data) {
            console.log(data);
        });
        // prevents memory leaks and reinstantiates 
        // components when it's revisited
        $scope.$on('$destroy', unbind);
    },
    template: `
		<div class="outer">
			I am the outer $scope component!
		</div>
	`
};

angular
    .module('app')
    .component('outerComponent', outerComponent);
