let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: './templates/admin/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: './templates/admin/landing.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: './templates/admin/login.tpl.html'
    })
    .state('root.createAcct', {
      url: '/createAcct',
      templateUrl: './templates/admin/createAcct.tpl.html'
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
    .state('root.editRiver', {
      url: '/editRiver/:riverId',
      templateUrl: './templates/editRiver.tpl.html'
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