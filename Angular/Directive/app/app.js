var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            // when('/addStudents', {
            //     templateUrl: 'features/addStudents.htm',
            //     controller: 'addStudentsController'
            // }).
            // when('/viewStudents', {
            //     templateUrl: 'features/viewStudents.htm',
            //     controller: 'viewStudentsController'
            // }).
            when('/viewFullName', {
                templateUrl: 'features/assignFullName/fullname.htm'
                // controller: 'fullnameController'
            }).
            // when('/funMath', {
            //     templateUrl: 'features/assignMath/math.htm',
            //     controller: 'mathController'
            // }).
            // when('/funEmp', {
            //     templateUrl: 'features/assignEmp/employee.htm',
            //     controller: 'empController'
            // }).
            // when('/funCurr', {
            //     templateUrl: 'features/assignFormat/format.htm',
            //     controller: 'formatController'
            // }).
            // when('/funValid', {
            //     templateUrl: 'features/assignValid/valid.htm',
            //     controller: 'validController'
            // }).
            // when('/funBill', {
            //     templateUrl: 'features/assignBill/bill.htm',
            //     controller: 'billControl'
            // }).
            when('/funTable', {
                templateUrl: 'features/assignTable/dirtable.htm',
                controller: 'tableControl',
                directive:'tableDir'
            }).
            when('/funBool', {
                templateUrl: 'features/assignBool/bool.htm',
                controller: 'boolControl',
                directive:'boolDir'
            }).
            when('/funClick', {
                templateUrl: 'features/assignClick/click.htm',
                directive: 'clickControl'
            }).
            when('/funAll', {
                templateUrl: 'features/assignAll/all.htm',
                controller: 'allControl',
                directive:'myTransclude',
                factory:'trans',
            }).
            when('/funClickCtrl', {
                templateUrl: 'features/assignClickCtrl/clickctrl.htm',
                directive: 'clicky',
                controller:'MyCtrl'
            }).
            otherwise({
                redirectTo: '/viewFullName'
            });
    }]); 