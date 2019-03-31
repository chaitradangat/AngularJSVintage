(function () {

    var app = angular.module("app");

    var GithubService = function ($http) {

        var githubRepolistUrl = 'https://api.github.com/users/:username/repos'

        //#region code for get user 
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
        //#endregion

        //#region code for get repository list 

        var GetGithubRepositoryListOnComplete = function (response) {
            console.log(response.data);
        }

        var GetGithubRepositoryListOnError = function (response) {
            console.log(response.data);
        }

        var GetGithubRepositoryList = function (username) {
            $http.get(githubRepolistUrl.replace(':username', username))
                 .then(GetGithubRepositoryListOnComplete, GetGithubRepositoryListOnError);
        }
        
        //#endregion

        return {

            GetGithubUser: GetGithubUser,
            GetGithubRepositoryList: GetGithubRepositoryList
        };
    }

    app.factory("GithubService", GithubService);
}());