app.controller('listCtrl', ['$scope', '$resource', '$log', 'backEnd', function($scope, $resource, $log, backEnd){
  $scope.message = 'List of contacts';

  $scope.contacts = [];

  console.log('before get');
  backEnd.getContacts().get(function(result){
    console.log('-> '+JSON.stringify(result));

    $scope.contacts = result.data.data;

    $scope.totalItems = result.data.to * result.data.per_page;
    $scope.currentPage = result.data.current_page;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.maxSize = result.data.per_page;
    $scope.bigTotalItems = result.data.to;
    $scope.bigCurrentPage = 1;

    $scope.pageChanged = function() {
      $log.log('Link next page: ' + be+'/contacts?page='+$scope.currentPage);
      backEnd.getPage(be+'/contacts?page='+$scope.currentPage).get(function(result){
        $scope.contacts = result.data.data;
      })
      $log.log('Page changed to: ' + $scope.currentPage);
    };
  });

  console.log('after get');
}]);
