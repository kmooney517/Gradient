let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/river/' + $stateParams.riverId;

  $http.get(url, PARSE.CONFIG).then( (response) => {

    $scope.singleRiver = response.data;

  });

};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;