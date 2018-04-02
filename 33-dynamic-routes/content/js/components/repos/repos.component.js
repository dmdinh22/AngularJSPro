var repos = {
    bindings: {
        list: '<'
    },
    template: `
		<div class="repos">
			My Repos:
			<div class="repo-search">
				<form ng-submit="$ctrl.submitForm()">
					<input ng-model="$ctrl.name">
					<button type="submit">View repos</button>
				</form>
			</div>
			<ul>
				<li ng-hide="$ctrl.list.length">
					Nothing here yet, type and search!
				</li>
				<li ng-repeat="repo in $ctrl.list">
					<a href="{{ repo.html_url }}">
						{{ repo.name }}
					</a>
					({{ repo.stargazers_count }} stars)
				</li>
			</ul>
		</div>
	`,
    controller: function ($state) {
        // $state.go to transition to a particular state
        this.submitForm = function () {
            // first arg - state we want to transition to
            // second arg - optional - further info
            $state.go('repos', {
                username: this.name
            });
        };
    }
};

angular
    .module('repos')
    .component('repos', repos)
    .config(function ($stateProvider) {
        $stateProvider
            .state('repos', {
                // ? - use a query string
                url: '/repos?username',
                component: 'repos',
                params: {
                    // set default value for username property
                    username: null
                },
                resolve: {
                    list: function (ReposService, $transition$) {
                        // using params property of $transition$
                        var params = $transition$.params().username;
                        // prevent null as default route
                        if (!params) return;
                        // pass through params to the url
                        return ReposService.getRepos(params);
                    }
                }
            });
    });
