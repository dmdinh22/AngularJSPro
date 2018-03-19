function CounterController() { // remove $scope param
    //this.count = $scope.scount;
    this.increment = function increment() {
        this.count++;
    };
    this.decrement = function decrement() {
        this.count--;
    };
}

angular
    .module('app')
    .controller('CounterController', CounterController);
