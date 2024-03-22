(function() {
    'use strict';

    angular.module('public')
    .controller('italianCitizenshipController', ItalianCitizenshipController);


    ItalianCitizenshipController.$inject = ['$location', 'PAGES'];
    function ItalianCitizenshipController($location, PAGES) {
        var vm = this;

        vm.page = PAGES.find(function (topic) {
            return topic.page === 'italian-citizenship'
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
