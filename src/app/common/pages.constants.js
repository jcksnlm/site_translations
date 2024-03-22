(function() {
    'use strict';

    angular.module('common')
    .constant('PAGES', getPages());

    function getPages() {
        return [
                    {
                        title: 'Apostila de Haia',
                        description: 'Tire Aqui todas as suas dúvidas sobre a Apostila de Haia',
                        image: 'apostila-de-haia-3.jpg',
                        state: 'public.apostila',
                        page: 'apostila-de-haia',
                        topics: [
                            {
                            	id: 'apostila-de-haia-o-que-e',
                            	title: 'O que é a Apostila de Haia?',
                            	description: 'É um documento que certifica a autenticidade de outros documentos públicos e os torna válidos para serem usados internacionalmente. A apostila de Haia só é emitida por países que fazem parte da <a ui-sref="public.apostila({\'#\':\'o-que-e-a-convencao-de-haia\'})">convenção de Haia</a> (incluindo o Brasil) e só são válidas em outros países que também fazem parte dessa convenção.'
                            },
                            {
                            	id: 'como-saber-se-preciso-apostila-de-haia',
                            	title: 'Quando preciso da apostila de Haia?',
                            	description: 'Sempre que for necessário apresentar um documento público em outro país, que não seja o mesmo no qual foi emitido e que pertença a convenção de Haia.'
                            },
                            {
                            	id: 'apostila-de-haia-paises',
                            	title: 'Quais países fazem parte da <a ui-sref="public.apostila({\'#\':\'o-que-e-a-convencao-de-haia\'})">Convenção de Haia</a>?',
                            	description: 'A lista completa dos países que fazem parte da convenção de Haia pode ser visualizada <a href="http://www.cnj.jus.br/poder-judiciario/relacoes-internacionais/convencao-da-apostila-da-haia/paises-signatarios" target="_blank">neste link</a>.'
                            },
                            {
                            	id: 'pais-nao-faz-parte-da-convencao-de-haia',
                            	title: 'Se o país no qual eu for apresentar os meus documentos não fizer parte da convenção de Haia, o que devo fazer?',
                            	description: 'Neste caso, para possibilitar o uso do documento no exterior deve ser feita autenticação dele pelo Ministério de Relações Exteriores (MRE) ou em determinados casos deve ser realizado a legalização consular. Incentivamos que você entre em contato com o seu consultor de imigração ou com o consulado do país para saber qual das opções acima se aplica ao seu caso.'
                            },
                            {
                            	id: 'o-que-legalizacao-consular',
                            	title: 'O que é uma legalização consular?',
                            	description: 'É o processo que é feito por um consultado cujo o país não faz parte da Convenção de Haia para legalizar um documento e sua tradução juramentada para ser usado em outro país.'
                            },
                            {
                            	id: 'quais-documentos-precisam-de-apostilamento',
                            	title: 'Quais documentos precisam da apostila de Haia?',
                            	description: 'Quaisquer documentos emitido por um órgão publico, tais como documentos provenientes de uma autoridade, agente ou órgão publico do a país, incluindo documentos de escrivão judiciário ou de oficial de justiça; documentos administrativos; atos notariais; certidões (de nascimento, casamento ou óbito), entre outros.'
                            },
                            {
                            	id: 'quais-documentos-nao-precisam-de-apostilamento',
                            	title: 'Quais documentos não precisam de apostila de Haia?',
                            	description: 'Qualquer documento que não se aplica a pergunta acima, como documentos expedidos por agentes diplomáticos ou consulares; documentos administrativos relacionados a mercado ou alfândega; entre outros. Também dispensa a apostila de Haia documentos que serão apresentados em países que não assinaram a Convenção de Haia, ou seja, países que NÃO constam <a href="http://www.cnj.jus.br/poder-judiciario/relacoes-internacionais/convencao-da-apostila-da-haia/paises-signatarios" target="_blank">nesta lista</a>. Nesses casos, o processo de legalização é realizado pelo Ministério de relações exteriores, embaixadas e repartições consulares no exterior.'
                            },
                            {
                            	id: 'como-e-uma-apostila-de-haia',
                            	title: 'Como é uma apostila de Haia.',
                            	description: 'No Brasil, a apostila de Haia é emitida seguindo o modelo baixo e é vinculada ao documento original:<br/><figure><a href="./images/apostila-de-haia.pdf" target="_blank"><img src="./images/apostila-de-haia.jpg" alt="Como é uma apostila de haia"></a></figure>'
                            },
                            {
                            	id: 'o-que-e-a-convencao-de-haia',
                            	title: 'O que é a Convenção de Haia?',
                            	description: 'É um acordo que foi realizado em meados da década de 1950 que visa facilitar os processos de legalização de documentos produzidos em outros países. O acordo entrou oficialmente em vigor em 16 de agosto de 2016. A partir desta data não se fez mais necessário contatar o consulado e/ou pelo ministério de relações exteriores para validar documentos públicos no exterior. Uma simples apostilarem feita pela autoridade designada pelo governo do país já basta. Aqui no Brasil ela é regulamentada pelo <a href="http://www.cnj.jus.br/" target="_blank">CNJ (Conselho nacional de Justiça)</a>.'
                            },
                            {
                            	id: 'apostila-de-haia-documento-original',
                            	title: 'Para apostilar um documento, precisa que ele seja o original?',
                            	description: 'Por garantia sim, embora seja possível apostilar cópias autenticadas, muitos órgãos no exterior não aceitam tais cópias. Também é possível apostilar segunda via de documentos. Pode ser usado essa alternativa caso não deseje apostilar o documento original.'
                            },
                            {
                            	id: 'como-apostilar-documentos',
                            	title: 'Como posso apostilar meus documentos?',
                            	description: 'Primeiro <a ui-sref="public.apostila({\'#\':\'formulario-de-orcamento\'})">solicite o orçamento</a> conosco. Após contratar nossos serviços, nos envie seus documentos originais pelo correio. Pronto! O restante do processo é conosco.'
                            },
                            {
                            	id: 'e-seguro-enviar-meus-documentos-pelo-correio',
                            	title: 'É seguro enviar meus documentos pelo correio?',
                                description: 'Embora haja casos de extravio de correspondências por parte dos correios, em todos os caso em que ouvimos falar, isso sempre ocorreu com encomendas internacionais em sites de compras. Nem nós, nem nenhum de nossos parceiros nunca tivemos nenhum caso de extravio de correspondências enviadas de dentro do território nacional. Mesmo assim, você pode nos enviar os documentos com seguro e A.R., ou nos enviar uma segunda via dos documentos originais.'
                            },
                            {
                            	id: 'emitir-uma-apostila-prazo',
                            	title: 'Qual é o prazo para emitir uma apostila de Haia?',
                            	description: 'O prazo dependerá da quantidade de documentos a serem apostilados. O apostilamento em si é feito em até 24 horas. Entretanto, o prazo mínimo do envio para o cartório apostilamento e recebimento da apostila, é de 3 dias úteis.'
                            },
                            {
                            	id: 'atrasos-no-apostilamento',
                            	title: 'Pode haver atrasos no prazo do apostilamento?',
                            	description: 'Infelizmente sim. O sistema do órgão emissor costuma ser instável e isso pode causar atrasos no processo de apostilamento.'
                            },
                            {
                            	id: 'apostila-de-haia-quanto-custa',
                            	title: 'Qual é o valor da apostila de Haia?',
                            	description: 'O preço varia de acordo com o estado. Conseguimos os menores valores apostilando documentos em estados que são mais baratos. A apostila tem mesma validade independente do estado em que foi emitida. Também conseguimos preços mais acessíveis de acordo com a quantidade de documentos solicitados. Para saber exatamente um valor, <a ui-sref="public.apostila({\'#\':\'formulario-de-orcamento\'})">solicite um orçamento</a>.'
                            },
                            {
                            	id: 'apostilamento-traducao-simples-juramentada',
                            	title: 'O apostilamento deve ser feito para traduções simples ou traduções juramentadas?',
                            	description: 'Pode ser feito para ambas. Entretanto na grande maioria dos casos são apostilados somente traduções juramentadas. Incentivamos sempre a consultar o representante do país em questão para saber qual o tipo de tradução necessária para a apresentação de um documento. Existem países também que exigem que a tradução seja feita por um tradutor do próprio pais.'
                            },
                            {
                            	id: 'apostila-de-haia-validade',
                            	title: 'Qual é o prazo de validade da apostila de Haia?',
                            	description: 'A apostila de Haia não possui prazo de validade. Ela é válida durante todo período em que documento original também for válido.'
                            },
                            {
                            	id: 'preciso-apostila-apresentar-no-exterior',
                            	title: 'Preciso de uma Apostila de Haia sempre que for apresentar um documento no exterior?',
                            	description: 'Não necessariamente. Países que possuem tratados com o Brasil dispensam a legalização consular ou diplomática e apostila de Haia. Mas recomendamos consultar a representação do país no qual o documento será apresentado.'
                            },
                            {
                            	id: 'apostila-de-haia-para-cada-documento',
                            	title: 'Cada documento precisa de uma apostila separada?',
                            	description: 'Sim. O apostilamento é feito sempre para apenas um documento individual. Assim, cada documento precisa de seu próprio apostilamento.'
                            },
                            {
                            	id: 'apostila-de-haia-para-o-documento-original-e-traducao',
                            	title: 'No caso de traduções, é necessário uma apostila de Haia tanto para o documento original quanto para o documento traduzido?',
                            	description: 'Sim. São documentos independentes. Sendo assim, cada um precisa de uma apostila indiviudal.'
                            },
                            {
                            	id: 'o-que-mais-precisa-alem-da-apostila-de-haia',
                            	title: 'A apostila é o único documento que precisa ser apresentado junto com um documento brasileiro no exterior?',
                            	description: 'Depende do país. Para saber se seu documento precisa de um procedimento específico ou a apresentação de documentos adicionais, consulte diretamente um representante oficial do país em que o documento será apresentado. '
                            },
                            {
                            	id: 'apostila-diminui-o-tempo-de-espera',
                            	title: 'A Apostila de Haia diminui o tempo de espera para processo de cidadania?',
                            	description: 'Não necessariamente. Embora seja muito mais rápido e simples fazer uma apostila de Haia ao invés de se realizar uma legalização consular, a apostila apenas simplifica o processo de legalização do documento. Ela não vai influenciar na análise da solicitação da cidadania.'
                            },
                            {
                            	id: 'apostilamento-precisa-ser-feito-no-mesmo-estado',
                            	title: 'O apostilamento precisa ser feito no mesmo estado em que o documento foi emitido?',
                            	description: 'Não. É possível fazer o apostilamento em qualquer estado do Brasil, independente de onde o documento original foi emitido.'
                            },
                            {
                            	id: 'traducao-deve-ser-feita-antes-ou-depois-do-apostilamento',
                            	title: 'A tradução deve ser feita antes ou depois do apostilamento? Ou tanto faz?',
                            	description: 'A tradução deve ser feita antes, visto que precisa dela pronta para realizar o apostilamento. Depois de pronta, tanto o documento original como a tradução podem ser enviadas no mesmo momento para serem apostilados.'
                            },
                            {
                            	id: 'documento-com-legalizacao-consular-perdem-a-validade',
                            	title: 'Documentos que já foram legalizados antes da convenção de Haia, perderam a validade no Brasil após a convenção de Haia ter entrado em vigor?',
                            	description: 'Sim. Todos os documentos legalizados no Brasil anteriormente a convenção de Haia, perderam sua validade em 14 de fevereiro de 2017. Por esta razão estes documentos precisam ser devidamente apostilados.'
                            },
                            {
                            	id: 'posso-apostilar-no-brasil-um-documento-que-foi-emitido-no-exterior',
                            	title: 'Posso apostilar no Brasil um documento que foi emitido no exterior?',
                            	description: 'Não. No Brasil só é possível, apostilar documentos emitidos dentro do território nacional. Para documentos internacionais, eles devem ser apostilados no país de emissão.'
                            },
                            {
                            	id: 'cconsultar-apostila-de-haia',
                            	title: 'Como posso consultar o andamento da solicitação da apostila de Haia?',
                            	description: 'Toda apostila emitida no Brasil possui um código de acesso que pode ser consultado diretamente no <a href="https://apostila.cnj.jus.br/seiapostila/controlador_externo.php?acao=documento_conferir&acao_origem=documento_conferir&lang=pt_BR&id_orgao_acesso_externo=0" target="_blank">site do CNJ</a> onde consta todas as informações referentes ao documento e ao apostilamento.'
                            }
                        ]
                    },
                    {
                        title: 'Serviços de cidadania',
                        description: 'Conheça nossos serviços de cidadania',
                        image: 'cidadanias-3.jpg',
                        state: 'public.italiancitizenship',
                        page: 'italian-citizenship',
                        topics: [
                            {
                            	id: 'cidadania-italiana',
                            	title: 'Em breve...',
                            	description: 'Infelizmente, ainda estamos em processo de planejamento para oferecer serviços de cidadania com a maior eficiência do mercado. Em breve teremos novidades...'
                            }
                        ]
                    },
                    {
                        title: 'Parcerias e convênios',
                        description: 'Conheça a nossa lista de parceiros.',
                        image: 'traducao-juramentada-parceiros-3.jpg',
                        state: 'public.parthers',
                        page: 'parthers',
                        topics: [
                            {
                            	id: '',
                            	title: 'Em breve...',
                            	description: 'Aguarde, estamos fechando vários contratos e acordos para que possamos ajudar individualmente cada um de nossos clientes a conquistar seu objetivo. Em breve teremos novidades...'
                            }
                        ]
                    },
                    {
                        title: 'Nossos preços',
                        description: 'Veja como conseguimos fazer os menores preços.',
                        image: 'preco-traducao-juramentada-3.jpg',
                        state: 'public.prices',
                        page: 'prices',
                        topics: [
                            {
                            	id: 'empresa-de-traducao-barata',
                            	title: 'Somos a empresa que está revolucionando os serviços de traduções igual nenhuma outra empresa havia feito antes.',
                            	description: 'A LAB Traduções foi fundada após constatarmos os altos valores cobrados pelos estados brasileiros e a burocracia para se traduzir documentos públicos e oficiais. Nós estudamos a fundo esse nicho de mercado e identificamos inúmeros pontos que poderiam ser aprimorados. Assim fundamos a LAB Traduções, um laboratório tecnológico de pesquisas visando revolucionar a forma como se traduz textos comuns, públicos e oficiais do Brasil.'
                            },
                            {
                            	id: 'como-e-cobrado-traduções-juramentadas',
                            	title: 'Como as traduções juramentadas são cobradas do Brasil?',
                            	description: 'Traduções juramentadas estão diretamente ligadas a leis federais e estaduais. E infelizmente, como muitos setores públicos no Brasil, isso resulta em muita burocracia e preços altos para quem precisa se utilizar de tais serviços. Uma tradução juramentada geralmente é cobrada por lauda (que é o conjunto de 25 linhas e limitado a 1000 caracteres). Também é importante lembrar que a lei determina que o valor seja cobrado em cima da tradução realizada e não do documento original. Por exemplo, se o seu documento possui 10 laudas de 25 linhas, mas se ao traduzir o documento ele acabe ficando com 11 laudas, você pagará pelo valor das 11 laudas, e não mais 10 do documento original.<br/><br/>O preço por lauda é fixado por estado e a variação é muito pequena de um lugar para outro. Para conseguir os menores preços, nós também usamos a estratégia de escolher em qual estado será traduzido certos documentos. Mas geralmente isso não gera muita diferença no preço final de uma tradução pelo fato da diferença de valor ser mínima. Existem outras estratégias mais eficientes para reduzir os preços das traduções e permitir que os cidadãos brasileiros e imigrantes, consigam traduzir seus documentos com um preço justo.'
                            },
                            {
                            	id: 'como-conseguir-traducao-juramentada-barata',
                            	title: 'Como conseguimos fazer traduções juramentadas mais baratas que outras empresas?',
                            	description: 'A nossa iniciativa é traduzir documentos de forma inteligente e não ficar presos aos dogmas impostos por algumas empresas do ramo. Aos estudarmos as traduções juramentadas nós descobrimos que é muito fácil que um documento traduzido gere mais laudas que o documento original. Logo, uma das nossas principais estratégias é reverter essa tendência e diminuir ao máximo a quantidade de laudas das traduções, de modo que ela se mantenha exatamente com o mesmo valor jurídico.<br/><br/>Por exemplo, em históricos escolares, algumas informações podem ser rearranjadas ou abreviadas de forma a compactar o tamanho do documento, como cabeçalhos e rodapés ou outras informações que se repetem, código de matérias, letras ou números identificadores das turmas ou período, entre outras.<br/><br/>Muitas empresas também incluem informações desnecessárias sobre o documento. Por exemplo, em uma tradução juramentada é obrigatório que contenha a descrição sobre carimbos e chancelas usadas. Entretanto, alguns detalhes são desnecessários. Uma tradução que contenha a frase “consta um carimbo em formato retangular no centro da página, na extremidade inferior” pode ser substituído por “consta carimbo na parte inferior central”.<br/><br/>Ou no caso de reconhecimento de firma, alguns cartórios brasileiros usam um carimbo em forma de mão com o dedo indicador apontando para assinatura. Em vez de descrever todos estes detalhes, a tradução poderia apenas ser “Contém carimbo que aponta para a firma reconhecida.”<br/><br/>O uso de sinônimos também é um recurso simples mas que pode resultar em uma diminuição significativa na quantidade de laudas da tradução e consequentemente, no valor final. Um exemplo bastante genérico seria: em uma certidão de antecedentes criminais, em vez de usar o termo “Não consta nenhuma incidência de crimes com pena de prisão simples ou de multa”, pode ser usado o termo “não consta nenhuma contravenção penal”. O significado das duas sentenças é exatamente o mesmo. Porém em uma delas a valor da tradução diminui pela metade.'
                            },
                            {
                            	id: 'diminuir-precos-da-traducao',
                            	title: 'Além de otimizar o conteúdo das traduções, usamos vários outros recursos para diminuir os valores das traduções.',
                            	description: 'Além de sermos a primeira empresa a se preocupar com os nossos clientes, pensando acima de tudo em ajudá-los a conquistar seus objetivos de conseguir a cidadania em outros países, nós focamos nossos recursos de maneira a atingir os melhores e mais eficientes resultados.<br/><br/>Um dos nossos principais diferenciais é que fazemos uso do que há de mais avançado em questão de tecnologias para atingir resultados nunca antes alcançados por nenhuma empresa do ramo. Contamos com profissionais altamente capacitados que já trabalharam nos setores de tecnologia de empresas como Michelin, SITA, INMETRO, Bematech, RUMO logística, e muitas outras. Esses profissionais trouxeram toda a experiência que obtiveram em empresas nacionais e multinacionais para esse mercado que estava precisando a muito tempo de uma reinvenção.<br/><br/>Com a ajuda dessa carga de experiência e tecnologia desenvolvemos e constatemente aprimoramos softwares que maximizam nossa eficiência e produtividade. Contamos com sistemas de inteligência artificial que sugerem melhorias nas traduções para os tradutores e revisam os textos para evitar erros. Nossos sistemas de logística são aprimorados para que possam realizar a maior quantidade de trabalho sem a iteração humana. Assim reduzimos nossos custos e aumentamos nossa produtividade, eficiência e agilidade.'
                            },
                            {
                            	id: 'traducao-juramentada-de-qualidade',
                            	title: 'Mas vamos além da tecnologia, nós inovamos nos processos e definimos um novo modelo de trabalho para as traduções.',
                            	description: 'Ainda pensando no bem-estar de nossos funcionários, seguimos a nova tendência do mercado e sempre que possível disponibilizamos ferramentas necessárias para que eles possam executar determinadas funções através de Home Office. É comprovado que a prática de Home Office otimiza as atividades dos funcionários, reduz os desperdícios de recursos, oferece melhores vantagens fiscais, entre muitos outros benefícios que diminuem o valor final para nossos clientes.<br/><br/>Também utilizamos métodos de trabalhos baseados em “Metodologia ágil”, “Scrum” e "Kanban", muito usada na indústria de desenvolvimento de software e que foi adaptada para o ramo de preparação de documentos e traduções juramentadas. Nessas metodologias conseguimos que nossos funcionários mantenham a maior integração possível, agindo como um time focado e motivado em atingir o mesmo objetivo com grande eficiência.'
                            },
                            {
                            	id: 'traducao-juramentada-orcamento',
                            	title: 'Faça um orçamento conosco e comprove você mesmo.',
                            	description: 'Somos a empresa que revolucionou e ainda temos muita ambição para renovar cada vez mais esse mercado que nunca foi tão explorado. <a ui-sref="public.prices({\'#\':\'formulario-de-orcamento\'})">Peça um orçamento</a> sem compromisso. É simples e rápido.'
                            },
                        ]
                    },
                    {
                        title: 'Tradução juramentada',
                        description: 'Tire aqui todas as suas dúvidas sobre tradução juramentada.',
                        image: 'traducao-juramenada-barata-3.jpg',
                        state: 'public.traducaojuramentada',
                        page: 'traducao-juramentada',
                        topics: [
                            {
                            	id: 'traducao-juramentada-o-que-e',
                            	title: 'O que é uma tradução juramentada?',
                            	description: 'É uma tradução feita por um tradutor público, também chamado de tradutor juramentado, que são tradutores matriculados na junta comercial do seu estado. Quando há necessidade de apresentar documentos oficiais em outro país é preciso que a tradução tenha a sua veracidade jurídica preservada. Por isso o tradutor, autorizado pelo estado, deve traduzir o texto original sem nenhum tipo de alteração.'
                            },
                            {
                            	id: 'tradutor-juramentado-o-que-e',
                            	title: 'O que é um tradutor juramentado?',
                            	description: 'É um profissional concursado pelo estado, que passa por um teste complexo em determinado idioma, com termos técnicos e jurídicos que prova sua capacidade de traduzir documentos oficiais. Ao serem aprovados, esses tradutores recebem um número de matrícula que é usado para garantir a autenticidade e a validade da tradução em todo território nacional e no exterior.'
                            },
                            {
                            	id: 'traducao-juramentada-para-que-serve',
                            	title: 'Para que serve uma tradução juramentada?',
                            	description: 'Geralmente uma tradução juramentada é usada quando é preciso apresentar um documento oficial em um país diferente do que foi emitido. Para processos de imigração por exemplo, é imprescindível que os documentos apresentados no país em questão sejam acompanhados pelas traduções juramentadas'
                            },
                            {
                            	id: 'documentos-emitidos-no-exterior-precisaa-de-traducao',
                            	title: 'Documentos emitidos em outro país precisam de tradução juramentada para o português antes de serem apresentados em órgãos públicos brasileiros?',
                            	description: 'Sim, órgãos brasileiros aceitam documentos emitidos no exterior somente se estiverem acompanhados pela tradução para o português. E apenas tradução juramentada é valida. <a ui-sref="public.traducaolivre" target="_blank">Tradução livre</a> não é válida.'
                            },
                            {
                            	id: 'tradutor-publico-e-juramentado-diferenca',
                            	title: 'Qual é a diferença entre tradutor público e tradutor juramentado?',
                            	description: 'Nenhuma, é exatamente a mesma coisa. Em alguns estados esses profissionais geralmente são chamados de tradutores públicos e em outros de tradutores juramentados. O termo usado na identificação do tradutor, que consta na tradução juramentada, não altera a validade do documento.'
                            },
                            {
                            	id: 'quais-documentos-precisam-de-traducao-juramentada',
                            	title: 'Quais documentos precisam de tradução juramentada?',
                            	description: 'Documentos públicos e oficiais, que incluem certidões de registro civis (certidão de nascimento, certidão de casamento e certidão de óbito), contratos de união estável, passaportes, testamentos; documentos escolares (históricos escolares e de graduação, diplomas e certificados); atos notariais, procurações, carteira de habilitação, entre outros.'
                            },
                            {
                            	id: 'traducao-juramentada-precisa-de-firma-reconhecida',
                            	title: 'A tradução juramentada precisa de firma reconhecida?',
                            	description: 'Sim, uma tradução juramentada só tem validade quando possui a matrícula do tradutor na junta comercial, sua assinatura feita e o reconhecimento de firma dela em cartório.'
                            },
                            {
                            	id: 'traducao-juramentada-assinatura-digital',
                            	title: 'Posso receber uma tradução com assinatura digital pela internet e apresentá-las nos órgãos do Brasil ou exterior?',
                            	description: 'Não. Nós sempre enviamos a tradução juramentada digitalizada por e-mail também, mas ela serve apenas para a conferência. Ela não será válida para apresentar em nenhum órgão do Brasil ou exterior. Assinaturas digitais não são aceitas.'
                            },
                            {
                            	id: 'traducao-juramentada-apostila-de-haia',
                            	title: 'Uma tradução juramentada precisa de apostila de Haia?',
                            	description: 'Na maioria dos casos sim, mas não é via de regra. Se for apresentada em países que assinaram a convenção de Haia, então precisa sim. Caso o país não faça parte desta convenção ou se tiver um tratado com o Brasil que dispense o ato de legalização diplomática, então não há necessidade de apostilar os documentos. Para ler nossa matéria completa sobre apostila de Haia <a ui-sref="public.apostila" target="_blank">clique aqui</a>.'
                            },
                            {
                            	id: 'qualquer-documento-precisa-apostila-de-haia',
                            	title: 'Qualquer documento traduzido precisa de apostila se o país fizer parte da convenção de Haia?',
                            	description: 'Não, nem todo documento precisa de apostilamento mesmo quando for apresentado em um país que faça parte da Convenção de Haia. Para saber quais documentos precisam e quais não precisam de apostilamento, consulte nossa matéria sobre a apostila de Haia <a ui-sref="public.apostila({\'#\':\'quais-documentos-precisam-de-apostilamento\'})" target="_blank">clicando aqui</a>.'
                            },
                            {
                            	id: 'traducao-apostila-antes-ou-depois',
                            	title: 'A tradução deve ser feita antes ou depois da apostila de Haia?',
                            	description: 'A tradução deve ser feita antes, visto que precisa dela pronta para realizar o apostilamento. Depois de pronta, tanto o documento original como a tradução podem ser enviadas no mesmo momento para serem apostilados. '
                            },
                            {
                            	id: 'traducao-juramentada-quanto-custa',
                            	title: 'Quanto custa uma tradução juramentada?',
                            	description: 'O valor pode variar de estado para estado e a forma de cobrança também. Uma maneira pelo qual nós conseguimos os melhores preços é por analisar em qual estado fica mais em conta a tradução para os nossos clientes e qual método de cobrança usar em cada caso. Uma tradução juramentada feito por um tradutor da junta comercial de um determinado estado tem a mesma validade em qualquer lugar do Brasil e exterior. Para mais informações, consulte nossa página de preços <a ui-sref="public.prices" target="_blank">clicando aqui</a>'
                            },
                            {
                            	id: 'traduca-juramentada-como-e-cobrada',
                            	title: 'Como é cobrada uma tradução juramentada?',
                            	description: 'Ela pode ser cobrada tanto por lauda ou por palavra, dependendo do estado. É importante ressaltar que o valor é cobrado pelo tamanho do documento traduzido e não pelo tamanho do documento original. Assim, o preço pode variar de acordo com uma grande quantidade de variáveis, inclusive o idioma. Ainda assim, nós conseguimos formas de diminuir o valor das traduções mantendo a mesma confiabilidade e validade. Para saber mais consulte nossa página de preços <a ui-sref="public.prices" target="_blank">clicando aqui</a>. Para pedir um orçamento e confirmar que fazemos os melhores preços <a ui-sref="public.traducaojuramentada({\'#\':\'formulario-de-orcamento\'})">clique aqui</a>.'
                            },
                            {
                            	id: 'traducao-juramentada-lauda',
                            	title: 'O que é uma lauda?',
                            	description: 'Uma lauda equivale ao conjunto de 25 linhas e limitado a 1000 caracteres. Algumas variáveis como a contagem de espaço em branco ou valor excedente por linha ou palavras variam de acordo com o estado também.'
                            },
                            {
                            	id: 'como-conseguir-traducao-juramentada-barata',
                            	title: 'Como conseguir uma tradução juramentada mais barata?',
                            	description: 'Após um longo estudo a respeito da legislação, sobre traduções de textos jurídicos, sobre a logística de empresas de traduções no mercado atual e com o auxílio de tecnologias desenvolvida por profissionais experientes e capacitados, descobrimos várias formas de diminuir o valor final para os nossos clientes. Para saber mais sobre como conseguimos fazer isso, acesse nossa página de preços <a ui-sref="public.prices" target="_blank">clicando aqui</a>. Você também pode pedir um orçamento <a ui-sref="public.traducaojuramentada({\'#\':\'formulario-de-orcamento\'})">clicando aqui</a> e comprovar que o que falamos é verdade.'
                            },
                            {
                            	id: 'traducao-juramentada-taxa-de-urgencia',
                            	title: 'Existe taxa de urgência?',
                            	description: 'Nós, como empresa, não cobramos taxa de urgência. Entretanto, vários estados dão aos tradutores juramentados a liberdade de cobrar taxa de urgência. Entretanto nós dividimos a carga de trabalho entre vários tradutores para que só seja necessária a cobrança de taxa de urgência em último caso.'
                            },
                            {
                            	id: 'traducao-juramentada-prazo',
                            	title: 'Qual é o prazo de entrega de uma tradução juramentada?',
                            	description: 'Depende muito do tradutor ou do idioma em questão. A média (sem urgência) pode variar entre 3 a 7 laudas por dia, dependendo do tipo de documento. Por isso, é sempre importante que nos envie os documentos para <a ui-sref="public.traducaojuramentada({\'#\':\'formulario-de-orcamento\'})">fazer o orçamento</a> de valores e prazos.'
                            },
                            {
                            	id: 'portugues-de-portugal-precisa-de-traducao',
                            	title: 'O português do Brasil precisa de tradução juramentada para o português de Portugal?',
                            	description: 'Não. Nem para nenhum outro país que tenha o português como língua oficial do país. O mesmo se aplica no sentido contrário.'
                            },
                            {
                            	id: 'tipos-de-traducao-juramentada',
                            	title: 'Quais tipos tradução juramentada existem?',
                            	description: 'Basicamente, existe a tradução de <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-comum\'})">texto comum</a>, <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-especial\'})">texto especial</a> e <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-intepretacao\'})">serviço de interpretação</a>.'
                            },
                            {
                            	id: 'traducao-juramentada-texto-comum',
                            	title: 'O que é uma tradução juramentada de texto comum?',
                            	description: 'Ela não deve ser confundida com tradução livre ou tradução comum para a qual temos um artigo completo <a ui-sref="public.traducaolivre" target="_blank">neste link</a>. Tradução juramentada de texto comum são traduções de documentos que se utilizam de termos comuns para o tradutor juramentado. O valor deste tipo de tradução juramentada costuma ser mais barato e leva menos tempo para ser concluído. Entram em tradução de textos comuns documentos como passaportes, certidões dos registros civis (certidão de nascimento, casamento e óbito), carteiras de identidade e habilitação, entre outros que não envolvam textos jurídicos, técnicos ou científicos.'
                            },
                            {
                            	id: 'traducao-juramentada-texto-especial',
                            	title: 'O que é uma tradução juramentada de texto especial?',
                            	description: 'São traduções de documentos que se utilizam de termos que exigem pesquisa por parte do tradutor para serem traduzidos com exatidão. Por esse motivo, o valor da tradução de documentos desse tipo tem um valor mais elevado e o prazo de entrega costuma ser mais longo. Entram em tradução de textos especiais, documentos jurídicos, técnicos, científicos, comerciais, inclusive bancários e contábeis, certificados, históricos, diplomas escolares e de graduação, entre outros'
                            },
                            {
                            	id: 'traducao-juramentada-intepretacao',
                            	title: 'Como funciona um serviço interpretação?',
                            	description: 'É possível contratar um tradutor juramentado para atuar como intérprete em juízo, perante autoridades, em cartórios, em audiências judiciais ou casos semelhantes. O orçamento de serviços como esse deve ser solicitado com o máximo de antecedência possível para que haja a devida organização para atender a solicitação.'
                            },
                            {
                            	id: 'traducao-e-versao-diferenca',
                            	title: 'Qual é a diferença entre tradução e versão?',
                            	description: 'Embora geralmente usamos o termo “tradução” para facilitar o entendimento, em metade dos casos, estamos nos referindo a versão, e não a tradução. Tradução é quando se traduz um documento de idioma estrangeiro para o português. Versão é que se transcreve um documento do português para um idioma estrangeiro. A tradução é sempre mais barata do que a versão. '
                            },
                            {
                            	id: 'traducao-dispensa-documento-original',
                            	title: 'O documento traduzido descarta a apresentação do documento original?',
                            	description: 'Não, a tradução é vinculada ao documento original, ela nunca a substitui. Sendo assim a tradução não pode ser apresentada sozinha, ela é sempre acompanhada do documento original.'
                            },
                            {
                            	id: 'traducao-juramentada-prazo-validade',
                            	title: 'Por quanto tempo é válida uma tradução juramentada?',
                            	description: 'É ela válida por todo o tempo em que o documento original também for válido. Entretanto se o documento original for alterado deve-se entrar em contato com a empresa de tradução para atualizar a tradução.'
                            },
                            {
                            	id: 'documento-alterado-precisa-de-nova-traducao',
                            	title: 'Meu documento que já foi traduzido precisou ser alterado. Preciso de uma nova tradução juramentada?',
                            	description: 'Não necessariamente. Se a tradução original foi feito conosco, só cobramos uma pequena taxa de atualização do documento.'
                            },
                            {
                            	id: 'traducao-de-documento-com-erro',
                            	title: 'Se o meu documento possui algum erro, este pode ser corrigido na tradução?',
                            	description: 'Não. A tradução deve ser feita exatamente igual ao documento original. Neste caso orientamos nossos clientes a tomar as devidas providências para corrigir os documentos antes de solicitar a tradução.'
                            }
                        ]
                    },
                    {
                        title: 'Tradução livre',
                        description: 'Saiba o que é uma tradução livre (ou comum)',
                        image: 'traducao-livre-3.jpg',
                        state: 'public.traducaolivre',
                        page: 'traducao-livre',
                        topics: [
                            {
                            	id: 'o-que-e-traducao-livre',
                            	title: 'O que é uma tradução livre?',
                            	description: 'É aquela tradução feita por um profissional autônomo que não tem como destino fins governamentais. Pode ser uma tradução de uma carta, um software, campanhas de marketing, ou seja, qualquer coisa que não envolva documentos oficiais ou públicos.'
                            },
                            {
                            	id: 'qual-a-diferenca-entre-traducao-juramentada-e-livre',
                            	title: 'Qual é a diferença entre tradução juramentada e livre?',
                            	description: 'A tradução simples é aquela tradução de documentos que serão feitos para cumprir objetivos particulares ou para leitura de um grupo de pessoas. A tradução juramentada é feita por um tradutor juramentado, concursado pelo estado e jurado perante fé pública. Suas traduções são utilizadas para documentos com fins oficiais. Para consultar nosso artigo completo sobre tradução juramentada, <a ui-sref="public.traducaojuramentada" target="_blank">clique aqui</a>.'
                            },
                            {
                            	id: 'o-que-e-traducao-tecnica',
                            	title: 'O que é uma tradução técnica?',
                            	description: 'A tradução técnica é uma tradução especializada sobre assuntos específicos e técnicos, especificamente textos relacionados a áreas tecnológicas ou científicas. Para garantir a qualidade, exatidão e confiabilidade da tradução, algumas medidas precisam são tomadas. É possível que precisamos envolver mais de um tradutor e mais de dois revisores. Esse tipo de tradução costuma ter um prazo de entrega mais longo e um valor mais elevado devido a quantidade de esforço envolvida.'
                            },
                            {
                            	id: 'como-saber-que-tipo-de-traducao-preciso',
                            	title: 'Que tipo de tradução preciso?',
                            	description: 'Para descobrir qualo tipo de tradução que precisa, é necessário pensar em qual será o seu propósito. Se precisa ser apresentado para um processo governamental, acadêmico ou legal, é bem provavel que você precise de uma <a ui-sref="public.traducaojuramentada" target="_blank">tradução juramentada</a>. Se será usado para fins empresariais ou apenas pessoais muito provavelmente será uma tradução simples. Se o documento em questão possuir muitos termos técnicos, onde pessoas sem um conhecimento prévio do assunto não conseguirá compreender a matéria, é possível que precise uma tradução técnica. '
                            },
                            {
                            	id: 'como-e-cobrada-uma-traducao',
                            	title: 'Como é cobrado uma tradução livre',
                            	description: 'Trabalhamos com duas formas de cobrança: por lauda ou por palavra. Você pode optar por qual forma de combrança fique mais confortável.'
                            },
                            {
                            	id: 'traducao-o-que-e-lauda',
                            	title: 'O que é uma lauda? ',
                            	description: 'Lauda é uma contagem utilizada dentro do mundo das traduções. Corresponde a uma página de 25 linhas, limitada a 1000 carácteres sem espaço. Além da contagem por laudas, existe a contagem por palavras. Nós trabalhamos com ambas as forma e você pode optar pela forma que fique mais vantajosa para o seu caso.'
                            },
                            {
                            	id: 'traducao-prazo-de-entrega',
                            	title: 'Quais são os prazos de entrega? ',
                            	description: 'O prazo de entrega só pode ser estimado depois de analisarmos os documentos em questão, pois depende de vários fatores. Mas principalmente, depende da dimensão e formato do arquivo. <a ui-sref="public.traducaolivre({\'#\':\'formulario-de-orcamento\'})">Solicite um orçamento</a> para que possamos oferecer prazos e valores acessíveis. '
                            },
                            {
                            	id: 'como-enviar-e-receber-traducao',
                            	title: 'Como enviar e receber minha tradução?',
                            	description: 'Para receber o orçamento da sua tradução, nos informe os detalhes e nos envie os arquivos através de <a ui-sref="public.traducaolivre({\'#\':\'formulario-de-orcamento\'})">nosso formulário</a>. Nossos tradutores analisarão os arquivos com atenção para que possamos atender a sua necessidade de uma maneira que fique vantajosa para você.'
                            },
                            {
                            	id: 'empresa-de-traducao-vantagens',
                            	title: 'Por que recorrer a uma empresa de tradução?',
                            	description: 'Uma empresa de tradução apresenta a melhor solução e qualidade para que seu documento possa cumprir o propósito, amparado por toda a experiência e qualidade que um tradutor especialista em línguas pode prestar. Possuímos tradutores nativos que podem traduzir os documentos melhor do que pessoas que aprendem o outro idioma no decorrer da sua carreira profissional. '
                            },
                            {
                            	id: 'vantagens-da-traducao',
                            	title: 'Quais são as vantagens que a tradução pode exercer na minha empresa?',
                            	description: 'Mais do que um facilitador para o cliente, a tradução traz conforto e confiança para ele, que são fatores importantíssimos no marketing. Mesmo que o cliente já fale ou, pelo menos, compreenda o idioma em questão, ler o conteúdo em sua língua nativa muitas vezes é um fator decisivo para escolher qual empresa vai contratar.<br><br>Outro fator importante é que as empresas de traduçoes conseguem traduzir não apenas palavras, mas sim ideias e pensamentos. Por exemplo, veja a seguinte frase: “essa dieta alimentar contém todos os aminoácidos contidos em um almoço básico com feijão e arroz”. <b>Feijão e arroz</b>, não costuma ser um prato típico de outros países. Talvez seja mais vantajoso substituir por um prato mais familiar para o leitor. Assim, vamos analisar qual é o público-alvo e caso seja necessário, adequar a tradução para obter melhores resultados.'
                            },
                            {
                            	id: 'quais-tipos-de-traducao-existem',
                            	title: 'Quais são os tipos de tradução que vocês realizam? ',
                            	description: 'Oferecemos tradução livre de <a ui-sref="public.traducaolivre({\'#\':\'o-que-e-traducao-livre\'})">textos comuns</a> e <a ui-sref="public.traducaolivre({\'#\':\'o-que-e-traducao-tecnica\'})">técnicos</a>. Realizamos serviços de traduções <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-comum\'})" target="_blank">juramentadas de textos simples</a> e <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-texto-especial\'})" target="_blank">especiais</a>. Temos também <a ui-sref="public.traducaojuramentada({\'#\':\'traducao-juramentada-intepretacao\'})" target="_blank">serviços de interpretação</a> para eventos, sejam eles oficiais ou não.'
                            },
                            {
                            	id: 'garantia-de-qualidade-da-traducao',
                            	title: 'Existe garantia de qualidade da tradução? ',
                            	description: 'Oferecemos a garantia de satisfação dos serviços prestados. As condições comerciais são negociáveis e os preços competitivos, tudo adaptado conforme a necessidade de cada cliente. Trabalhamos de forma assertiva e confiável, preservando o conteúdo do texto, buscando sempre atender à precisão e clareza do documento. Temos um compromisso com a tradução e o cumprimento de prazos, assim como com a confidencialidade e qualidade de nossos documentos. '
                            },
                            {
                            	id: 'traducao-de-arquivo-nao-editavel',
                            	title: 'Preciso de tradução de um arquivo não editável, é possível?',
                            	description: 'Em relação a manuais técnicos ou textos específicos, em casos que exista uma versão editável será feito dentro da diagramação. Caso não exista ofereceremos diversas opções que ajudarão e facilitar o resultado final. '
                            },
                            {
                            	id: 'migrar-traducao',
                            	title: 'Fiz uma tradução na minha empresa mas não fiquei satisfeito. Vocês podem me ajudar?',
                            	description: 'Com certeza! Caso não tenha ficado satisfeito com uma tradução feita em outro lugar, prestamos serviços de revisão e garantimos que os seus textos cumprirão o objetivo desejado.'
                            }
                        ]
                    }
                ];

    }
}());
