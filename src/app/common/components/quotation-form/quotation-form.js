(function($) {
    'use strict';

    angular.module('common')
    .directive('quotationForm', QuotationForm);

    function QuotationForm() {
        Controller.$inject = ['$scope', '$http', '$timeout', '$window', 'CONTACTS', 'API', 'vcRecaptchaService', '$q'];
        function Controller($scope, $http, $timeout, $window, CONTACTS, API, vcRecaptchaService, $q) {
            var vm = this;
            $scope.testing = window.location.href.indexOf('localhost') !== 1;
            $scope.CONTACTS = CONTACTS;
            $scope.contactsBottomTitle = 'Ou se preferir envie seus documento por E-mail ou WhatsApp';
            $scope.widgetId = null;
            $scope.key = '6LeFR2cUAAAAABGpgLHxp3EJuSWCCvLrWP6hEKmj';
            $scope.state = 'new';
            $scope.triedSend = false;
            $scope.langs = [
                'Português',
                'Inglês',
                'Espanhol',
                'Italiano',
                'Alemão',
                'Coerano',
                'Francês',
                'Holandês',
                'Japonês',
                'Mandarin',
                'Russo',
                'Outro'
            ];

            $scope.provinces = [
                'Acre',
                'Alagoas',
                'Amapá',
                'Amazonas',
                'Bahia',
                'Ceará',
                'Distrito Federal',
                'Espírito Santo',
                'Goiás',
                'Maranhão',
                'Mato Grosso',
                'Mato Grosso do Sul',
                'Minas Gerais',
                'Pará',
                'Paraíba',
                'Paraná',
                'Pernambuco',
                'Piauí',
                'Rio de Janeiro',
                'Rio Grande do Norte',
                'Rio Grande do Sul',
                'Rondônia',
                'Roraima',
                'Santa Catarina',
                'São Paulo',
                'Sergipe',
                'Tocantins',
                'Fora do Brasil'
            ];

            $scope.haiaOptions = [
                'Sim',
                'Não',
                'Não sei'
            ]

            $scope.files = [];

            $scope.setWidgetId = function (widgetId) {
                $scope.widgetId = widgetId;
            };

            $scope.$on('file:load', function (e, file) {

                if (!containsObject(file, $scope.files)) {
                    $scope.$apply(function () {
                        $scope.files.push(file);
                    });
                }
            });

            $scope.removeItem = function (i) {

                $(angular.element(".selected-file-container")[i]).fadeOut(200);
                $timeout(function () {
                    $scope.files = $scope.files.filter(function (item, index) {
                        return index !== i;
                    });
                }, 200);
            }

            $scope.newForm = function () {
                $scope.fullname = '';
                $scope.email = '';
                $scope.phone1 = '';
                $scope.phone2 = '';
                $scope.languageOrig = '';
                $scope.languageDest = '';
                $scope.province = '';
                $scope.haia = '';
                $scope.languageDest = '';
                $scope.recaptchaResponse = '';
                $scope.files = [];
                $scope.observations = '';
                $scope.state = 'new';

                $scope.quotationForm.$setUntouched();
                $scope.triedSend = false;
                vcRecaptchaService.reload($scope.widgetId);
            }

            function focusElem(elem) {
                angular.element('[ng-model='+ elem +']')[0].focus();
            }

            function containsObject(obj, list) {
                for (var i = 0; i < list.length; i++) {
                    if (angular.equals(list[i], obj)) {
                        return true;
                    }
                }
                return false;
            }

            function createObject() {
                var id = Math.floor(Date.now());
                var pipefyObj = {};
                pipefyObj.nome = $scope.fullname;
                pipefyObj.codigo = id;
                pipefyObj.email = $scope.email ;
                pipefyObj.telefone = $scope.phone1;
                pipefyObj.telefone2 = ($scope.phone2 || '');
                pipefyObj.idiomaOrigem = $scope.languageOrig;
                pipefyObj.IdiomaDestino = $scope.languageDest;
                pipefyObj.estadoParaEnvio = $scope.province;
                pipefyObj.apostilaDeHaia = $scope.haia;
                pipefyObj.observacoes = ($scope.observations || '');
                pipefyObj.quantidadeDeAnexos = $scope.files.length;

                return {
                    gRecaptchaResponse: $scope.recaptchaResponse,
                    private: !!vm.private,
                    id: id,
                    fullname: $scope.fullname,
                    subject: 'Nova solicitação de orçamento - ' + id,
                    html:
                        '<b>Código</b>: ' + id + '<br/>' +
                        '<b>Nome</b>: ' + $scope.fullname + '<br/>' +
                        '<b>E-mail</b>: ' + $scope.email + '<br/>' +
                        '<b>Telefone 1</b>: ' + $scope.phone1 + '<br/>' +
                        '<b>Telefone 2</b>: ' + ($scope.phone2 || '') + '<br/>' +
                        '<b>Língua origem</b>: ' + $scope.languageOrig + '<br/>' +
                        '<b>Língua destino</b>: ' + $scope.languageDest + '<br/>' +
                        '<b>Estado para envio</b>: ' + $scope.province + '<br/>' +
                        '<b>Apostila de Haia</b>: ' + $scope.haia + '<br/>' +
                        '<b>Observações</b>: ' + ($scope.observations || '')  + '<br/>' +
                        '<b>Qte. anexos</b>: ' + $scope.files.length,
                    pipefyObj: pipefyObj
                }
            }

            function logError(e) {
                var userAgent = navigator.userAgent;
                var browser = (function(){
                    var ua = userAgent,
                        M  = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [],
                        tem;

                    if(/trident/i.test(M[1])){
                        tem =  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
                        return ['ie', (tem[1] || '')];
                    }
                    M = M[2] ? [M[1].toLowerCase(), M[2]]:[navigator.appName.toLowerCase(), navigator.appVersion, '-?'];
                    if((tem = ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
                    return M;
                })();

                var data = {
                    subject: 'error at ' + Math.floor(Date.now()),
                    html:
                    '<p>broswer: ' + JSON.stringify(browser) + '</p>' +
                    '<p>userAgent: ' + userAgent + '</p>' +
                    '<p>error: ' + JSON.stringify(e) + '</p>'

                }

                var req = {
                    method: 'POST',
                    url: API + '/logError',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                $http(req);

            }

            function resizeCaptcha() {
                var width = $('.recaptcha').parent().width();
                if (width < 302) {
                    var scale = width / 302;
                    $('.recaptcha').css('transform', 'scale(' + scale + ')');
                    $('.recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
                    $('.recaptcha').css('transform-origin', '0 0');
                    $('.recaptcha').css('-webkit-transform-origin', '0 0');
                }
                else {
                    $('.recaptcha').css('transform', 'scale(1)');
                    $('.recaptcha').css('-webkit-transform', 'scale(1)');
                }
            }

            function isFormValid() {
                if ($scope.quotationForm.$invalid && !$scope.testing) {
                    if (!vm.private) {
                        if(!$scope.fullname) {
                            focusElem('fullname');
                        }
                        else if (!$scope.email) {
                            focusElem('email');
                        }
                        else if (!$scope.phone1) {
                            focusElem('phone1');
                        }
                        else if ($scope.quotationForm.phone2.$error.brPhoneNumber) {
                            focusElem('phone2');
                        }
                        else if (!$scope.languageOrig) {
                            focusElem('languageOrig');
                        }
                        else if (!$scope.languageDest) {
                            focusElem('languageDest');
                        }
                        else if (!$scope.province) {
                            focusElem('province');
                        }
                        else if (!$scope.haia) {
                            focusElem('haia');
                        }
                        else if (!$scope.recaptchaResponse) {
                            focusElem('recaptchaResponse');
                        }
                        return false;
                    }
                    else {
                        if(!$scope.fullname) {
                            focusElem('fullname');
                            return false;
                        }
                        else if (!$scope.recaptchaResponse) {
                            focusElem('recaptchaResponse');
                            return false;
                        }
                    }
                }
                return true;
            }

            function createFiles(maxSize) {
                var file;
                var files = [];
                var currSize = 0;
                var filesBatch = [];

                while (currSize < maxSize) {
                    file = null;
                    if (!$scope.files.length || currSize + $scope.files[0].size > maxSize) {
                        break;
                    }
                    file = $scope.files.shift();
                    currSize += file.size;
                    filesBatch.push(file);
                }

                angular.forEach(filesBatch, function (file) {
                    files.push({
                        fileName: file.name,
                        content: file.target.result
                    });
                });

                return files;
            }

            function createAttachmentPayloads(data, pipefyCardId, limitSize, haveNoFiles) {
                var results = [];
                var folderName = data.fullname.split(' ')[0] + ' - ' + data.id;

                if (haveNoFiles) {
                    var fd = new FormData();
                    fd.append('folderName', folderName);
                    if (pipefyCardId) {
                        fd.append('pipefyCardId', pipefyCardId);
                    }
                    results[0] = fd;
                }
                else {

                    for (var i = 0; i < $scope.files.length; i++) {
                        if ($scope.files[i].size > limitSize) {
                            return null;
                        }
                    }


                    while ($scope.files.length) {
                        var fd = new FormData();
                        var filesBatch = createFiles(limitSize);
                        fd.append('folderName', folderName);
                        if (pipefyCardId) {
                            fd.append('pipefyCardId', pipefyCardId);
                        }
                        filesBatch.forEach(function (file, index) {
                            fd.append('filesName[' + index + ']', file.fileName);
                            fd.append('files[' + index + ']', file.content);
                        });
                        results.push(fd);
                    }
                }

                return results;
            }


            $scope.send = function () {
                var pipefyCardId;
                $scope.triedSend = true;
                if (isFormValid()) {
                    angular.element('html, body').animate({
                        scrollTop: $('#formulario-de-orcamento').offset().top
                    }, 50);

                    $scope.state = 'sending';
                    var req = {
                        method: 'POST',
                        url: API + '/send',
                        data: createObject(),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    $http(req).then(function (response) {
                        pipefyCardId = (response.data || {}).pipefyCardId || null;
                        return 'success';
                    }, function (e) {
                        return e;
                    }).then(function (response) {

                        if (response === 'success') {

                            var payloads = createAttachmentPayloads(req.data, pipefyCardId, 53477376, !$scope.files.length);
                            sendAttachments(payloads);
                        }
                        else {
                            logError(response);
                            $scope.state = 'error';
                        }

                    });
                }

            }

            function sendAttachments(payloads) {
                function resolvePromises(params, index) {

                    var deferred = $q.defer();
                    index = index || 0;

                    $http.post(API + '/attach', params[index], {
                        transformRequest: angular.identity,
                        headers: {
                            'Content-Type': undefined,
                            // 'Accept-Encoding': 'gzip',
                            // 'User-Agent': 'my program (gzip)'
                        }
                    }).then(function (res) {
                        if (params.length > ++index) {
                            resolvePromises(params, index).then(function () {
                                deferred.resolve();
                            }, function (e) {
                                deferred.reject(e);
                            });
                        }
                        else {
                            deferred.resolve();
                        }
                    }, function (e) {
                        deferred.reject(e);
                    });

                    return deferred.promise;
                }

                resolvePromises(payloads).then(function () {
                    $scope.state = 'success';
                },function (e) {
                    logError(e);
                    $scope.state = 'error';
                });
            }

            (function init() {

                vm.$onInit = function () {

                    resizeCaptcha();

                    angular.element($window).bind('resize', function() {
                        resizeCaptcha();
                    });
                };

            }());

        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
                private: '<?'
    		},
    		templateUrl	: 'app/common/components/quotation-form/quotation-form.html',
    	};
    }

}(window.$));
