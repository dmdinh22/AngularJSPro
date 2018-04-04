angular
    .module('app', [])
    .constant('TODO_API', 'http://jsonplaceholder.typicode.com/todos')
    .config(function ($httpProvider) { // inject the httpProvider
        $httpProvider.interceptors.push('MyHttpInterceptor'); //pushing in the factory
    });
