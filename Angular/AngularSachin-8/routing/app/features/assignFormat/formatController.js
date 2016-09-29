 
 
   angular.module("mainApp").controller("formatController", function($scope) {
            $scope.student = { 
                firstName: "Anupreeta", 
                lastName: "Mishra",
                fees:500,   
            };
        $scope.fullName = function() {         
            return $scope.student.firstName + " " + $scope.student.lastName; 
        } 
    });