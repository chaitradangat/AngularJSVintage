(function () {

    var app = angular.module("app");

    var JsonDataController = function ($scope, JsonDataService) {

        var OnJsonDataServiceComplete = function (response) {
            $scope.jsondata = response.data;
        };

        var OnJsonDataServiceError = function (response) {
            console.log("error retrieving data from service.");
            console.log(response);
        };

        JsonDataService.FetchJsonData().then(OnJsonDataServiceComplete, OnJsonDataServiceError);
    };

    app.controller("JsonDataController", JsonDataController);
})();