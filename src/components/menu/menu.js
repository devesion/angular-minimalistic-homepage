'use strict';

var app = angular.module('myApp.components.menu', [
    'myApp.config'
]);

app.controller("menuController", function($scope, configService) {
    $scope.config = configService;
});
