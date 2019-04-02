//controller for fetching user details from GitHub

(function () {

   //the angular module created can be refered with its name with no following dependencies.
   var app = angular.module("app");
   
    function UserDetailsController($scope, $http) {

        //Github users endpoint
        var GitHubApiUsersEndPoint = 'https://api.github.com/users/';
         
        //#region Get a user from Github 
        var GetUserDetailsComplete = function (response) {
            console.log(response.data);
            $scope.user = response.data;
        }

        var GetUserDetailsError = function (response) {
            console.log('Error fetching user details');
            console.log(response.data);
        }

        $scope.GetUserDetails = function () {

            $http.get(GitHubApiUsersEndPoint +'chaitradangat')
                .then(GetUserDetailsComplete, GetUserDetailsError);
        }
        //#endregion
    }

    app.controller("UserDetailsController", UserDetailsController);
}());