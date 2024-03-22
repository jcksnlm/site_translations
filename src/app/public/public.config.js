(function() {
    'use strict';
    angular.module('public')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {

        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'app/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'app/public/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('public.traducaojuramentada', {
                url: '/o-que-e-traducao-juramentada',
                templateUrl: 'app/public/traducao-juramentada/traducao-juramentada.html',
                controller: 'traducaoJuramentadaController',
                controllerAs: 'vm'
            })
            .state('public.apostila', {
                url: '/apostila-de-haia-cnj',
                templateUrl: 'app/public/apostila-de-haia/apostila-de-haia.html',
                controller: 'apostilaDeHaiaController',
                controllerAs: 'vm'
            })
            .state('public.italiancitizenship', {
                url: '/servicos-de-cidadania',
                templateUrl: 'app/public/italian-citizenship/italian-citizenship.html',
                controller: 'italianCitizenshipController',
                controllerAs: 'vm'
            })
            .state('public.parthers', {
                url: '/nossos-parceiros',
                templateUrl: 'app/public/parthers/parthers.html',
                controller: 'parthersController',
                controllerAs: 'vm'
            })
            .state('public.traducaolivre', {
                url: '/empresa-de-traducao',
                templateUrl: 'app/public/traducao-livre/traducao-livre.html',
                controller: 'traducaoLivreController',
                controllerAs: 'vm'
            })
            .state('public.prices', {
                url: '/quanto-custa-uma-traducao-juramentada-preco',
                templateUrl: 'app/public/prices/prices.html',
                controller: 'pricesController',
                controllerAs: 'vm'
            })
            .state('public.page', {
                url: '/topico/:id',
                templateUrl: 'app/public/page/page.html',
                controller: 'pageController',
                controllerAs: 'vm'
            })
            .state('public.code', {
                url: '/code',
                templateUrl: 'app/public/code/code.html',
                controller: 'codeController',
                controllerAs: 'vm'
            })
            .state('public.register', {
                url: '/cadastro',
                templateUrl: 'app/public/register/register.html',
                controller: 'registerController',
                controllerAs: 'vm'
            })
            .state('public.privateform', {
                url: '/novo-orcamento',
                templateUrl: 'app/public/private-form/private-form.html',
                controller: 'privateFormController',
                controllerAs: 'vm'
            });
    }

}());
