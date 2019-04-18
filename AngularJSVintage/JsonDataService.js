(function () {

    var app = angular.module("app");

    var JsonDataService = function ($http) {

        var jsonpath = "testDatajson.json";

        var JsonDataServiceOnError = function (reason) {
            console.log(reason);
        };

        var JsonDataServiceOnComplete = function (response) {

            console.log(response.data);

            return response.data;
        };

        var FetchJsonData = function () {

            var response = $http.get(jsonpath)
                .then(JsonDataServiceOnComplete, JsonDataServiceOnError);

        };

        return
        {
            FetchJsonData:FetchJsonData
        };
    };

    app.factory("JsonDataService", JsonDataService);
})();
