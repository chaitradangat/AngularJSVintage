(function () {

    var app = angular.module("app",[]);

    var maincontroller = function ($scope) {

        $scope.message = "Angular Vintage Project using the original AngularJS library :)";
    };

    app.controller("maincontroller",maincontroller);

}());