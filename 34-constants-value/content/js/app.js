angular
    .module('app', [])
// setting constant variable - should be read only
    .constant('FIREBASE_CONFIG', {
        apiKey: 'b3oc_09KcKkk3WijJsbc',
        authDomain: 'tm-contacts-manager.firebaseapp.com',
        databaseURL: 'https://tm-contacts-manager.firebaseio.com',
        storageBucket: '',
    })
// mutable value.					pass in an event
    .value('EventEmitter', function (event) {
        $event: event;
    });
