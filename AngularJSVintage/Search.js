//The controller for searching user data

(function () {

    var app = angular.module("app");

    var SearchController = function ($scope, GithubService) {

        $scope.Search = function () {

            GithubService.GetGithubUser($scope.username);

            //console.log($scope.username);
        }

        $scope.SearchRepoList = function () {

            GithubService.GetGithubRepositoryList($scope.username);
        }
    }

    app.controller("SearchController", SearchController);
}());