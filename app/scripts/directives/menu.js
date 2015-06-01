'use strict';

staJesti
    .directive('sjMenu', menu);

function menu ($modal) {
    var directive = {
        link: link,
        controller: controller,
        restrict: 'A',
        bindToController: true,
        controllerAs: 'menu',
    };
    return directive;

    function controller($scope) {
        var modalInstance;

        this.showImage = function(index) {
            modalInstance && modalInstance.dismiss();

            $modal.open({
                templateUrl: 'views/modal.html',
                size: 'md',
                scope: $scope,
            });
        }

    }

    function link(scope, element, attrs, ctrl) {
    }
}
