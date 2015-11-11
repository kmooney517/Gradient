let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: './templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: './templates/landing.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'HomeController',
      templateUrl: './templates/login.tpl.html'
    })
    .state('root.createAcct', {
      url: '/createAcct',
      controller: 'HomeController',
      templateUrl: './templates/createAcct.tpl.html'
    })
    .state('root.userHomePage', {
      url: '/userHomePage',
      controller: 'RiverListController',
      templateUrl: './templates/userHomePage.tpl.html'
    })
    .state('root.singleRiverPage', {
      url: '/singleRiver/:riverId',
      controller: 'SingleController',
      templateUrl: './templates/singleRiver.tpl.html'
    })
    .state('root.addNewRiver', {
      url: '/addNewRiver',
      controller: 'AddRiverController',
      templateUrl: './templates/addNewRiver.tpl.html'
    })
  ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;