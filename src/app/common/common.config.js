(function() {
    'use strict';

    angular.module('common')
    .config(Config)
    .constant('SCREENSZ', getScreenSizes())
    .constant('API', getApi())
    .constant('CONTACTS', getContacts());

    Config.$inject = ['$httpProvider'];
    function Config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

    function getScreenSizes() {
        return {
            SCREENXS: 480,
            SCREENSM: 768,
            SCREENMD: 992,
            SCREENLG: 1200
        }
    }

    function getApi () {
        //return 'http://localhost:5000';
        //return 'https://jcksnlm-mailer.herokuapp.com';
        return 'https://labtraducoes.com.br:5000';
    }

    function getContacts() {
        var whatsAppLink;
        var isMobile = window.mobileAndTabletcheck();
        if (isMobile) {
            whatsAppLink = 'https://api.whatsapp.com/send?phone=554195041169&text=Olá!%20Gostaria%20de%20saber%20sobre%20seus%20serviços.&l=pt_BR';
        }
        else {
            whatsAppLink = 'https://web.whatsapp.com/send?phone=554195041169&text=Olá!%20Gostaria%20de%20saber%20sobre%20seus%20serviços.&l=pt_BR';
        }
        return {
            PHONE: {
                NUMBER: '0800 879 0002',
                LINK: 'tel:08008790002',
            },
            WHATSAPP: {
                NUMBER: '41 995041169',
                LINK: whatsAppLink,
            },
            EMAIL: {
                EMAIL: 'contato@labtraducoes.com.br',
                LINK: 'mailto:contato@labtraducoes.com.br',
            },
            INSTAGRAM: {
                LINK: 'https://www.instagram.com/labtraducoes/?hl=pt-br',
            },
            FB: {
                LINK: 'https://www.facebook.com/Lab-Traducoes-235153884082079',
            },
            TWITTER: {
                LINK: 'https://twitter.com/LabTraducoes',
            },
            LINKEDIN: {
                LINK: 'https://linkedin.com/company/labtraducoes',
            }
        }
    }
}());
