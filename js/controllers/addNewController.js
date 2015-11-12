let AddRiverController = function($scope, $http, PARSE, $state, RiverService) {

  $scope.addRiver = function (obj) {
    RiverService.addRiver(obj).then( function(response) {
      $scope.river = {};
    });

    $state.go('root.userHomePage');
  };
};

AddRiverController.$inject = ['$scope', '$http', 'PARSE', '$state', 'RiverService'];

export default AddRiverController;