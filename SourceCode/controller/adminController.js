var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
    //1. Đọc data từ fiel json
    $http.get("DB.json")
    .then(function(rspt) {
        $scope.AdminList = rspt.data.Admins;
    })

//sort
    $scope.sapxep = {};
$scope.doSapxep = function(cot){
    var sapxep = $scope.sapxep;
    if(sapxep.cot == cot){
        sapxep.descending = !sapxep.descending;
   
    }
    else{
        sapxep.cot = cot;
        sapxep.descending = false;

       
    }
};

//Record

$scope.AdminModel ={}
$scope.AdminList = [];

$scope.Getrecord = function(Admin){
    $scope.AdminModel.Id = Admin.Id;
    $scope.AdminModel.UserName = Admin.UserName;
    $scope.AdminModel.Email = Admin.Email;
    $scope.AdminModel.Phone = Admin.Phone;
    $scope.btnUpdate = false;
    $scope.btnSave = true;
}

 //3.Thêm data (c - create)
 $scope.Add = function(){
    var nation     = {
        Id: $scope.AdminList.lenght + 1,
        UserName: $scope.AdminModel.UserName,
        Email: $scope.AdminModel.Email,
        Phone:  $scope.AdminModel.Phone
    };

    $scope.AdminList.push(nation);
    setDefault();

}

  //7.Xóa record( D - deleted)
  $scope.Delete = function(i) {
    var _index = $scope.AdminList.indexOf(i);
    $scope.AdminList.splice(_index, 1);
    }
});

function validateData() {
    popupTag = document.getElementById('modal')
    popupTag.style.display = "block"

    return false;
}
function hidePopup() {
    popupTag = document.getElementById('modal')
    modal.style.display = "none"
    window.open('admin.html')
}