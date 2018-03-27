function CheckoutController() {
    // default object for form
    this.details = {
        username: '',
        password: '',
        coupon: 'summer-50'
    };
    // submit event
    this.onSubmit = function () {
        console.log(this.details);
    };
}

angular
    .module('app')
    .controller('CheckoutController', CheckoutController);
