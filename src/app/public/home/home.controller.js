(function() {
    'use strict';

    angular.module('public')
    .controller('homeController', HomeController);


    HomeController.$inject = ['$scope', '$timeout', 'AnimationsFactory', 'CONTACTS'];
    function HomeController($scope, $timeout, AnimationsFactory, CONTACTS) {
        var vm = this;
        var animations = AnimationsFactory();

        vm.CONTACTS = CONTACTS;

        vm.contactsFixed = {
            'xs': 300,
            'sm': 300,
            'md': 300,
            'lg': 300,
            'xl': 300,
        };

        vm.faqTitle = 'Perguntas frequentes';
        vm.faqDescription = 'Tire aqui algumas dúvida comuns entre nosso clientes';
        vm.faqQuestions = [
            {
                question: 'O que é uma tradução juramentada?',
                anwser: 'É uma tradução feita por um tradutor público, também chamado de tradutor juramentado, que são tradutores matriculados na junta comercial do seu estado. Quando há necessidade de apresentar documentos oficiais em outro país é preciso que a tradução tenha a sua veracidade jurídica preservada. Por isso o tradutor, autorizado pelo estado, deve traduzir o texto original sem nenhum tipo de alteração. Para acessar nosso conteúdo completo sobre traduções juramentadas <a ui-sref="public.traducaojuramentada">clique aqui</a>.'
            },
            {
                question: 'Quanto custa uma tradução juramentada?',
                anwser: 'O valor pode variar de estado para estado e a forma de cobrança também. Uma maneira pelo qual nós conseguimos os melhores preços é por analisar em qual estado fica mais em conta a tradução para os nossos clientes e qual método de cobrança usar em cada caso. Uma tradução juramentada feito por um tradutor da junta comercial de um determinado estado tem a mesma validade em qualquer lugar do Brasil e exterior. Para mais informações, consulte nossa página de preços <a ui-sref="public.prices">clicando aqui</a>'
            },
            {
                question: 'O que é a Apostila de Haia?',
                anwser: 'É um documento que certifica a autenticidade de outros documentos públicos e os torna válidos para serem usados internacionalmente. A apostila de Haia só é emitida por países que fazem parte da <a ui-sref="public.apostila({\'#\':\'o-que-e-a-convencao-de-haia\'})">convenção de Haia</a> (incluindo o Brasil) e só são válidas em outros países que também fazem parte dessa convenção. Para acessar nosso conteúdo completo sobre a Apostila de Haia <a ui-sref="public.apostila">clique aqui</a>'
            },
            {
                question: 'Qual é o valor da apostila de Haia?',
                anwser: 'O preço varia de acordo com o estado. Conseguimos os menores valores apostilando documentos em estados que são mais baratos. A apostila tem mesma validade independente do estado em que foi emitida. Também conseguimos preços mais acessíveis de acordo com a quantidade de documentos solicitados. Para saber exatamente um valor, <a ui-sref="public.apostila({\'#\':\'formulario-de-orcamento\'})">solicite um orçamento</a>.'
            },
            {
                question: 'Quais são os tipos de tradução que vocês realizam?',
                anwser: 'Oferecemos tradução livre de <a ui-sref="public.traducaolivre({\'#\':\'o-que-e-traducao-livre\'})">textos comuns</a> e <a ui-sref="public.traducaolivre({\'#\':\'o-que-e-traducao-tecnica\'})">técnicos</a>. Realizamos serviços de traduções <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-comum\'})">juramentadas de textos simples</a> e <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-especial\'})" >especiais</a>. Temos também <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-intepretacao\'})">serviços de interpretação</a> para eventos, sejam eles oficiais ou não.'
            },
            {
                question: 'Como conseguimos fazer traduções juramentadas mais baratas que outras empresas?',
                anwser: 'A nossa iniciativa é traduzir documentos de forma inteligente e não ficar presos aos dogmas impostos por algumas empresas do ramo. Aos estudarmos as traduções juramentadas nós descobrimos que é muito fácil que um documento traduzido gere mais laudas que o documento original. Logo, uma das nossas principais estratégias é reverter essa tendência e diminuir ao máximo a quantidade de laudas das traduções, de modo que ela se mantenha exatamente com o mesmo valor jurídico. Para acessar nosso conteúdo completo sobre a Apostila de Haia <a ui-sref="public.prices">clique aqui</a>'
            },

        ];

        (function init() {
            vm.$onInit = function () {
            };

        }());


    }
}());
