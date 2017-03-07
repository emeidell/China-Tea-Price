angular.module("Main")
.service("teaService", ["$http", function ($http) {
    this.teaRequest = [];
    var self = this;

    this.getRequest = function () {
        return $http.get('http://www.quandl.com/api/v3/datasets/ODA/PTEA_USD.json?api_key=jR1UMz9rFAHoLeFAAtsx').then(function(response) {
            console.log(response);
            self.teaRequest = response.data;
            return self.teaRequest;


        });
    }

}]);


//API Key: jR1UMz9rFAHoLeFAAtsx