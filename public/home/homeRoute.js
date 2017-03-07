angular.module("Main")
.controller("homeController", ["$scope", "teaService", function ($scope, teaService) {
    $scope.teaDisplay = [];
    $scope.getTea = function () {
        teaService.getRequest()
            .then(function (response) {
                $scope.teaDisplay = response;
            })
    }
    $scope.getTea();
}]);