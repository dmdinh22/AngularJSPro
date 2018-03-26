var statelessComponent = {
    bindings: {
        user: '<', // one way data bind
        onUpdate: '&' // delegate a function
    },
    controller: function () {
        // lifecycle hook on change of component
        this.$onChanges = function (changes) {
            if (changes.user) {
                this.user = angular.copy(this.user);
            }
        };
        this.updateUser = function () {
            // pased down from the parent to child component
            this.onUpdate({
                //event object to pass back to the parent
                $event: {
                    user: this.user
                }
            });
        };
    },
    template: `
		<div>
			<input type="text" ng-model="$ctrl.user.name">
			<input type="text" ng-model="$ctrl.user.location">
			<a href="" ng-click="$ctrl.updateUser()">Update</a>
		</div>
	`
};

angular
    .module('app')
    .component('statelessComponent', statelessComponent);
