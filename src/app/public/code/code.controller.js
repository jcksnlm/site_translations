(function() {
    'use strict';

    angular.module('public')
    .controller('codeController', CodeController);

    function CodeController() {

        var vm = this;

        (function init() {
            vm.$onInit = function () {
                vm.code = new Date().getTime();
            };

        }());


    }

}());
