'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngResource'
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

app.controller("frontController", function($scope, $window, $location, $log) {
    $scope.message = "message1";
    $scope.activePath = "";

    $scope.$on( "$routeChangeStart", function(event, next, current) {
        $scope.activePath = $location.path().substr(1);
    });

    $scope.classForTab = function(tabName) {
        $log.info(tabName + " " + $scope.activePath);
        if (tabName == $scope.activePath) {
            return "active";
        }
    }
});
