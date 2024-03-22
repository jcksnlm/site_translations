(function() {
    'use strict';

    angular.module('public')
    .controller('traducaoLivreController', TraducaoLivreController);

    TraducaoLivreController.$inject = ['$location', 'PAGES'];
    function TraducaoLivreController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'traducao-livre'
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
