(function(){

  var app = angular.module('LunchCheck',[]);
  app.controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = "";
  //  $scope.message = "";

    $scope.checkLunch = function(){
      var menuLists = $scope.lunchMenu.split(',');
    //  console.log(menuLists.length);
      if(menuLists == ''){
         $scope.message = "Please enter data first";
      }else if(menuLists.length <= 3){
        $scope.message = "Enjoy";
      }else{
        $scope.message="Too much!";
      }

    };
  };
})();
