function CounterController($scope) {
    // $scope.count = 0;
    this.count = 0;
    this.countList = [];
    this.increment = function increment() {
        // $scope.count++;
        this.count++;
        this.countList.unshift({id: this.count});
    };
    this.decrement = function decrement() {
        // $scope.count--;
        this.count--;
        this.countList.unshift({id: this.count});
    };
    // $scope.$watch(angular.bind(this, function() {
    //     //return this.count;
    //     return this.countList;
    // }), function(newValue, oldValue) {
    //     if (newValue === oldValue) {
    //         return;
    //     }
    //     console.log(newValue,oldValue);
    // }, true); // third arg 'true' for deepWatch
    // watchCollection - good for observing arrays of objects
    $scope.$watchCollection(angular.bind(this, function () {
        return this.countList;
    }), function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        console.log(newValue, oldValue);
    });
}

angular
    .module('app')
    .controller('CounterController', CounterController);
