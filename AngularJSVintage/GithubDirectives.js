(function () {

    var app = angular.module("app");

    //#follow safe convention that all directives in angular shud be all lower case

    //#region Angular Directive for Rendering html snippet 
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

            //reading element attributes
            var attr1 = attributes.$attr["attr1"];
            var attr2 = attributes.$attr["attr2"];

            var elementToFormat = element.children()[0];

            $(elementToFormat).css({ "background-color": "orange" });
        };

        return {
            restrict: "E",
            link: linkfunction
            //#the return should always be "link" and not "linkfunction"
        };
    };
    //#endregion

    //#region Angular Directive for formatting style using attribute 

    var formatstyleattribute = function () {

        var linkfunction = function (scope, element, attributes) {
            debugger;

            var attr1 = attributes.$attr["formatstyleattribute"];
            var attr2 = attributes.$attr["attr2"];

            $(element).css({ "background-color": "yellow" });
        };

        return {
            restrict:"A",
            link:linkfunction
        };
    };
    //#endregion



    app.directive("userdetails", userdetails);

    app.directive("formatstyle", formatstyle);

    app.directive("formatstyleattribute", formatstyleattribute);
}());