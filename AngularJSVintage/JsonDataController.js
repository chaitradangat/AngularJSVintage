(function () {

    var app = angular.module("app");

    var JsonDataController = function ($scope,$resource) {

        var OnJsonDataFetchComplete = function (response) {
            console.log(response.data);
        }

        var OnJsonDataFetchError = function () {
            console.log("error!");
        }

        $scope.GetJsonData = function () {

            var jsondata = $resource("testDatajson.json");

            jsondata.get()
                .then(OnJsonDataFetchComplete, OnJsonDataFetchError);

            //$http.get("/testDatajson.json")
                //.then(OnJsonDataFetchComplete, OnJsonDataFetchError);
        }
    }

    app.controller("JsonDataController", JsonDataController);
})();