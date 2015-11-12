let EditRiverController = function ($scope, $stateParams, RiverService, $state) {

  console.log(RiverService);

  RiverService.getRiver($stateParams.riverId).then( function (response) {
    $scope.singleRiver = response.data;
  });


  $scope.editRiver = function (obj) {
    RiverService.update(obj).then( function(response) {
    });

    $state.go('root.userHomePage');
  };
};

EditRiverController.$inject = ['$scope', '$stateParams', 'RiverService', '$state'];

export default EditRiverController;