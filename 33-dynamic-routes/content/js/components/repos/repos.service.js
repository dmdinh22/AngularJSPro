function ReposService($http) {
    this.getRepos = function (params) {
        return $http
        // pass a value in as a param to dynamically load url
            .get(`https://api.github.com/users/${params}/repos`)
            .then(function (res) {
                return res.data;
            });
    };
}

angular
    .module('repos')
    .service('ReposService', ReposService);
