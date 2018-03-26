function ContactController($scope) {
    var ctrl = this;
    ctrl.contacts = [];
    ctrl.logoutUser = function () {
        // fires an event down the scope
        $scope.$broadcast('logout', ctrl.contacts);
    };
    // listen to a login event, callback that takes 
    // the event and data passed through the event
    $scope.$on('login', function (event, data) {
        console.log(event, data);
        ctrl.contacts.push(data);
    });
}

angular
    .module('app')
    .controller('ContactController', ContactController);
