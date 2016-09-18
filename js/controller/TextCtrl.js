app.controller('TextCtrl', function($scope, $http, $httpProvider, $log, $cookies, API, BASE_URL){
  $scope.saveText = function(text) {
    console.log('saveText: '+text);

    $httpProvider.defaults.headers.post = {
//      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': 'http://agenda.fe',
      'Cache-Control': 'no-cache',
      'Connection': 'Keep-Alive',
      'Content-Length': text.lenght,
      'Content-Type': 'text/html; charset=UTF-8',
      'Date': Date.now(),
      'Keep-Alive': 'timeout=5, max=100',
      'Server': 'Apache/2.4.18 (Ubuntu)',
      'X-RateLimit-Limit': 60,
      'X-RateLimit-Remaining': 58
    };

    $http.post('http://agenda.be/api/data', text)
      .success(function(response){
        console.log('success: '+JSON.stringify(response));
      })
      .error(function(response){
        console.log('error: '+JSON.stringify(response));
      });
  }
});
