(function() {
    'use strict';

    angular.module('public')
    .controller('apostilaDeHaiaController', ApostilaDeHaiaController);


    ApostilaDeHaiaController.$inject = ['$location', 'PAGES'];
    function ApostilaDeHaiaController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'apostila-de-haia';
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
