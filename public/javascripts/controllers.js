
var myApp = angular.module('myApp',[]);

myApp.controller('csrfCtrl', ['$scope', '$http', function($scope, $http) { 
      
  $scope.submit = function() {
    
    $http.post('/', {value: $scope.value})
      .success(function(data) {
        $scope.answer = data
      })
      .error(function() {
        console.log('err')
      })
    
  }
  
}]);