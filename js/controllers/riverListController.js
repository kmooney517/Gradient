let RiverListController = function ($scope, $http, PARSE, $location) {

  let url = PARSE.URL + 'classes/river';

  $http.get(url, PARSE.CONFIG).then( function(response) {
    $scope.rivers = response.data.results;
  });

  $scope.goToAddRiverClick = function () {
    $location.path('/addNewRiver');
  };


};

RiverListController.$inject = ['$scope', '$http', 'PARSE', '$location'];

export default RiverListController;