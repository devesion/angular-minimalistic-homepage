# angular-minimalistic-homepage

This is minimalistic homepage template built on top of AngularJS. It is my side project and I did it for my personal purposes but maybe it'll be useful for others. So feel free to use it, hack it and contribute by forking, opening issues, making pull requests.

### Requisites
* bower installed (tested on 1.7.9)
* lessc installed (tested on 2.7.1)

### Installation

There are a couple of steps to build your personal minimalistic homepage:
* fork my project into your github account
* git clone [YOUR REPOSITORY]
* git remote add upstream https://github.com/devesion/angular-minimalistic-homepage.git
* configure your homepage - see [Configuration](#configuration)
* ./build.sh

### Fetching and merging changes from upstream project
* git fetch
* git merge upstream/master

### Configuration

Just before building you should configure your homepage. To do it you need to alter two files:

#### src/css/style-theme.less
Change the following less variables as you want. The names are self-descriptive so I won't comment them. When it comes to setting fonts you must edit both @mainFont and @import due to lessc limitations.

```css
@mainFont: "Roboto Condensed";
@backgroundColor: #fdfdfd;
@menuBackgroundColor: #212121;
@menuLinkColor: #d0d0d0;
@menuUserNameTextColor: #ab47bc;
@menuUserNameTextSize: 1.8em;
@menuUserTitleTextColor: #d0d0d0;
@menuUserTitleTextSize: 1.2em;
@footerBackgroundColor: #212121;
@footerLinkColor: #ab47bc;
@footerTextColor: #d0d0d0;
@footerTextSize: 1.3em;
@pageTextSize: 1.3em;
@pageHeaderColor: #ab47bc;
@primaryColor: #212121;
@primaryLinkColor: #ab47bc;

@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300&subset=latin,latin-ext");
```

#### src/config.js
This file contains configurable reusable content of your homepage. Just edit it.

```javascript
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
```


### Demo

You can find online demo site [here](http://dembol.org) - this is my personal homepage.

### Screenshots

Please find a couple of screenshots below.

![Angular Minimalistic Homepage Screen 1](https://github.com/dembol/angular-minimalistic-homepage/raw/master/demo/screenshots/screenshot1.jpg "Angular Minimalistic Homepage Screen 1")


