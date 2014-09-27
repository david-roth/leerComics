/**
 * Created by davidroth on 16/09/14.
 */
(function () {
    var app = angular.module("comicDisplay", []);
    app.controller('ItemController', function ($scope, $http) {
            $http.get('http://localhost:63342/leerComics/index.php').success(function(data) {
            $scope.comics = data;
        });
        $scope.orderProp = 'IDCOMIC'
    });
})();

