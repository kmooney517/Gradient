let SingleController = function($scope, $stateParams, RiverService, $state) {

  RiverService.getRivers().then( function(response) {
    $scope.rivers = response.data.results;
  });

  RiverService.getRiver($stateParams.riverId).then( function (response) {
    $scope.singleRiver = response.data;
  });



  $scope.delete = function () {
    RiverService.deleteRiver($stateParams.riverId).then( 
      $state.go('root.userHomePage')
    ); 
  };
};

SingleController.$inject = ['$scope', '$stateParams', 'RiverService', '$state'];

export default SingleController;