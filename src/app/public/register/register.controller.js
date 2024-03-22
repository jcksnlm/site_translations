(function() {
    'use strict';

    angular.module('public')
    .controller('registerController', RegisterController);

    RegisterController.$inject = ['$scope', '$sce'];
    function RegisterController($scope, $sce) {

        var vm = this;
        vm.$onInit = function () {
            angular.element('html').css('overflow', 'hidden');
        };
        vm.$onDestroy = function () {
            angular.element('html').css('overflow', 'initial');
        };


    }

}());
