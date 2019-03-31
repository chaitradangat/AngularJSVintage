(function () {

    var app = angular.module("app");

    var UpperCaseCustomFilter = function () {
        return function (value) {
            return value.toUpperCase() + ' - converted';
        }
    }

    app.filter("UpperCaseCustomFilter",UpperCaseCustomFilter);

}());