(function () {

    var app = angular.module("app");

    var JsonDataServiceOnError = function () {

    };

    var JsonDataServiceOnComplete = function () {

    };

    var FetchJsonData = function () {

    };


    var JsonDataService = function ($http) {

        var jsonpath = "testDatajson.json";

        var response = $http.get(jsonpath)
                            .then(JsonDataServiceOnComplete,JsonDataServiceOnError);
        return
        {
            FetchJsonData:FetchJsonData
        };
    };

    app.factory("JsonDataService", JsonDataService);






})();
