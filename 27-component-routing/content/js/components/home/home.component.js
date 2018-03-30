var home = {
    template: `
		<div class="home">Home Page</div>
	`
};

angular
    .module('home')
    .component('home', home)
// $stateProvider passed to us from ui-router
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // crete new state for route
            .state('home', {
                url: '/',
                component: 'home' // component to render
                // template: '<home></home>'
            });
        // if none of the routes match, default to here
        $urlRouterProvider.otherwise('/');
    });
