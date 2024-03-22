(function() {
    'use strict';

    angular.module('public')
    .controller('traducaoJuramentadaController', TraducaoJuramentadaController);

    TraducaoJuramentadaController.$inject = ['$location', 'PAGES'];
    function TraducaoJuramentadaController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'traducao-juramentada'
        });

        (function init() {
            vm.$onInit = function () {
                if (!$location.hash()) {
                    angular.element('html, body').animate({
                        scrollTop: angular.element('html').offset().top
                    }, 500, 'easeInOutExpo');
                }
            };

        }());


    }
}());
