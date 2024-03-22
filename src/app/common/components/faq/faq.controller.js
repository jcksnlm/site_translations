(function() {
    'use strict';

    angular.module('common')
    .directive('faq', Faq);

    function Faq() {

        Controller.$inject = ['$sce'];
        function Controller($sce) {
            var vm = this;

            vm.trust = function(src) {
                return $sce.trustAsHtml(src);
            }

        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
                wTitle: '<?inTitle',
                description: '<?',
                questions: '<'
    		},
    		templateUrl	: 'app/common/components/faq/faq.html',
    	};
    }

}());
