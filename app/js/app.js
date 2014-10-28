'use strict';

/* App Module */

var comicDisplayApp = angular.module("comicDisplayApp", [
    'ngRoute',
    'itemController'
]);
    comicDisplayApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'templates/comicItem.html',
                    controller: 'ItemControllerList'
                }).
                when('/comic:idComic', {
                    templateUrl: 'templates/comicItem.html',
                    controller: 'ItemControllerList'
                }).                otherwise({
                    redirectTo: 'templates/comicItem.html'
                });
        }]);
