angular.module("mainApp")     
        .controller("billControl", function($scope) {
            $scope.names = [{
        name: "Noddy",
        price: "60"
    }, {
        name: "Chew",
        price: "60"
    },
 {
        name: "Bull",
        price: "100"
    }, 
 {
        name: "Tea",
        price: "10"
    },  
 {
        name: "Pizza",
        price: "150"
    }]

    $scope.selectedItems = [];
    $scope.value = function (isSelected, item) {
        if (isSelected == true) {
            $scope.selectedItems.push(item);
        } else {
            console.log(item.name);
            angular.forEach($scope.selectedItems, function (itemRmv, $index) {
                if (itemRmv.name == item.name) {
                    $scope.selectedItems.splice($index, 1);
                }
            })
        }
    }
     
    });

    mainApp.filter('getprice', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + parseInt(val.price)
        });
        return total;
    }
});