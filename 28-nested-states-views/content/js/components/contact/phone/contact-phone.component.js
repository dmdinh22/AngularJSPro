var contactPhone = {
    template: `
		<div>Contact via phone: +44(0) 7777 888 999</div>
	`
};

angular
    .module('contact')
    .component('contactPhone', contactPhone)
    .config(function ($stateProvider) {
        $stateProvider
        // phone state is a child state of contact state
            .state('contact.phone', {
                // ^ means "do not inherit /contact"
                url: '^/phone',
                component: 'contactPhone'
            });
    });
