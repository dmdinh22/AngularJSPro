// $q for promises non angular objects
function DemoService($q, $http) {

    var todos = 'http://jsonplaceholder.typicode.com/todos';
    var comments = 'http://jsonplaceholder.typicode.com/comments';

    this.getTodos = function () {
        var defer = $q.defer(); // sets up a promise an object
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // resolve if successful
                    defer.resolve(JSON.parse(xhr.responseText));
                } else {
                    // reject if unsuccessful
                    defer.reject(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open('GET', todos, true);
        xhr.send();
        // return the deferred promise to wrap things up
        return defer.promise;
    };

    this.getComments = function () {
        // using $q as a constructor, using es6 promise spec
        return $q(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(JSON.parse(xhr.responseText));
                    }
                }
            };
            xhr.open('GET', comments, true);
            xhr.send();
        });
    };

    this.getAll = function () {
        var promiseOne = $http.get(todos);
        var promiseTwo = $http.get(comments);
		
        // returns $q when the array is all successfully resolved
        return $q.all([promiseOne, promiseTwo]);
    };

    this.getFirstResolved = function () {
        var promiseOne = $http.get(todos);
        var promiseTwo = $http.get(comments);
        // race to get fastest response
        return $q.race([promiseOne, promiseTwo]);
    };

}

angular
    .module('app')
    .service('DemoService', DemoService);
