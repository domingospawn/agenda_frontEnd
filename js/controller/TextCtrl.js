app.controller('TextCtrl', function($scope, $http, $log, $cookies, API, BASE_URL, Post){
  $scope.saveText = function(text) {
    console.log('Save text init');
    //Post.create(text);
    var req = {
      method: 'POST',
      url: API+'data?text='+text,
      headers: {
        'Content-Type': undefined
      },
      data: { text: text }
    }

    $http(req).then(function(resp){
      console.log('Deu certo? '+JSON.stringify(resp));
    },
    function(){
      console.log('Deu errado');
    });
    console.log('text saved');
  }
});
