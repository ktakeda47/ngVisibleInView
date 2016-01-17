(function() {
  "use strict";
  angular.module("sample", ["ngVisibleInView"]).controller("sampleController", ["$scope", "$timeout", "$log", function($scope, $timeout, $log) {
    /**
     * @type {Array}
     */
    $scope.rows = [];

    /**
     * @type {number}
     */
    $scope.key = 1;

    /**
     * add rows.
     * @param length {number}
     */
    $scope.addRows = function(length) {
      var i;
      for (i = 0; i < length; i++) {
        $scope.rows.push({
          key: $scope.key,
          value: "Row:" + $scope.key++
        })
      }
    };

    // listen onVisibleInView event.
    $scope.$on("onVisibleInView", function(e, val) {
      $log.debug("onVisibleInView event occurred.");

      // do something like XHR and add next rows.
      $timeout(function() {
        $scope.addRows(10);
      }, 1200);
    });

    $scope.addRows(100);
  }]);
})();