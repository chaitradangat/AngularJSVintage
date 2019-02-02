//controller for fetching user details from GitHub

(function () {

   //the angular module created can be refered with its name with no following dependencies.
   var app = angular.module("app");
   
    function UserDetailsController($scope, $http) {

        var GetUserDetailsComplete = function (response) {
            console.log(response.data);
            $scope.user = response.data;
        }

        var GetUserDetailsError = function (response) {
            console.log('Error fetching user details');
            console.log(response.data);
        }

        $http.get('https://api.github.com/users/chaitradangat')
            .then(GetUserDetailsComplete, GetUserDetailsError);
    }

    app.controller("UserDetailsController", UserDetailsController);

}());