'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.config',
    'myApp.components.menu',
    'myApp.components.footer'
]);

app.config(function ($routeProvider, configServiceProvider) {
    var routeHrefPrefix = '#';
    var routePathPrefix = '/';
    var viewsDirectory = 'views';
    var viewFile = 'main.html';

    var menu = configServiceProvider.$get().menu;
    for (var i in menu) {
        var menuItem = menu[i];
        extractRouteFromMenu(menuItem);
    }

    function extractRouteFromMenu(menuItem) {
        var href = menuItem.href;

        if (hrefIsRoutePath(href)) {
            var viewName = href.substr(1);
            var routePath = routePathPrefix + viewName;
            addRouteToProvider(routePath, viewName);
        }
    }

    function hrefIsRoutePath(href) {
        return href.indexOf(routeHrefPrefix) == 0;
    }

    function addRouteToProvider(routePath, viewName) {
        $routeProvider.when(routePath, {
            templateUrl: viewsDirectory + '/' + viewName + '/' + viewFile
        });
    }
});

app.controller("headController", function($scope, configService) {
    $scope.config = configService;
});

app.controller("frontController", function($scope, configService) {
    $scope.config = configService;
});
