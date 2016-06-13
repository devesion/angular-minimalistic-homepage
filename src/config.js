'use strict';

var app = angular.module('myApp.config', []);

app.service('configService', function () {
    this.pageTitle = "My super minimalistic home page";
    this.pageDescription = "Description of my super minimalistic home page";
    this.userName = "Your full name";
    this.userTitle = "Your full title";
    this.userThumb = "img/thumb.JPG";
});


