let RiverFactory = function () {

  let foo = function() {
    return 'bar from factory';
  };

  return {
    foo: foo
  };

};

RiverFactory.$inject = [];

export default RiverFactory;