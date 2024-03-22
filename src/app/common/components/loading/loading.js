(function() {
    'use strict';

    angular.module('common')
    .component('loading', {
        template: '<div class="gtco-loader-state" ng-if="vm.show"><div class="spinner"></div></div>',
        controller: LoadingController,
        controllerAs: 'vm'
    });

    LoadingController.$inject = ['$rootScope'];

    function LoadingController($rootScope) {
        var vm = this;
        var destroyer;

        vm.$onInit = function() {
            vm.show = true;
            destroyer = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        vm.$onDestroy = function () {
            destroyer();
        }

        function onSpinnerActivate(e, data) {
            vm.show = data.on;
        }
    }



}());
