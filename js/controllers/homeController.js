let HomeController = function ($scope, $location, $state) {

  $scope.signInClick = function () {
    $location.path('/login');
    // $state.go('root.login');
  };

  $scope.createAcctClick = function () {
    $location.path('/createAcct');
  };

  $scope.mainPageClick = function () {
    $location.path('/userHomePage');
  };

};

HomeController.$inject = ['$scope', '$location', '$state'];

export default HomeController;