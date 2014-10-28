'use strict';

/* Controllers */

var itemController = angular.module('itemController', []);

itemController.controller('ItemControllerList', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('comic/getComics.php').success(function(data) {
            $scope.comics = data;
            for(var i = 0; i < $scope.comics.length;i++){
                $scope.comics[i].showDetails = false;
            }
            console.log($scope.comics);
        });
        $scope.orderProp = 'idComic';
    }]);

