(function() {
    'use strict';

    angular.module('common')
    .directive('contactsFixed', ContactsFixed);


    function ContactsFixed() {

        Controller.$inject = ['$scope', 'SCREENSZ', 'CONTACTS', '$location', '$anchorScroll'];
        function Controller($scope, SCREENSZ, CONTACTS, $location, $anchorScroll) {
            $scope.CONTACTS = CONTACTS;
            $scope.handleUrl = function (id) {
                $location.hash(id);
                $anchorScroll();
            }

            this.$onInit = function () {
                init(this, SCREENSZ, CONTACTS);
            }

            this.$onDestroy = function () {
                angular.element(window).unbind('scroll');
            }

        }

        function init(that, SCREENSZ) {
            var vm = that;
            var startsAt = vm.startsAt;
            var elem = angular.element('#gtco-quick-contact-fixed');

            angular.element(window).scroll(function() {
                var scrollMin;
                var win = angular.element(window);
                var winWidth = win.innerWidth();
                var element = document.querySelector('#formulario-de-orcamento');
                var position = element.getBoundingClientRect();

                if (winWidth <= SCREENSZ.SCREENXS) {
                    scrollMin = startsAt.xs;
                }
                else if (winWidth > SCREENSZ.SCREENXS && winWidth <= SCREENSZ.SCREENSM) {
                    scrollMin = startsAt.sm;
                }
                else if (winWidth > SCREENSZ.SCREENSM && winWidth <= SCREENSZ.SCREENMD) {
                    scrollMin = startsAt.md;
                }
                else if (winWidth > SCREENSZ.SCREENMD && winWidth <= SCREENSZ.SCREENLG) {
                    scrollMin = startsAt.lg;
                }
                else {
                    scrollMin = startsAt.xl;
                }

                if(win.scrollTop() > scrollMin && position.top + 300 > window.innerHeight/* && position.bottom >= 0*/) { //commeted because this can be very useful someday
                    elem.addClass('active');
                }
                else {
                    elem.removeClass('active');
                }

            });
        }


        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
    			startsAt: '<'
    		},
    		templateUrl	: 'app/common/components/contacts-fixed/contacts-fixed.html',
    	};
    }
}());
