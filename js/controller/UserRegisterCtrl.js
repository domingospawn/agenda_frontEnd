app.controller('UserRegisterCtrl', ['$scope', '$resource', '$log', function($scope, $resource, $log){
  $scope.save = function(user){
    var myUser = angular.copy(user);
    $scope.user = {};
    console.log('user -> '+user.name);
    var rest = $resource('http://agenda.be/register');
    rest.save(myUser, function(){
      console.log('User saved');
    });
  };
}]);
