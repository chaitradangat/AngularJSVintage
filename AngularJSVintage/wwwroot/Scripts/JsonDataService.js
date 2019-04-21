(function () {

    var app = angular.module("app");

    var JsonDataService = function ($http) {

        var FetchJsonData = function () {

            //var dataPromise = $http.get("https://api.github.com/users/chaitradangat/repos");

            var dataPromise = $http.get("/Scripts/testDatajson.json");

            return dataPromise;
        };

        return {
            FetchJsonData : FetchJsonData
        }
        
    };

    app.factory("JsonDataService", JsonDataService);
})();
