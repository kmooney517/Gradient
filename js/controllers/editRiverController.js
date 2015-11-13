let EditRiverController = function ($scope, $stateParams, RiverService, $state, sweet) {

  console.log(RiverService);

  RiverService.getRiver($stateParams.riverId).then( function (response) {
    $scope.singleRiver = response.data;
    console.log(response.data);
  });


  $scope.editRiver = function (obj) {
    RiverService.update(obj).then( function(response) {
    });


    // sweet.show({
    //   title: 'Confirm',
    //   text: 'Delete this file?',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#DD6B55',
    //   confirmButtonText: 'Yes, delete it!',
    //   closeOnConfirm: false
    // }, 
    // function() {
    //   sweet.show('Deleted!', 'The file has been deleted.', 'success');
    // }
    // );
  

    $state.go('root.userHomePage');
  };


};

EditRiverController.$inject = ['$scope', '$stateParams', 'RiverService', '$state', 'sweet'];

export default EditRiverController;