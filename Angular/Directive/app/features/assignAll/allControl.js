angular.module('mainApp').factory('Auth',[function(){
  var auth = false;
  
  return {
    isAuth: function() {
      return auth;
    },
    
    toggleAuth: function() {
      auth = !auth;
    }
  };
}]);

angular.module('mainApp').controller('allControl',['$scope','Auth',function($scope,Auth){
  $scope.isAuth = Auth.isAuth;
  
  $scope.toggle = function() {
    Auth.toggleAuth();
  };
}]);

angular.module('mainApp').directive('myTransclude',['Auth', function(Auth) {
   function link(scope, element, attrs) {
    //    scope.flag=false;
       if (scope.myTransclude) {
            //scope.flag = !scope.flag;
           element[0].hidden=true;
           
       }
       else{
           //scope.flag=!scope.flag;
           element[0].hidden=false
       }
       
    // scope.$watch(Auth.isAuth, function(value, oldValue) {
    //   if (Auth.isAuth()) {
    //     $(p).hide();
    //   } else {
    //     $(p).show();
    //   }
    // });
  }
  
  return {
      scope:{
          myTransclude:'='
      },
    link: link
  };
    
}]);