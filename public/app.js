angular.module("Main", ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'homeController',
            templateUrl: 'home/home.html'
        })
        .when('/price', {
            controller: 'priceController',
            templateUrl: 'price/price.html'
        })
        .when('/about', {
            controller: 'about',
            templateUrl: 'about/about.html'
        })
        .otherwise({
            redirectTo: "/home"
        });

});