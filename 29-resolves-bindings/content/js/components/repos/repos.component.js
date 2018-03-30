var repos = {
    bindings: {
        list: '<' // maps to list from resolve
    },
    template: `
		<div class="repos"
			My Repos:
			<ul>
				<li ng-repeat="repo in $ctrl.list">
					<a href="{{ repo.html_url }}">
						{{ repo.name }}
					</a>
					({{ repo.stargazers_count }} stars)
				</li>
			</ul>
		</div>
	`
};

angular
    .module('repos')
    .component('repos', repos)
    .config(function ($stateProvider) {
        $stateProvider
            .state('repos', {
                url: '/repos',
                component: 'repos',
                // resolve property on routing definition
                resolve: {
                    // creating an array
                    list: function (ReposService) {
                        return ReposService.getRepos();
                    }
                }
            });
    });
