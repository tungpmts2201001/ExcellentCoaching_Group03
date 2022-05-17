var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        //1. Tiện ích làm mờ nút Update
        $scope.btnUpdate = true;
        
        //2. Đọc Data từ JSON (R - read)
        $http.get("carDB.json")
        .then(function(rspt) {
            $scope.carList = rspt.data.cars;
        })

        //2.1 Khai báo thêm biến môi trường
        $scope.carModel = {} //Declare an object
        $scope.carList = [];  //Declare an array

        //3. Thêm Data (C - Create)
        $scope.Add = function() {
            var _car = {
                id: $scope.carList.length + 1,
                model: $scope.carModel.model,
                brand: $scope.carModel.brand,
                price: $scope.carModel.price
            };

            $scope.carList.push(_car);
            setDefault();
        }

        //4. Chọn record trong danh sách
        $scope.GetRecord = function(car) {
                $scope.carModel.id = car.id;
                $scope.carModel.model = car.model;
                $scope.carModel.brand = car.brand;
                $scope.carModel.price = car.price;
                $scope.btnUpdate = false;
                $scope.btnSave = true;
            }
        
        //5. Sửa record (U - update)
        $scope.Update = function() {
            $.grep($scope.carList, function (e) {
                if (e.id == $scope.carModel.id) {
                    e.model = $scope.carModel.model;
                    e.brand = $scope.carModel.brand;
                    e.price = $scope.carModel.price;
                    $scope.btnUpdate = true;
                    $scope.btnSave = false;
                }
            });
            setDefault();
        }

         //6. Xóa record (D - Delete)
         $scope.Delete = function(car) {
            var _index = $scope.carList.indexOf(car);
            $scope.carList.splice(_index, 1);
            }

        //7.    Nâng cao
        //7.1.  Reset
        function setDefault() {
            $scope.carModel.id = 0;
            $scope.carModel.model = '';
            $scope.carModel.brand = '';
            $scope.carModel.price = 10;            
        }

        //7.2. Sort
                $scope.sort = {};

                $scope.doSort = function(cot){
                    var sort = $scope.sort;
                    if(sort.cot == cot){
                        sort.descending = !sort.descending;
                    }
                    else{
                        sort.cot = cot;
                        sort.descending = false;
                    }
                }
    
});