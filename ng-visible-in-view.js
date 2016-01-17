(function(angular) {
  "use strict";
  /**
   * ngVisibleInView
   * @author ktakeda47
   */
  angular.module("ngVisibleInView", []).directive("visibleInView", ["$interval", function($interval) {
    return {
      restrict: "A",
      scope: true,
      link: {
        post: function(scope, element, attrs, controller) {
          /**
           * Promise
           * @type {undefined}
           */
          var interval = undefined;

          /**
           * Start
           * @param e
           */
          var start = function(e) {
            interval = $interval(function() {
              if ($(e).visible()) {
                onVisible();
                stop();
              }
            }, 300);
          };

          /**
           * Stop
           */
          var stop = function() {
            if (!angular.isUndefined(interval)) {
              $interval.cancel(interval);
              interval = undefined;
            }
          };

          /**
           * On visible
           */
          var onVisible = function() {
            scope.$emit("onVisibleInView", attrs.visibleInView);
          };

          // start
          start(element[0]);
        }
      }
    };
  }]);
})(angular);