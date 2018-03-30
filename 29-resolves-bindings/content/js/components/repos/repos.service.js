function ReposService($http) {
    this.getRepos = function () {
        // http request
        return $http
        // httpget to fetch all repos associated to this account
            .get('https://api.github.com/users/toddmotto/repos')
        // passes back a response and return the data
            .then(function (res) {
                // saves us binding res.data to controller
                // abstracts away into service
                return res.data;
            });
    };
}

angular
    .module('repos')
    .service('ReposService', ReposService);
