var be  = 'http://agenda.be/api';

var app = angular.module("app", ["ngRoute", "ngResource", "ui.bootstrap"]);
//  .constant("CSRF_TOKEN", xhReq.responseText);

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

  .otherwise({ redirectTo: '/'});
});
