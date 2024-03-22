(function() {
    'use strict';

    angular.module('common')
    .directive('ourServices', OurServices);

    function OurServices() {

        function Controller() {
            var vm = this;
            vm.cards = [
                {
                    class: 'img-1',
                    title: 'Tradução juramentada',
                    description: 'Serviços de traduções de documentos públicos e oficiais, como certidões a diplomas.',
                    sref: 'public.traducaojuramentada'
                },
                {
                    class: 'img-2',
                    title: 'Tradução livre',
                    description: 'Tradução de textos comuns, como livros, softwares, publicidade, entre outros.',
                    sref: 'public.traducaolivre'
                },
                {
                    class: 'img-3',
                    title: 'Apostila de Haia',
                    description: 'Tire todas suas dúvidas sobre a apostila de haia aqui.',
                    sref: 'public.apostila'
                },
                {
                    class: 'img-4',
                    title: 'Menores preços do mercado',
                    description: 'Saiba como conseguimos traduzir a um preço mais baixo que outras empresas.',
                    sref: 'public.prices'
                },
                {
                    class: 'img-5',
                    title: 'Nossos parceiros (Em breve)',
                    description: 'Conheça nossa lista de parceiros e convênios.',
                    sref: 'public.parthers'
                },
                {
                    class: 'img-6',
                    title: 'Serviços de cidadania (Em breve)',
                    description: 'Conheça nossos serviço de Cidadania européia, americana e outras.',
                    sref: 'public.italiancitizenship'
                },
            ];

        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
    		},
    		templateUrl	: 'app/common/components/our-services/our-services.html',
    	};
    }

}());
