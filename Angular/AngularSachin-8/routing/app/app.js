var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/addStudents', {
                templateUrl: 'features/addStudents.htm',
                controller: 'addStudentsController'
            }).
            when('/viewStudents', {
                templateUrl: 'features/viewStudents.htm',
                controller: 'viewStudentsController'
            }).
            when('/viewFullName', {
                templateUrl: 'features/assignFullName/fullname.htm'
                // controller: 'fullnameController'
            }).
            when('/funMath', {
                templateUrl: 'features/assignMath/math.htm',
                controller: 'mathController'
            }).
            when('/funEmp', {
                templateUrl: 'features/assignEmp/employee.htm',
                controller: 'empController'
            }).
            when('/funCurr', {
                templateUrl: 'features/assignFormat/format.htm',
                controller: 'formatController'
            }).
            when('/funValid', {
                templateUrl: 'features/assignValid/valid.htm',
                controller: 'validController'
            }).
            when('/funBill', {
                templateUrl: 'features/assignBill/bill.htm',
                controller: 'billControl'
            }).
            otherwise({
                redirectTo: '/viewFullName'
            });
    }]); 