
angular.module('mainApp')
  .controller('boolControl', ['$scope', function($scope) {
    $scope.names = [
      {name: 'John',   tech: '555-1212',  id: 10},
      {name: 'Mary',   tech: '555-9876',  id: 19},
      {name: 'Mike',   tech: '555-4321',  id: 21},
      {name: 'Adam',   tech: '555-5678',  id: 35},
      {name: 'Julie',  tech: '555-8765',  id: 29}
    ];
  }]);