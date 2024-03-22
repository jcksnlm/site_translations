(function() {
    'use strict';

    angular.module('common')
    .directive('pageBody', PageBody);

    function PageBody() {
        Controller.$inject = ['$scope', '$location', '$anchorScroll', '$timeout'];
        function Controller($scope, $location, $anchorScroll, $timeout) {
            var vm = this;
            vm.contactsFixed = {
                'xs': 300,
                'sm': 300,
                'md': 300,
                'lg': 300,
                'xl': 300,
            };

            angular.element(function () {
                $timeout(function () {
                    $anchorScroll();
                });
            });
        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
                pageTitle: '<',
                pageDescription: '<',
                pageImageName: '<',
                pageTopics: '<',
                hideContactsFixed: '<?'
    		},
    		templateUrl	: 'app/common/components/page-body/page-body.html',
    	};
    }

}());
