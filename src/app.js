'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.config',
    'myApp.components.menu'
]);

app.config(function ($routeProvider) {
	$routeProvider.when('/about', {
        templateUrl: 'views/about/main.html'
    }).when('/resume', {
    	templateUrl: 'views/resume/main.html'
    }).when('/bookshelf', {
        templateUrl: 'views/bookshelf/main.html'
    }).when('/office', {
        templateUrl: 'views/office/main.html'
    }).otherwise('/about')
});

app.controller("headController", function($scope, configService) {
    $scope.config = configService;
});

app.controller("frontController", function($scope, configService) {
    $scope.config = configService;
});
