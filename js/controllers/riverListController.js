let RiverListController = function ($scope, RiverService) {

  RiverService.getRivers().then( function(response) {
    $scope.rivers = response.data.results;
    $scope.riverDays = response.data.results.length;
  });

  $scope.upVotes = 0;
  $scope.downVotes = 0;



  $scope.upVote = function () {
    $scope.upVotes = $scope.upVotes + 1;
  };

  $scope.downVote = function () {
    $scope.downVotes = $scope.downVotes + 1;
  };

};

RiverListController.$inject = ['$scope', 'RiverService'];

export default RiverListController;