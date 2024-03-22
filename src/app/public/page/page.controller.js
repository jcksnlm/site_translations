(function() {
    'use strict';

    angular.module('public')
    .controller('pageController', PageController);

    PageController.$inject = ['$stateParams', '$state', 'PAGES'];
    function PageController($stateParams, $state, PAGES) {
        var vm = this;
        vm.id = $stateParams.id;

        vm.allTopics = [];

        function removeTarget(str) {
            var result;
            var reg = /(ui-sref.*?)\starget=('|")_blank('|")/gi;

            result = str.replace(reg, function(a, b){
            	return b;
            });

            return result;
        }

        (function init() {
            vm.$onInit = function () {
                angular.element('html, body').animate({
                    scrollTop: angular.element('html').offset().top
                }, 500, 'easeInOutExpo');

                        PAGES.forEach(function (page) {

                            page.topics.forEach(function (topic) {
                                var item = angular.copy(topic);
                                item.page = page.page;
                                item.pageTitle = page.title;
                                item.pageDescription = page.description;
                                item.pageImage = page.image;
                                item.pageState = page.state;
                                vm.allTopics.push(item);
                            });

                        });

                        vm.page = vm.allTopics.find(function (topic) {
                            return topic.id === vm.id;
                        });

                        if (vm.page) {
                            vm.topics = [{
                                id: vm.page.id,
                                title: removeTarget(vm.page.title),
                                description: removeTarget(vm.page.description)
                            }];

                            vm.contactsTitle = 'Conheça nossos todos os serviços <a ui-sref="public.home({\'#\': \'servicos-de-traducao\'})">clicando aqui</a>, ou entre em contato...';
                        }
                        else {
                            $state.go('public.home');
                        }

            };

        }());


    }
}());
