import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation'; 
import 'angular-h-sweetalert';
import configFunction from './config';
import AddRiverController from './controllers/addNewController';
import RiverListController from './controllers/riverListController';
import SingleController from './controllers/singleController';
import EditRiverController from './controllers/editRiverController';
import RiverService from './services/riverService';


angular
  .module('app', ['ui.router', 'mm.foundation', 'hSweetAlert'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'qaWIcdEj6MaSJocTKn123YiqrBUBHfH37r0Cld5y',
        'X-Parse-REST-API-Key': 'nIk0XJw24U3jzaWEhXQXZu4D4XSGZQKEm2bDnn6s'
      }
    }
  })

  .config(configFunction)
  .controller('SingleController', SingleController)
  .controller('AddRiverController', AddRiverController)
  .controller('RiverListController', RiverListController)
  .controller('EditRiverController', EditRiverController)
  .service('RiverService', RiverService)
;
