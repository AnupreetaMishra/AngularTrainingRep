angular.module('mainApp').directive('myCustom', function () {
        return {
            // scope:{
            //     myCustom: "=",
                
                
            // },
            restrict:"EA",
            templateUrl: 'features/assignTable/table.htm'
            
        };
    });
  //  angular.module('mainApp').directive('myCustomTable',function(){
  //     return{
  //       restrict:'E',
  //       scope:{
  //           names:'='
  //       },
  //       template: '<tr ng-repeat="name in names"><td>{{name.id}}</td><td>{{name.first_name}}</td><td>{{name.last_name}}</td><td>{{name.hobby}}</td></tr>'
        
  //     }
  //   });
    
