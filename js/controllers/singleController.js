let SingleController = function($scope, $stateParams, RiverService, $state) {


  RiverService.getRivers().then( function(response) {
    $scope.rivers = response.data.results;
  });
  
  $scope.rate = 0;

  RiverService.getRiver($stateParams.riverId).then( function (response) {
    $scope.singleRiver = response.data;
    
    if(response.data.rating) {
      $scope.rate = response.data.rating;
    }
  });

  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];

  $scope.rateMe = function (singleRiver) {
    RiverService.rate(singleRiver, $scope.rate).then( () => {
    });
  };

  $scope.delete = function () {
    RiverService.deleteRiver($stateParams.riverId).then( 
      $state.go('root.userHomePage')
    ); 
  };
};

SingleController.$inject = ['$scope', '$stateParams', 'RiverService', '$state'];

export default SingleController;