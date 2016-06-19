'use strict';

var app = angular.module('myApp.components.footer', [
    'myApp.config'
]);

app.controller("footerController", function($scope) {
    $scope.currentDate = new Date()
});
