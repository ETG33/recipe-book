
var app = angular.module("recipeBookApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {

    }).when("/signup", {
        
    }).when("/recipes", {
        
    }).when("/new", {
        
    })
})