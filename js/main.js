var app = angular.module('researchHubApp', ['ngRoute']);

/**
 * Route Configuration
 */
rootPath = 'http://localhost/laravel/public/';

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Index
        .when("/", {templateUrl: "partials/home.html", controller: "indexController"})
        // Home
        .when("/home", {templateUrl: "partials/wall.html", controller: "wallController"});
        // Pages
        //.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('indexController', function ($scope, $location, $http) {
    $http.jsonp(rootPath + 'user' + '?callback=JSON_CALLBACK').then(successCallback, errorCallback);
    function successCallback(response) {
        console.log(response);
        if(response.data.status == 'logged_in') {
            $location.path('/home');
        }        
    }
    function errorCallback() {
        alert("There has been an error. Please refresh the page or try again after a few minutes");
    }
});
app.controller('wallController', function ($scope, $location, $http) {
    $http.jsonp(rootPath + 'user' + '?callback=JSON_CALLBACK').then(successCallback, errorCallback);
    function successCallback(response) {
        console.log(response);
        if(response.data.status == 'not_logged_in') {
            $location.path('/');
        }
        else {
            $scope.user = response.data.user;
            console.log($scope.user);
        }
        
    }
    function errorCallback() {
        alert("There has been an error. Please refresh the page or try again after a few minutes");
    }
});