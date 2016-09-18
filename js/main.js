var app = angular.module("app", ["ngRoute", "ngResource", "ui.bootstrap", "ngCookies"])
  .constant("API", "http://agenda.be/api/")
  .constant("BASE_URL", "http://agenda.be/");
    //.constant("CSRF_TOKEN", '{!! csrf_token() !!}');

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "pages/main.html"
  })
  .when('/contacts/list', {
    templateUrl: 'pages/contacts/list.html',
    controller: 'listCtrl'
  })
  .when('/user/register', {
    templateUrl: 'pages/user/register.html',
    controller: 'UserRegisterCtrl'
  })
  .when('/text', {
    templateUrl: 'pages/user/text.html',
    controller: 'TextCtrl'
  })

  .otherwise({ redirectTo: '/'});
});
