//The controller for searching user

(function () {

    var app = angular.module("app");

    var SearchController = function($scope) {

        $scope.Search = function () {
            console.log($scope.username);
        }
    }

    app.controller("SearchController", SearchController);
}());