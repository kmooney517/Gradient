let EditRiverController = function ($scope, $stateParams, RiverService, $state, sweet) {

  RiverService.getRiver($stateParams.riverId).then( function (response) {
    $scope.singleRiver = response.data;
  });


  $scope.editRiver = function (obj) {
    sweet.show({
      title: 'Confirm',
      text: 'wat',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Submit Changes!',
      closeOnConfirm: false
    },
    function() {
      RiverService.update(obj).then( function(response) {
      });
      sweet.show('Cancel!', '', 'success');
      $state.go('root.userHomePage');
    }
    );
  };


};

EditRiverController.$inject = ['$scope', '$stateParams', 'RiverService', '$state', 'sweet'];

export default EditRiverController;