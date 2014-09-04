var myApp = angular.module('myApp', [
  'ngRoute',
  'blogsControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/cover', {
    templateUrl: 'partials/cover.html',
    controller: 'CoverController'
  }).
  when('/tech-news', {
    templateUrl: 'partials/tech-news.html',
    controller: 'TechNewsController'
  }).
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/cover'
  });
}]);