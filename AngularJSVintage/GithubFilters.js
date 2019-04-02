(function () {

    var app = angular.module("app");

    var upperCaseCustomFilter = function () {
        return function (value) {

            if (value) {
                return value.toUpperCase() + ' - converted';
            }
            else {
                return '';
            }
        }
    }

    app.filter("upperCaseCustomFilter",upperCaseCustomFilter);

}());