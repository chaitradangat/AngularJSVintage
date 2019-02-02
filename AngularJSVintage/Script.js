(function () {

    //The angular module can be created only once but can be declared any number of times. 
    var app = angular.module("app",[]);

    var maincontroller = function ($scope) {

        $scope.message = "Angular Vintage Project using the original AngularJS library :)";
    };

    app.controller("maincontroller",maincontroller);

}());