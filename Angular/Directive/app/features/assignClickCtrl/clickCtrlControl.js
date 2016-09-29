

function MyCtrl($scope) {
   $scope.test = function(){
       alert('Welcome to the end of the world!');
   };
   $scope.test2 = function(){
       alert('Wait a minute! You think preparing for the end of the world is easy!');
   };
}

angular.module('mainApp')
        .directive('clicky', function(){

    
        return {
            restrict: 'A',
            scope: {
                clicky: '&'  
            },
            link: function(scope, element, attrs){
               element.bind('click', function(e) {
                  scope.clicky();
               });
            }
      };
    });