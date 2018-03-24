function PikadayService() {
    return function (options) {
        // new instance of pikaday
        return new Pikaday(options);
    };
}


angular
    .module('app')
    .factory('PikadayService', PikadayService);
