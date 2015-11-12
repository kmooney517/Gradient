let RiverListController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/river';

  $http.get(url, PARSE.CONFIG).then( function(response) {
    $scope.rivers = response.data.results;
  });


};

RiverListController.$inject = ['$scope', '$http', 'PARSE'];

export default RiverListController;