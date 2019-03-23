(function () {

    var app = angular.module("app");

    var GithubService = function ($http) {

        var GetGithubUserOnComplete = function (response) {
            console.log(response.data);
        }

        var GetGithubUserOnError = function (response) {
            console.log(response.data);
        }

        var GetGithubUser = function (username) {
            $http.get('https://api.github.com/users/' + username)
                .then(GetGithubUserOnComplete, GetGithubUserOnError);
        }

        //#start code for get reporsitory list
        var GetGithubRepositoryListOnComplete = function (response) {
            console.log(response.data);
        }

        var GetGithubRepositoryListOnError = function (response) {
            console.log(response.data);
        }

        var GetGithubRepositoryList = function (username) {
            $http.get('' + username)
                .then(GetGithubRepositoryListOnComplete, GetGithubRepositoryListOnError);
        }
        //#end code for get reporsitory list

        return {

            GetGithubUser: GetGithubUser,
            GetGithubRepositoryList : GetGithubRepositoryList
        };
    }



    app.factory("GithubService", GithubService);
}());