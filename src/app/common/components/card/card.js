(function() {
    'use strict';

    angular.module('common')
    .directive('card', Card);

    function Card() {

        function Controller() {
        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
    			class: '<?inClass',
                wTitle: '<?inTitle',
                description: '<?',
                sref: '<sref'
    		},
    		templateUrl	: 'app/common/components/card/card.html',
    	};
    }

}());
