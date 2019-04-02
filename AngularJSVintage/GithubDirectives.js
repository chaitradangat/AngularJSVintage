(function () {

    var app = angular.module("app");

    //#follow safe convention that all directives in angular shud be all lower case

    //#region Angular Directive for Rendering html 
    var userdetails = function () {
        return {
            restrict: "AEC",
            template: "<b>User Details Template</b>"
        }
    }
    //#endregion

    //#region Angular Directive for formatting style 
    var formatstyle = function () {

        var linkfunction = function (scope, element, attributes) {

            var elementToFormat = element.children()[0];

            $(elementToFormat).css({ "background-color": "orange" });
        };

        return {
            restrict: "AEC",
            link: linkfunction
            //#the return should always be "link" and not "linkfunction"
        };
    };
    //#endregion

    app.directive("userdetails", userdetails);

    app.directive("formatstyle", formatstyle);
}());