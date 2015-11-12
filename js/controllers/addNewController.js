let AddRiverController = function($scope, $http, PARSE, $location) {

  let url = PARSE.URL + 'classes/river';

  let River = function (obj) {
    this.photo = obj.photo;
    this.name = obj.name;
    this.location = obj.location;
    this.class = obj.class;
    this.level = obj.level;
    this.date = obj.date;
    this.userRating = obj.userRating;
    this.description = obj.description;
  };

  $scope.addRiver = function (obj) {

    let r = new River(obj);
    $http.post(url, r, PARSE.CONFIG).then( function(response) {
      $scope.river = {};
    });

    $location.path('/userHomePage');
  };
};

AddRiverController.$inject = ['$scope', '$http', 'PARSE', '$location'];

export default AddRiverController;