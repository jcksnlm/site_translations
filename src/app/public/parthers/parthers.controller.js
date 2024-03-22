(function() {
    'use strict';

    angular.module('public')
    .controller('parthersController', ParthersController);


    ParthersController.$inject = ['$location', 'PAGES'];
    function ParthersController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'parthers'
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
