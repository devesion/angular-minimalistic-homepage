'use strict';

var app = angular.module('myApp.config', []);

app.service('configService', function () {
    this.pageTitle = "My super minimalistic home page";
    this.pageDescription = "Description of my super minimalistic home page";
    this.userName = "Your full name";
    this.userTitle = "Your full title";
    this.userThumb = "img/thumb.JPG";
    this.menu = [
        {"name":"About", "href":"#about"},
        {"name":"Resume", "href":"#resume"},
        {"name":"Bookshelf", "href":"#bookshelf"},
        {"name":"Office", "href":"#office"},
        {"name":"Github", "href":"http://github.com", "preNameFa":"fa-github"},
        {"name":"Twitter", "href":"http://twitter.com", "preNameFa":"fa-twitter-square"},
        {"name":"Instagram", "href":"http://instagram.com", "preNameFa":"fa-instagram"} ];
});


