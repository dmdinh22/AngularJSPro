// to intercept the http call and manipulate the data
function MyHttpInterceptor(TODO_API, $q) {
    return {
        request: function (config) {
            if (config.url === TODO_API) {
                // adding a custom header
                config.headers['x-csrf-token'] = 'dmdinh';
            }
            console.log('request', config);
            return config;
        },
        requestError: function (config) {
            console.log(config);
            return $q.reject('requestError', config);
        },
        response: function (response) {
            console.log('response', response);
            return response;
        },
        responseError: function (response) {
            console.log('responseError', response);
            return $q.reject(response);
        }
    };
}

angular
    .module('app')
    .factory('MyHttpInterceptor', MyHttpInterceptor);
