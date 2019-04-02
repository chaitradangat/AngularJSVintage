(function () {

    var app = angular.module("app");

    //#angular directives should always start lowercase
    var userdetails = function () {
        return {
            restrict:"AEC",
            template:"<b>User Details Template</b>"
        }
    }

    app.directive("userdetails",userdetails);

}());