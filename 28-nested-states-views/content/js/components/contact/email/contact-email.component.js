var contactEmail = {
    template: `
		<div>Contact via email: todd@toddmotto.com</div>
	`
};

angular
    .module('contact')
    .component('contactEmail', contactEmail)
    .config(function ($stateProvider) {
        $stateProvider
        // contact state is a child state of contact state
            .state('contact.email', {
                url: '/email',
                component: 'contactEmail'
            });
    });
