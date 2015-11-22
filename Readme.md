## Welcome to My Project

> Link: http://gradient.surge.sh/#/

This is my first attempt at a webapp with AngularJS.

The app is used as a riverLog.  You can submit information about your trip and it will keep track of the number of days you have paddled. You can then click on the single picture to get more information about that specific paddling trip.


The login/create account functions are not currently available - when you click the login or create acct button it will take you to the main page.

I intened to add in more specific guidelines for most inputs. (River Class, Water Level(CFS v Ft), Boat and gear lists).  I want to eventually add in a dropdown/search feature for the river that you are entering. I also want to be able to check in to a river again and log how many times you have checked in to specific rivers.

> Objectives of the project: 
Be able to plan an entire application from start to finish
Demonstrate a strong foundation in working with AngularJS
Demonstrate a strong understanding of the parts of AngularJS
>> Project consists of:
  at least three controllers
  at least three different views (template files)
  at least one Factory & Service
  Using ui.router to navigate through the app
  Using Parse REST API for storing/managing your data



## Usage

- Clone this repo
- Run `npm install` to install all necessary dependencies
- Run `gulp start` to start the server and a handful of other tasks


## Assets Installed By Default

- [Normalize CSS](https://necolas.github.io/normalize.css/)

## Assets Setup and ready for use

- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Foundation 5](http://foundation.zurb.com/)

#### How to use them?

At the top of your `main.scss` file, just import any of the following:

```scss
@import "bourbon";
@import "neat";

@import "foundation";

@import "font-awesome";
```

> Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.

## NPM Tools Used

- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [JavaScript Code Style](http://jscs.info/)
- [SASS](http://sass-lang.com/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
