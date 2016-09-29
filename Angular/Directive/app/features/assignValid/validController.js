    angular.module("mainApp")         
        .controller("validController", function($scope) {
          $scope.reset = function(){              
              $scope.firstName = "Rajiv", 
              $scope.lastName = "Mishra",
              $scope.email = "Rajiv@gmailt.com";       
          };
        $scope.reset(); 
   
    $scope.submit=function () {
           $scope.result= $scope.firstName ;
           $scope.result2=$scope.lastName;
            $scope.result3=$scope.email;
             $scope.result4=$scope.contact;
              $scope.result5=$scope.gender;
               $scope.result6=$scope.location;
                }
        $scope.submit();
    });