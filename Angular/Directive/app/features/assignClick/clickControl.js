angular.module('mainApp').directive('myDomDirective', function () {
    var flag=true;
    return {
        link: function ($scope, element, attrs) {
            
            element.bind('click', function () {
                if(flag){
                    flag = !flag;
                    element.html('You clicked me! Welcome to the end.');
                    // $scope.flag= !$scope.flag;
            //
            }
            else{
                flag = !flag;
                element.html('Told ya not to click!');
            }
            });
            // element.bind('mouseleave', function () {
            //     element.css('background-color', 'white');
            // });
        }
    };
});