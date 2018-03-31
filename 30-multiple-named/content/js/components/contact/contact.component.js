var contact = {
    template: `
		<div class="contact">
			<div class="contact-methods">
				<h3>How would you like to contact me?</h3>
				<div ui-view="methods"></div>
			</div>
			<div class="contact-details" ui-view="details"></div>
		</div>
	`
};

angular
    .module('contact')
    .component('contact', contact)
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                views: {
                    // default view
                    '@': {
                        component: 'contact'
                    },
                    // another view - 'methods' is the name of the view
                    // '@contact' - part of contact state
                    'methods@contact': {
                        component: 'contactMethods'
                    }
                }
            });
    });
