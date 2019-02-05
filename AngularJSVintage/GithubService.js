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

        return {

            GetGithubUser: GetGithubUser

        };
    }



    app.factory("GithubService", GithubService);
}());