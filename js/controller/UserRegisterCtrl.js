//app.controller('employeesController', function($scope, $http, API_URL) {
app.controller('UserRegisterCtrl', function($scope, $http, $log, API, BASE_URL){
  console.log('controller UserRegisterCtrl');
  console.log('API: '+API);
  console.log('Base url: '+BASE_URL);

  $scope.test = function(){
    console.log('test called');
  }

  $scope.save = function(user){
    var myUser = angular.copy(user);
    user = {};
    console.log('save called');
    console.log('user name '+JSON.stringify(myUser));
    $http({
      method: 'POST',
      url: BASE_URL + 'register',
      data: $.param(myUser),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(response){
      console.log('success response: '+JSON.stringify(response));
      //location.reload();
    }).error(function(response){
      console.log('error response: '+JSON.stringify(response));
      //location.reload();
    });
  }

});
