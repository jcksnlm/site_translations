(function() {
    'use strict';

    angular.module('public')
    .controller('pricesController', PricesController);

    PricesController.$inject = ['$location', 'PAGES'];
    function PricesController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'prices'
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
