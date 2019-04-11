(function () {

    var app = angular.module("app");

    var JsonDataController = function ($scope, $http) {

        var OnJsonDataFetchComplete = function (response) {
            console.log(response.data);
        }

        var OnJsonDataFetchError = function () {
            console.log("error!");
        }

        $scope.GetJsonData = function () {

            $http.get("/testDatajson.json")
                .then(OnJsonDataFetchComplete, OnJsonDataFetchError);

        }
    }


    app.controller("JsonDataController", JsonDataController);

})();