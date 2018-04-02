function AuthController(FIREBASE_CONFIG, EventEmitter) {
    console.log(FIREBASE_CONFIG);
    this.user = 'David Dinh';
    this.onUpdate(EventEmitter({
    	user: this.user
    }));
}

angular
    .module('app')
    .controller('AuthController', AuthController);
