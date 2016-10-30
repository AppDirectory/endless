var endless = angular.module('endless', ['ngRoute']);

endless.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/home.html"
    })
    .when("/login/", {
        templateUrl : "template/login.html"
    })
    .when("/contact/", {
        templateUrl : "template/contact.html"
    })
    .when("/product/", {
        templateUrl : "template/product.html"
    })
    .when("/single/", {
        templateUrl : "template/single.html"
    })
    .when("/account/", {
        templateUrl : "template/account.html"
    })
    .when("/checkout/", {
        templateUrl : "template/checkout.html"
    })
    .when("/product/:productid?", {
        templateUrl : "template/single.html",
        controller : "productCtrl"
    })
    .otherwise({
        template : "<div class='container'>404 not found</div>"
    });
    
    $locationProvider.html5Mode(true);
});

endless.controller("productCtrl", function ($scope, $http) {
    $http.get('https://75rbnf6r07.execute-api.us-east-1.amazonaws.com/dev/product/hello').
        then(function(response) {
            $scope.product = response.data;
        });
});