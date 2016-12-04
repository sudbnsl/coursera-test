(function () {
  //'use strict';
  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope) {
$scope.name = "Sudhanshu"
$scope.sayHello = function () {
  return "Hello Coursera!"
};
  });
})();
