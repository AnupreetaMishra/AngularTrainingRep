

angular.module('mainApp').controller('mathController', function ($scope, Calculator) { 
    $scope.number=6;  
    $scope.result=0;
    $scope.sign = 'Square';
    
    
    $scope.doCalculations = function(sign, number){
        switch(sign){
            case 'Square': $scope.result = Calculator.square(number); break;
            case 'Cube': $scope.result = Calculator.cube(number); break;
            case 'Fact': $scope.result = Calculator.fact(number); break;
        }
    };

});

angular.module('mainApp').service('Calculator', function(){

    this.square = function(a){
        return a * a;
    };
    
    this.cube = function(a){
        return a * a * a;
    };
    
    this.fact = function(a){
        f=1;
      for(i=1;i<=a;i++)
      {
          f=f*i;
      }
        return f;
    };
    

});