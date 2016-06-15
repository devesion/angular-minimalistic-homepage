'use strict';

var app = angular.module('myApp.components.menu', [
    'myApp.config'
]);

app.controller("menuController", function($scope, configService, $log, $location) {
    $scope.config = configService;

    $scope.menuTabs = function() {
        return configService.menu;
    };

    $scope.activeTab = "";
    $scope.$on( "$routeChangeStart", function() {
        $scope.activeTab = "#" + $location.path().substr(1);
    });

    $scope.classForTab = function(tabName) {
        if (tabName == $scope.activeTab) {
            return "active";
        }
    }
});
