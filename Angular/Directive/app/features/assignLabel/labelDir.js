angular.module("mainApp").directive('labelDir',function(){
    return{
        restrict:'E',
        scope:{obj:'='},
        templateUrl: 'labelTemp.htm'
    }
});