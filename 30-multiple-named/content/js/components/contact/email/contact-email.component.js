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
            .state('contact.email', {
                url: '/email',
                views: {
                    // details view, part of contact statue
                    'details@contact': {
                        component: 'contactEmail'
                    }
                }
            });
    });
