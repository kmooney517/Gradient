let RiverService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/river';

  // Get all Rivers for user Instance

  this.getRivers = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      // cache: true
    });
  };


  // Get River Instance

  this.getRiver = function (riverId) {
    return $http({
      method: 'GET',
      url: url + '/' + riverId,
      headers: PARSE.CONFIG.headers,
      // cache: true
    });
  };


  // Creating a delete River instance

  this.deleteRiver = function (riverId) {
    return $http({
      method: 'DELETE',
      url: url + '/' + riverId,
      headers: PARSE.CONFIG.headers
    });
  };


  // Creating Add a new River Instance

  let River = function (obj) {
    this.photo = obj.photo;
    this.name = obj.name;
    this.location = obj.location;
    this.class = obj.class;
    this.level = obj.level;
    this.date = obj.date;
    this.description = obj.description;
    this.upVotes = obj.upVotes;
    this.downVotes = obj.downVotes;
    this.boat = obj.boat;
    this.equipment = obj.equipment;
  };

  this.addRiver = function (obj) {
    let r = new River(obj);

    return $http.post(url, r, PARSE.CONFIG);

  };


  // Creating Edit an existing River Instance

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  // Creating the Rating System

  this.rate = function (obj, rating) {
    obj.rating = rating;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

};

RiverService.$inject = ['$http', 'PARSE'];

export default RiverService;