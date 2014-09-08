var artistControllers = angular.module('blogsControllers', []);

artistControllers.controller('CoverController', ['$scope', function($scope) {
  
}]);




// artistControllers.controller("TechNewsController",['$scope','$http',function($scope,$http){  
  
//   $http({
//     url : 'http://www.corsproxy.com/futurewavewebdevelopment.com/wp/tech-news/?json=1&count=20',
//     method : "GET"    
//   }).then(function(response){
//     $scope.blogsTechNews=response.data.posts;
//   });
  
// }]);

artistControllers.controller('TechNewsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://learning.local/AngularAppUsingWordPressAndJSONAPI/test.php').success(function(data){

    $scope.blogsTechNews=data;
    //$scope.artistOrder  = 'name';

  });  
}]);




artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data){

  	$scope.artists 		= data;
  	$scope.artistOrder 	= 'name';

  });  
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data){
  	$scope.artists 		= data;
  	$scope.whichItem 	= $routeParams.itemId; 

  	if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });  
}]);
