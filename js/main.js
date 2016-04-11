var app = angular.module('researchHubApp', ['ngRoute']);

/**
 * Route Configuration
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function ($scope, $location, $http) {
    console.log("Page Controller reporting for duty.");
});