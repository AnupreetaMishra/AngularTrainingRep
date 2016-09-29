angular.module('mainApp').factory('list', function($http) {
  var promise = null;

  return function() {
    if (promise) {
      
      return promise;
    } else {
      promise = $http.get("../mockJson/mock.json");
      return promise;
    }
  };
});
