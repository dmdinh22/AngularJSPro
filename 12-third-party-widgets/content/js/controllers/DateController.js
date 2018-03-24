function DateController() {
    // pass into directive
    this.date = new Date(); 
}

angular
    .module('app')
    .controller('DateController', DateController);
