(function() {
    'use strict';

    angular.module('common')
    .directive('pageContent', PageContent);

    function PageContent() {
        Controller.$inject = ['$scope', '$sce'];
        function Controller($scope, $sce) {
            var vm = this;
            vm.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }

        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
                topics: '<'
    		},
    		templateUrl	: 'app/common/components/page-content/page-content.html',
    	};
    }

}());
