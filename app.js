(function() {
  'use strict';

    angular.module('ShoppingCart', [])
      .controller('MainCtrl', MainCtrl);

      MainCtrl.$inject = ['$scope'];

      function MainCtrl($scope) {
        $scope.name = "Sumair";
      }
})();
