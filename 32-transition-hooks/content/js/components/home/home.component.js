var home = {
    template: `
		<div class="home">Home Page</div>
	`
};

angular
    .module('home')
    .component('home', home)
// transitionsProvider - global hook for route
    .config(function ($stateProvider, $urlRouterProvider, $transitionsProvider) {
        // capture onStart state and runs a function
        $transitionsProvider.onStart({
            to: function (state) {
                // !! converts to boolean
                return !!(state.data && state.data.requiredAuth);
            }
        }, function ($transition$) {
            console.log($transition$);
        });

        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    });
