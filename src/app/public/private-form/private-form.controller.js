(function() {
    'use strict';

    angular.module('public')
    .controller('privateFormController', PrivateFormController);


    PrivateFormController.$inject = ['$scope', '$timeout', 'AnimationsFactory', 'CONTACTS'];
    function PrivateFormController($scope, $timeout, AnimationsFactory, CONTACTS) {
        var vm = this;
        var animations = AnimationsFactory();

        vm.CONTACTS = CONTACTS;


        (function init() {
            vm.$onInit = function () {
            };

        }());


    }
}());
