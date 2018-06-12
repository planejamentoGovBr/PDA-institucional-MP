
**Plano de Dados Abertos do Ministério do Planejamento**

----------

Versão [3.0.0](https://github.com/planejamentogovbr/PDA-institucional-MP/releases/xxxxxx) de julho/18 - Vigência 2018/2019


## **Sumário**

[TOC]


----------

## **Apresentação**
O Plano de Dados Abertos (PDA) é o documento orientador para as ações de implementação e promoção de abertura de dados no Ministério do Planejamento, Desenvolvimento e Gestão (MP), obedecendo aos padrões mínimos de qualidade, de forma a facilitar o entendimento e a reutilização das informações. É ele quem organiza o planejamento referente à implantação e racionalização dos processos de publicação de dados abertos.

Sua elaboração vem ao encontro do disposto na [Lei de Acesso à Informação (LAI)](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm), na [Instrução Normativa SLTI nº 4](http://dados.gov.br/paginas/instrucao-normativa-da-inda), de 13 de abril de 2012, que institui a Infraestrutura Nacional de Dados Abertos - INDA, no [Decreto Presidencial nº 6.666](http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6666.htm), de 27 de novembro de 2008, que institui a Infraestrutura Nacio­nal de Dados Espaciais - INDE, bem como dos compromissos assumidos pelo Brasil no âmbito do [3º Plano de Ação Nacional sobre Governo Aberto](http://www.governoaberto.cgu.gov.br/no-brasil/planos-de-acao-1), entre outros normativos que abordam o tema de transparência.

Considerando a existência de cartilhas e modelos que dispõem sobre arquitetura, ontologias e aspectos técnicos relacionados à formatação operacional para a catalogação e publicação de dados, este documento visa orientar o planejamento para a abertura de dados, citando a literatura e materiais disponí­veis sobre o ferramental técnico.

Nessa trilha, são detalhados os principais normativos aplicáveis ao tema, assim como o cenário institucional que possui influência direta no conteúdo do documento, tais como: o [Planejamento Estratégico Institucional (PEI)](http://www.planejamento.gov.br/acesso-a-informacao/institucional/o-ministerio/planejamento-estrategico), Planejamento Estratégico de Tecnologia da Informação (PETI) e o [Plano Diretor de Tecnologia da Informação e Comunicação (PDTIC)](http://www.planejamento.gov.br/assuntos/secretaria-executiva/dti/sobre-o-pdti) ambos do MP.

A partir das diretrizes estratégicas, este Plano de Dados Abertos prevê no seu Plano de Ação, as ações necessárias para o alcance da sustentabilidade dos resultados pretendidos, estabelecendo a matriz de responsabilidade, a periodicidade e os responsáveis pela atualização constante das bases de dados; além de prever os canais de comunicação e as formas de interação com a sociedade, bem como a matriz de governança e obediência às metodologias e padrões para a correta catalogação e publicação dos dados a serem disponibilizados. 

O presente Plano, referente ao Biênio 2018-2019 e com edição registrada para Julho/2018, é a atualização do Plano de Ações do PDA anterior, referente ao Biênio de 2016-2017. Além disso, foi revisado quanto ao cumprimento das metas anteriores e a inserção de novos dados que serão abertos para a sociedade.

O Plano possui periodicidade bienal, com eventuais novas edições, dentro dessa mesma periodicidade, identificadas no mês de sua liberação, as quais, podem ser motivadas pela revisão do _status_ das metas ou novas inserções de abertura de dados. Esse será divulgado à sociedade por meio de sua publicação no [Portal Brasileiro de Dados Abertos](http://dados.gov.br) e no sítio eletrônico do MP.

O Plano foi construído no 1º. Semestre de 2018, de forma colaborativa, envolvendo todas as unidades do MP e considerando os princípios da publicidade e da transparência da administração pública. Para se estabelecer priorização dos conjuntos de dados que serão disponibilizados foram considerados o grau de relevância das informações para o cidadão, os compromissos assumidos pelo Ministério no PDA anterior, além das competências e os conjuntos de dados efetivamente mantidos pelo MP.

O cidadão poderá usar a [plataforma e-Ouv](_https://sistema.ouvidorias.gov.br/publico/Manifestacao/RegistrarManifestacao.aspx_) para relatar problemas técnicos ou inconsistên­cias, devendo a manifestação ser encaminhada à área responsável para resposta e solução, conforme o caso. Os usuários também podem fazer sugestões que serão referência para o aperfeiçoamento e as revisões do PDA.

 ----------
## **I. Introdução**

O MP atualiza o seu PDA para o biênio 2018-2019 documento no qual são estabelecidas as ações para a implementação e promoção de abertura de dados sob sua responsabilidade.

Os principais normativos aplicáveis a confecção deste Plano são:

- A [Lei nº 12.527](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm), de 18 de Novembro de 2011, Lei de Acesso à Informação – LAI;
- O [Decreto nº 8.777,](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/D8777.htm) de 11 de maio de 2016, que institui a Política de Dados Abertos do Poder Executivo Federal;
- [Resolução CGINDA nº 3](http://wiki.dados.gov.br/Comite-Gestor-da-INDA.ashx#Resolu%C3%A7%C3%B5es_0), de 13 de outubro de 2017, que aprova as normas sobre elaboração e publicação de Planos de Dados Abertos, conforme disposto no Decreto nº 8.777, de 11 de maio de 2016.
- O disposto no art. 48 da [Lei Complementar nº 101](http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp101.htm), de 4 de maio de 2000, que determina ao Poder Público a adoção de instrumentos de transparência na gestão fiscal  em meios eletrônicos de acesso público às informações orçamentárias e prestações de contas;
- O [Decreto Presidencial nº 6.666](http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6666.htm), de 27 de novembro de 2008, que instituiu a criação da Infraestrutura Nacional de Dados Espaciais – INDE, e determina que o compartilhamento e disseminação dos dados geoespaciais e seus metadados é obrigatório para todos os órgãos e entidades do Poder Executivo Federal, salvo os protegidos por sigilo;
- [Decreto s/nº de 15 de setembro de 2011](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/dsn/dsn13117.htm), que institui o Plano de Ação Nacional sobre Governo Aberto, o qual estabelece o compromisso do governo de implantar a Infraestrutura Nacional de Dados Abertos (INDA);
- A [Instrução Normativa nº 4 de 13 de abril de 2012](http://dados.gov.br/paginas/instrucao-normativa-da-inda), que cria a INDA e estabelece conceitos referentes a dado, informação, dado público, formato aberto, licença aberta, dados abertos e metadado;
- O [Plano de Ação da INDA](http://wiki.dados.gov.br/Plano-de-Acao-da-INDA.ashx) , que institui a necessidade de os órgãos de instituírem seus respectivos Planos de Abertura de Dados, com vistas a uma Política Nacional de Dados Abertos, e institui os elementos mínimos do documento, bem como orienta que a abertura de dados deve observar a relevância para o cidadão;
- O [Plano de Ação Nacional sobre Governo Aberto](http://www.governoaberto.cgu.gov.br/no-brasil/planos-de-acao-1) (no âmbito da Parceria para Governo Aberto, Open Government Partnership - OGP);
- [Os parâmetros estabelecidos na e-PING](http://eping.governoeletronico.gov.br/) - arquitetura de interoperabilidade do governo eletrônico, e os vocabulários e ontologias de Governo Eletrônico e-VoG e e-MAG - Modelo de Acessibilidade de Governo Eletrônico (instituído pela Portaria nº 03, de 07 de Maio de 2007);
- Os parâmetros atuais ou que venham a ser estabelecidos no âmbito de Planejamento Estratégico Institucional ou setorial, bem como os relacionados às áreas de tecnologia da informação (PETI e PDTI), sob orientação da [Estratégia de Governança Digital – EGD](https://www.governoeletronico.gov.br/egd/estrategia-de-governanca-digital).

### Cenário Institucional

A elaboração e a revisão do PDA se relacionam e estão alinhadas com os seguintes instrumentos e instâncias de gestão: 

**1. Planejamento Estratégico Institucional (PEI – MP - 2016-2019)**
O planejamento estratégico do MP está organizado de forma simples e consta as definições de  missão, visão e as perspectivas que contribuem para a consecução da missão. 

***Missão***: Promover o desenvolvimento, a gestão eficiente, a melhoria do gasto público e a ampliação dos investimentos, visando à oferta de bens e serviços de qualidade ao cidadão.

***Visão***: Ser reconhecido pela excelência e competência na gestão pública.

O PDA está diretamente ligado a um Objetivo Estratégico **"Consolidar a Reorganização Administrativa, com Ênfase na Desburocratização e na Transparência"**, com sua contextualização, Indicador Estratégico, Objetivos de Contribuição das Unidades, Iniciativas e Entregas Estratégicas podendo ser acessado no link .  [Planejamento Estratégico Institucional (PEI)](http://www.planejamento.gov.br/acesso-a-informacao/institucional/o-ministerio/planejamento-estrategico)

**2.	Planejamento Estratégico de Tecnologia da Informação e Comunicação (PETIC)**

Desdobramento do PEI-MP para a área de Tecnologia da Informação - TI, em seu mapa estratégico constam a definição de missão, visão e as perspectivas que contribuem para a consecução da missão. Essas perspectivas estão organizadas em quatro níveis interligados: impactos para o Ministério, entregas da área de Tecnologia da Informação, processos internos e sustentação. 
O PDA está diretamente ligado ao “impacto para o Ministério” Aperfeiçoar a gestão da informação e do conhecimento e os mecanismos de comunicação e transparência; à “entrega de TI”: Aprimorar os meios eletrônicos de fornecimento de informações internamente e com a sociedade;


**3.	Plano Diretor de Tecnologia da Informação e Comunicação (PDTIC)** ==Gustavo==

O Plano Diretor de Tecnologia da Informação e Comunicação do Ministério do Planejamento, Desenvolvimento e Gestão – PDTIC/MP tem como objetivo atender as necessidades de tecnologia da informação e comunicação das unidades deste Ministério alinhadas aos objetivos estratégicos, visando agregar valor ao negócio. Nesse sentido, ele auxiliará a priorização e otimização da aplicação dos recursos.


**4.	Comitê Estratégico de Tecnologia da Informação e Comunicação (CETIC)**

O CETIC, de caráter permanente, natureza deliberativa e consultiva, e tipo estratégico, tem por finalidade de promover a integração entre os objetivos e as diretrizes estratégicas da área de Tecnologia da Informação e Comunicação - TIC com as outras áreas do MP, assim como deliberar e assessorar colegiado superior ou a alta administração sobre políticas, diretrizes e planos relativos à TIC.


**5.	Estratégia Governança Digital (EGD) ==Atualizar no portal==**

O propósito da EGD é orientar e integrar as iniciativas de transformação digital dos órgãos e entidades do Poder Executivo Federal, por meio da expansão do acesso às informações governamentais, da melhoria dos serviços públicos digitais e da ampliação da participação social.
O instrumento foi regulamentado pela Portaria nº 68/2016 do Ministério do Planejamento, Desenvolvimento e Gestão (MP), a qual vinculasse ao Decreto nº 8.638/2016, que instituiu a Política de Governança Digital.

**6.	Comitê Gestor da Infraestrutura Nacional de Dados Abertos (CGINDA):**
O CGINDA criado conforme o art. 5º da Instrução Normativa nº 4, de 12 de abril de 2012, da Secretaria de Logística e Tecnologia da Informação - SLTI, tem por finalidade a gestão da Infraestrutura Nacional de Dados Abertos - INDA, que objetiva formular políticas e estabelecer diretrizes para garantir e facilitar o acesso pelos cidadãos, pela sociedade e, em especial, pelas diversas instâncias do setor público aos dados e informações públicas.
O CGINDA, define uma série de diretrizes para a abertura de dados e apresenta no seu Plano de Ação da INDA um modelo orientador a ser seguido pelos órgãos na construção de seus PDAs. O PDA do MP segue esse modelo e as diretrizes do comitê.
*	Realização de 3 turmas do curso EAD, na modalidade à distância, de Elaboração de Plano de Dados Abertos; 
*	Revisão do Manual de Elaboração do Plano de Dados Abertos; 
*	Monitoramento  da Publicação dos Planos de Dados Abertos;
*	Normativo da INDA acerca da padronização dos Planos de Dados Abertos ; e
*	Monitoramento da implementação dos Planos de Dados Abertos publicados.

**7.	Coordenação da Comissão Nacional de Cartografia na Infraestrutura Nacional de Dados Espaciais (INDE):**
O Decreto nº 6.666, de 27/11/2008, que institui, no âmbito do Poder Executivo federal a INDE, define como seus objetivo principais o ordenamento na geração na disseminação e no uso dos dados geoespaciais do País e a utilização, na produção dos dados geoespaciais pelos órgãos públicos. dos padrões e normas estabelecidos pela Comissão Nacional de Cartografia

**8.	Comissão Nacional de Cartografia (CONCAR)**
A Secretaria de Planejamento e Assuntos Econômicos (SEPLAN) do MP esta encarregada de, promover, junto aos órgãos da administração publica, acordos e cooperações, visando ao compartilhamento dos seus acervos de dados geoespaciais.
O PDA do MP segue as orientações da INDE e sempre que o conjunto de dados abertos possuir informações de geolocalização os dados também serão disponibilizados pela rede INDE;

**9.	Comitê Interministerial Governo Aberto (CIGA)**
O MP é membro do CIGA, instituído pelo Decreto s/nº de 15/09/2011. Trata-se do colegiado responsável por orientar a implementação e elaboração dos Planos de Ação do Brasil, contribuindo o compromisso do país em inovar para fortalecer a transparência dos atos governamentais. 

**10.	Governo Aberto no âmbito da Parceria para Governo Aberto (OGP)**

Está atualmente em sua 3ª edição e os novos compromissos do MP relacionados a abertura de dados são: 

* Compromisso nº 1: Identificar e implementar mecanismos para reconhecer problemas solucionáveis ou mitigáveis a partir da oferta de dados pelo Governo, que atenda expectativas de demandantes e ofertantes. MP.
*	Compromisso n.º 9: Consolidar uma rede aberta no setor público de forma colaborativa e transparente com a sociedade.
*	Compromisso n.º 10: Realizar inventário dos serviços do Poder Executivo Federal e implementar avaliação por meio de mecanismos de satisfação, priorizando serviços para melhoria.
*	Compromisso 14: Ampliar a participação social no PPA por meio do Fórum Interconselhos.

### Objetivo Geral

 
Promover a abertura de dados pelo MP, zelando pelos princípios da publicidade, transparência e eficiência, visando o aumento da disseminação de informações para a sociedade, bem como a melhoria da qualidade dos dados disponibilizados, de forma a dar maior suporte à tomada de decisão pelos gestores públicos e ao controle social.

### Objetivos Específicos

No âmbito do MP, os objetivos específicos ligados à Política de Dados Abertos são:

* Identificar prioridades e disponibilizar dados em formatos abertos, e, sempre que possível, georeferenciados;
* Melhorar a qualidade dos dados disponibilizados;
* Estimular a interoperabilidade de dados e sistemas governamentais pela publicação de dados em formato processável por máquina, conforme padrões estabelecidos .
* Melhorar a gestão da informação e de dados; 
* Incrementar os processos de transparência e de acesso a informações públicas;
* Estimular a visualização da informação das ações de governo no território; e
* Priorizar a abertura de dados e a melhoria de qualidade com base nas demandas por dados identificados na sociedade.
 
 ----------

## **II. Estratégia para Abertura**

As ações de abertura de dados que serão implementadas pelo MP seguem os princípios e as 3 leis dos dados abertos, bem como premissas e boas práticas comuns dentre os órgãos do governo federal, e estão alinhadas à governança dos projetos de TIC da instituição.  

O Ministério do Planejamento, em consequência do seu papel dentro do estado brasileiro, é a instituição responsável pelo funcionamento de diversas plataformas de uso comum por toda a Administração Pública federal, a exemplo do sistema de compras (Comprasnet), de diárias e passagens (SCDP), e o de Convênios (Siconv). Nesse sentido o MP deve implementar as etratégias de abertura dos dados destes sistemas de forma agnóstica e centralizada, atendendo às necessidades de publicação de dados comuns por todos os órgãos

### Premissas

1. Publicar os dados considerados relevantes para a sociedade, no formato disponível e informando as eventuais limitações de qualidade dos dados;
2. Avaliar a qualidade dos dados publicados e identificar melhorias a serem realizadas;
3. Sempre que possível publicar dados e seus metadados conforme estabelecido no Plano de Ação da INDA. No caso de dados Georreferenciados, deve-se levar em conta as normas e padrões da INDE;
4. Publicar os dados do Ministério seguindo os padrões definidos pela e-PING, pela Infraestrutura Nacional de Dados Abertos - INDA e pela Infraestrutura Nacional de Dados Espaciais – INDE e Governo Eletrônico;
5. Catalogar os dados abertos do Ministério no Portal Brasileiro de Dados Abertos, ponto central de acesso aos dados do governo federal;
6. Catalogar os dados geoespacializados na INDE;
7. Promover a integração entre os catálogos de metadados INDA e INDE;
8. Manter os dados publicados atualizados e sincronizados com a origem, com a menor periodicidade e maior granularidade viáveis; 
9. A atualização dos dados deve ocorrer preferencialmente, por meio de sincronização automática, estabelecendo-se um processo contínuo, especialmente no caso de sistemas estruturantes, com ganhos de eficiência em comparação às extrações pontuais;
10. Utilizar, como forma de disseminação, os ambientes do Portal Brasileiro de Dados Abertos do Governo Federal.

### Evolução das Plataformas tecnológicas

==Esclarecer sobre ações de melhoria das bases de dados==

### Formatos e Interfaces de acesso aos dados

Para ser considerado aberto de fato, um dado deve estar publicado utilizando se de um formato aberto e não proprietário como o CSV e JSON.
A escolha pelos formatos e as interfaces tecnológicas de acesso aos dados abertos depende de cada caso específico. Serão levadas em consideração as tecnologias utilizadas no sistema em questão, assim como a capacidade de desenvolvimento da unidade de Tecnologia da Informação, buscando sempre maximizar a reutilização e a precisão semântica das informações.
O MP adotará, sempre que possível, a publicação em diversos formatos e por meio de Interfaces Programáveis de Aplicações - APIs.


### Processos de Desenvolvimento de Softwares

Vislumbrando os desafios de caráter tecnológico para implementação deste plano, o Ministério do Planejamento tem buscado aprimorar as ferramentas e metodologias de desenvolvimento de softwares orientando à criação de soluções com foco no cidadão e na transparência. Para isso o departamento setorial de TI tem aprimorado a Metodologia de Desenvolvimento de Software para abarcar as técnicas de dados abertos com as necessidades de negócio de cada plataforma tecnológica. 

Novos sistemas que estão sendo construídos já incluem nativamente os requisitos de abertura, produzindo plataformas tecnológicas convergentes e enxutas, nas quais as interfaces de acesso aos dados (APIs) não são de uso exclusivo dos usuários de dados abertos, mas de todos os Aplicativos e interfaces que se utilizam daquele conjunto de dados.

 ----------
## **III. Definição das Ações de Abertura e Melhoria de Dados**

A garantia dos princípios da publicidade e da transparência da Administração Pública é o pilar deste Plano. Parte-se do pressuposto de que a divulgação dos dados é a regra a ser seguida, tratando-se o sigilo como exceção. Contudo, faz-se necessário estabelecer diretrizes para a abertura de bases de dados, considerando-se os princípios da legalidade, economicidade e eficiência, para a definição da priorização das informações a serem disponibilizadas para a sociedade.

Para definição dos dados que serão abertos na vigência deste PDA, foi realizada uma dinâmica representantes de todas as secretarias do MP e foi adotado um processo que se iniciou com a avaliação dos PDA´s anteriores até a aplicação de critérios de priorização nas Bases de Dados candidatas a abertura neste plano.

Também foi considerada a colaboração da sociedade no processo de melhoria da qualidade através do recebimento de sugestões e canais permanentes de comunicação. 

**a)	Grupo representantes de todas as áreas**

Além disso foram realizadas reuniões com representantes das Secretarias do MP com objetivo de nivelar o conhecimento quanto a política de dados abertos, avaliar a qualidade dos dados publicados, identificar melhorias a serem realizadas e novos conjuntos de dados a serem disponibilizados. 

**b)	Relatório de Acompanhamento e Monitoramento do PDA 2016-2017**

Um insumo importante considerado neste processo foram as informações do Relatório de Acompanhamento e Monitoramento do PDA 2016-2017, onde foram observados os seguintes itens:

* As manifestações nos canais de comunicação: e-Ouv, e-SIC e canal de comunicação da ASCOM com a imprensa;
* O número de acessos aos links do conjuntos de dados disponibilizadas;
* Os compromissos do Plano de Ação constante no PDA anterior e que ainda não foram cumpridos;
* Os normativos e compromissos formalmente assumidos pelo Ministério;

**c)	Inventário de Bases de Dados**

O grupo de trabalho constituído acima desenvolveu, dentre as suas atividades, um detalhamento maior do inventário de bases do MP certificando se todos os conjuntos de informações organizadas, constantes de sistemas (sistemas estruturantes), planilhas atualizadas regularmente, informações já publicadas em relatórios, sítio institucional, Portal da Transparência, ou ainda, as já organizadas para atender demandas frequentes via e-SIC e e-Ouv já se encontravam divulgadas no Portal de Dados Abertos.

Este trabalho resultou em um inventário contendo uma relação de 40 sistemas além dos 10 sistemas estruturantes citados abaixo. 

* Sistema Integrado de Planejamento e Orçamento - SIOP;
* Sistema de Informações das Estatais - SIEST;
*	Sistema Integrado de Administração de Pessoas – SIAPE;
*	Sistema de Informações Organizacionais – SIORG;
*	Sistema Integrado de Administração de Serviços Gerais - SIASG;
*	Sistema de Gestão de Convênios e Contratos de Repasses – SICONV;
*	Sistema Integrado de Administração Patrimonial – SIAPA;
*	Sistema Estruturante de Gestão de diárias e passagens – SCDP
*	Portal de Acesso e módulos de Serviços da SPU - SPUnet

Os sistemas estruturantes sob gestão do MP são de uso obrigatório transversal para órgãos da Administração Pública Federal (APF) e responde por 39 conjuntos de dados já disponíveis no Portal de Dados Abertos.

Atendendo a premissa de procurar disponibilizar os dados considerados mais relevantes para a sociedade o mais rápido possível, nas condições disponíveis, com a qualidade de conteúdo que os dados apresentarem foi aplicado um filtro no inventário adotando como critério das bases que tiveram maior numero de ocorrências nos canais de comunicação e que necessitam ter um foco maior de atuação da organização. Neste caso foram priorizadas as ações que aprimoram a qualidade dos conjuntos de dados relativas aos sistemas estruturantes. 

Como resultado obteve-se como produto uma seleção com 59 (cinquenta e nove) conjuntos de dados relacionados aos sistemas estruturantes, sendo 39 já disponibilizados e 20 (vinte) novos conjuntos de dados candidatos à disponibilização em Dados Abertos para este plano. As demais Bases do Inventário que não farão parte deste plano serão considerados no próximo PDA 2020-2021.

**d)	Consulta Pública**

Entre os dias 2 e 23 de maio, a seleção com 59 (cinquenta e nove) conjuntos de dados ficou em consulta pública para que os cidadãos pudessem manifestar o interesse pela abertura das 20 bases ainda não abertas. O objetivo foi incentivar a participação da sociedade e otimizar os esforços para disponibilizar, em formato aberto, a maior quantidade possível de bases de dados do Planejamento. 

O resultado da consulta pública influenciou na adequação da oferta de informações do Planejamento à demanda da sociedade sobre os dados abertos que constam no presente Plano.

Cumprindo o compromisso de garantir a transparência do processo  foi publicada a devolutiva da Consulta Pública no Portal Institucional do MP  esclarecendo sobre as solicitações de abertura de dados que não serão contempladas neste plano.

Todo processo de consulta pública foi amplamente divulgado nos seguintes canais:
•	Site do Ministério (www.planejamento.gov.br)
•	Redes sociais oficiais do Ministério

**e)	Critérios para priorização das Bases a serem abertas**

Considerando que a abertura de dados deve, sobretudo, garantir os princípios da publicidade e da transparência da administração pública, a definição das metas de abertura de dados e etapas de priorização, foram baseados nos critérios relacionados abaixo, aplicados ao resultado da Consulta Pública:

1.	Grau de relevância ao cidadão: observando-se as demandas recepcionadas via e-SIC e pelo e-Ouv; os serviços e áreas mais procurados no sítio do MP; consultas a/de jornalistas que demandam o MP; 
2.	Estímulo ao controle social;
3.	Obrigatoriedade legal ou compromisso assumido: normativos legais e compromissos formalmente assumidos pelo Ministério, inclusive perante organismos internacionais;
4.	Refere a projetos do governo;
5.	Demonstra resultados efetivos de serviços;
6.	Capacidade de fomento ao desenvolvimento sustentável;
7.	Fomento a negócios;
8.	Solicitado em transparência passiva a LAI; e
9.	Nível de Maturidade e organização das informações pertencentes ao conjunto de dados abertos.

### **Peso dos Critérios**

| Critério | Nome do Critério  | Peso |
|--:|:--:|:--:|
| **C1** | Grau de Relevância ao Cidadão |**4** |
| **C2** | Estímulo ao Controle Social| **3** |
| **C3** | Obrigatoriedade legal ou compromisso assumido| **1** |
| **C4** | Refere a projetos Estratégicos do Governo| **2** |
| **C5** | Demonstra Resultados diretos e efetivos dos serviços públicos disponibilizados ao cidadão pelo Estado| **4** |
| **C6** | Capacidade de fomento ao desenvolvimento sustentável| **3** |
| **C7** | Possibilidade de Fomento a Negócios| **5** |
| **C8** | Solicitado em Transparência Passiva a LAI| **4** |
| **C9** | Nível de maturidade e organização das informações pertencentes ao conjunto de dados abertos| **5** |

### **Matriz de Aplicação Critérios**

A partir da priorização resultante da Matriz de Critérios , foi elaborado o plano de ação (sessão IV) que levou em consideração as informações das diversas áreas de negócios do MP, além da viabilidade da unidade de Tecnologia da Informação e Comunicação. O resultado de todo esse processo de aplicação de critérios consta na tabela abaixo e subsidia a abertura ou melhoria da disponibilização de dados em formato aberto.

| Nome da Base de Dados | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | Total |
|--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:| :--:|
| **Informações sobre a arrecadação anual sobre o Patrimônio da União** | 12 | 9 | 3 | 2 | 12 | 9| 15 | 8 | 15| **85** |
| **Catálogo de conjuntos de dados que integram o Portal de Dados Abertos (CKAN)** | 12 | 9 | 1 | 4 | 8 | 3 | 10| 8 | 15 |**70** |
| **Acompanhamento físico das ações** | 12 | 9 | 1 | 6 | 12 | 6 | 10 | 4 | 10 | **70** |
| **Programa de Desligamento Voluntário - PDV** | 8 | 9 | 1 | 6 | 8 | 3 | 5 | 8 | 15 | **63** |
| **Sistema de Transportes de Servidores Públicos - TaxiGov** | 4 | 9 | 1 | 4 | 4 | 6 | 15 | 4 | 15 | **62** |
| **Cargos Vagos do Poder Executivo Civil** | 4 | 9 | 1 | 2 | 8 | 3 | 5 | 12 | 15 |**59** |
| **PPA 2016-2019 - Relacionamento com Objetivos de Desenvolvimento Sustentável** | 12 | 3 | 1 | 6 | 4 | 9 | 5 | 4 | 15 | **59** |
| **Vinculação dos Programas Federais com atributos PPA 2012-2015** | 8 | 3 | 1 | 6 | 4 | 3 | 10 | 4 | 15 |**54** |
| **Informações do Projeto de Lei de Diretrizes Orçamentárias** | 8 | 6 | 1 | 2 | 4 | 3 | 15 | 4 | 5 | **48** |
| **Gastos de pessoal com Auxílios** | 8 | 9 | 1 | 2 | 4 | 3 | 5| 8 | 10 |**50** |
| **Catálogo de bases da dados que integram o GovData** | 4 | 3 | 1 | 6 | 8 | 3 | 5 | 4 | 15 |**49** |
| **Catálogo de APIs que integram o ConcectaGov** | 4 | 3 | 1 | 6 | 8 | 3 | 15 | 4 | 5 |**49** |
| **Informações sobre Imóveis Funcionais e Permissionários** | 8 | 6 | 3 | 2 | 4 | 3 | 5 | 8 | 10 |**49** |
| **Informações sobre o valor de depreciação dos imóveis de Uso Especial** | 4 | 3 | 1 | 2 | 4 | 3 | 5 | 4 | 15 |**41** |
| **Alterações orçamentárias (créditos)** | 4 | 3 | 1 | 6 | 8 | 3 | 5 | 4 | 5 |**39** |
| **Previdência Complementar dos Servidores do Poder Executivo Civil** | 4 | 3 | 1 | 4 | 4 | 3 | 5 | 4 | 10 |**38** |
| **Pensionistas do Poder Executivo Federal** | 4 | 6 | 1 | 2 | 4 | 3 | 5 | 8 | 5 |**38** |
| **Boletim das Empresas Estatais Federais** | 8 | 6 | 1 | 2 | 4 | 3 | 5 | 4 | 5 |**38** |
| **Informações sobre imóveis da antiga RFFSA** | 4 | 6 | 1 | 2 | 4 | 3 | 5 | 4 | 5 |**34** |
| **Relação de órgãos que utilizam a malha da INFOVIA** | 4 | 3 | 1 | 2 | 4 | 3 | 5| 4 | 5 |**31** |

### ** Melhoria da qualidade dos dados**

A abertura de dados de um sistema pode seguir várias abordagens. Algumas são focadas em agregar maior valor aos dados, como geolocalização precisa, cruzamento de dados com outras fontes, acarretando mais tempo e investimento. Tais abordagens entregam dados abertos com maior qualidade, mas por outro lado privam o cidadão de acesso aos dados por mais tempo, enquanto se espera o processo de abertura. Há outras abordagens mais simples e que entregam dados com menor valor agregado, só que de forma mais rápida à sociedade. 

No presente plano adotamos como premissa a disponibilização de dados relevantes para a sociedade adotando a estratégia de evolução das informações já disponibilizadas buscando agregar maior valor a essas informações. Isso inclui publicação em mais e novos formatos, implementação de Interfaces Programáveis de Aplicativos - APIs, desenvolvimento de ontologias, desenvolvimento e integração com portais de informações gerencias dotados de ferramentas de consultas por diversos critérios, organização e ajustes par tornar os conjuntos de dados disponíveis cada vez mais acessível a sociedade.
Catalogação no Portal Brasileiro de Dados Abertos
O processo de catalogação será feito diretamente por cada uma das áreas responsáveis pelos dados, observando-se as orientações da Secretaria de Tecnologia da Informação e Comunicação (SETIC) e as diretrizes do PDA. Os pontos focais de cada secretaria utilizarão o Manual de Catalogação para realizar o cadastro, manutenção e revisão dos conjuntos de dados.
No caso de dados georeferenciados, a atualização do catálogo de metadados da INDE serão realizadas pelos pontos focais das secretarias por meio do nó do MP e sob orientação da SEPLAN.

 ----------
## **IV. Sustentação**

A SETIC e a Ouvidoria ficarão responsáveis pela curadoria dos metadados do dados.gov.br. A curadoria compreende as seguintes atividades:

1. Verificar, para efeitos de publicação, se os dados estão de acordo com os padrões da INDA e INDE (metadados atualizados contendo a descrição, contatos dos responsáveis pelas informações e dos outros metadados associados a cada conjunto de dados);
2. Contatar o responsável pelos dados, caso se verifique que algum dos arquivos catalogados se tornou indisponível;
3. Identificar e elaborar propostas para possíveis melhorias de qualidade dos dados disponibilizados e novos conjuntos de dados candidatos à abertura de dados. As propostas deverão ser construídas a partir da experiência do SIC com as demandas de informação pela sociedade e da gestão de dados da DTI que gerencia e oferece soluções transversais para as necessidades de compartilhamento de dados entre os diferentes sistemas mantidos pelas unidades do MP;
4. Publicar critérios para classificação da acurácia e da qualidade dos dados a ser fornecida como metadados pelas unidades publicadoras. (Exemplos de medida de acurácia para constar da publicação: grau de necessidade de conferência in loco ou por outro critério do dado, frequência esperada dessa conferência, frequência realizada dessa conferência, etc..).

No caso dos dados georreferenciados, competirá à Secretaria de Planejamento e Assuntos Econômicos (SEPLAN) a coordenação da publicação de dados sob responsabilidade dos demais atores do MP, com apoio da SETIC.

Ressalta-se que os responsáveis pelas informações são as unidades setoriais, que devem, inclusive, informar à acurácia e qualidade das informações nos metadados respectivos.

### **Governança**

De acordo com § 4º do art. 5º do Decreto 8777/2016, autoridade designada nos termos do art. 40 da Lei nº 12.527, de 2011, será responsável por assegurar a publicação e a atualização do Plano de Dados Abertos, e exercerá as seguintes atribuições:

I - orientar as unidades sobre o cumprimento das normas referentes a dados abertos;
II - assegurar o cumprimento das normas relativas à publicação de dados abertos, de forma eficiente e adequada;
III - monitorar a implementação dos Planos de Dados Abertos; e
IV - apresentar relatórios periódicos sobre o cumprimento dos Planos de Dados Abertos, com recomendações sobre as medidas indispensáveis à implementação e ao aperfeiçoamento da Política de Dados Abertos. 

O PDA está submetido às diretrizes da INDA e da Parceria para Governo Aberto (OGP). A evolução dos compromissos específicos do MP nos Planos de Ação da INDA e OGP é acompanhada pelos respectivos Comitês Gestores CGINDA e CIGA. 

O quadro a seguir representa a estrutura de governança do PDA. A Autoridade de Monitoramento tem a função de aprovar e acompanhar a execução do PDA no nível estratégico. A Curadoria é responsável pela avaliação da qualidade e persistência do dados publicados. Os responsáveis setoriais são encarregados de coordenar os processos de abertura de dados das respectivas unidades de acordo com o plano de ação do PDA.
![Governança](https://github.com/planejamentoGovBr/PDA-institucional-MP/blob/master/governan%C3%A7a.png)


 ----------
## **V. Monitoramento e Controle**

O PDA será acompanhado por Comitê a ser criado pela autoridade designada pelo art. 40 da Lei de acesso à informação, conforme Decreto 8.777/2016 e constituído por representantes de cada Secretaria e da Ouvidoria.

O comitê reunir-se-á quadrimestralmente e extraordinariamente, sempre que necessário, tendo como atribuição institucionalizada:
1.	Acompanhar o cumprimento das metas, prazos e produtos previstos no plano de ação do PDA;
2.	Avaliar se as ações adotadas estão aderentes a Política de Dados Abertos;
3.	Monitorar a aplicação de critérios de qualidade e acurácia de dados.
4.	Propor alteração ou inciativas voltadas para melhoria dos dados publicados e uma melhor adequação a política pública;
5.	Monitorar o atendimento as regras da INDA e INDE
6.	Elaborar um Relatório Anual reportando o cumprimento dos Planos de Dados Abertos, com recomendações sobre as medidas indispensáveis à implementação e ao aperfeiçoamento da Política de Dados Abertos;
Nas reuniões de acompanhamento do PDA a SETIC informará as estatísticas de publicação e atualização de bases de dados no Portal Brasileiro de Dados Abertos.

### Comunicação e Participação social
A institucionalização do Plano de Dados Abertos, sua governança e revisões serão comunicadas a todo o MP e a sociedade. Dessa forma são envolvidos os setores responsáveis pela publicação dos dados catalogados de modo a disseminar a cultura da transparência e solidificar a publicação de dados na rotina do órgão. Sempre que ocorrer a atualização ou a inserção de dados, ações específicas de comunicação serão realizadas, coordenadas pela ASCOM, de forma a haver ampla divulgação interna e externa ao MP.

Os materiais de divulgação levam em conta os interesses de diferentes segmentos de público: servidores do órgão, gestores públicos, produtores e usuários dos dados, Academia, imprensa, sociedade organizada e cidadão comum (não se vincula a organização ou entidade específica).

O cidadão poderá usar os canais de comunicação do MP para informar o Ministério sobre problemas técnicos ou inconsistências encontradas nos dados publicados, o que será encaminhado à área responsável para tratamento e resposta. Os usuários também podem fazer sugestões para o aperfeiçoamento do PDA. Para fomentar a participação social e, em observância aos princípios da transparência e da publicidade, serão utilizadas as seguintes ferramentas:

1.	Uso de ambiente colaborativo (Wiki) para discussão e repositório de, a exemplo da wiki.gtinda.ibge.gov.br, conteúdo relacionado às entregas e discussões dos grupos de trabalho afetos ao tema;
2.	Promoção de eventos de dados abertos e concurso de aplicativos, fomentado o uso e reuso de dados públicos;
3.	Consultas Públicas;
4.	Criação de trilhas de participação social;
5.	Catalogação das informações em URL fixa no âmbito do MP, além da publicação no www.inde.gov.br e www.dados.gov.br, conforme natureza do dado;
6.	Publicação de relatório anual, contendo estatísticas de consulta aos dados, uso das APIs e acesso aos dados na fonte;
7.	Publicação de notícias e releases no site do MP e divulgação em outros canais, como perfil institucional do Twitter;
8.	Outros espaços de divulgação.

 ----------
## **VI. Plano de Ação**

Esta Sessão esta dividida em 03 Planos de Ações, organizados conforme abaixo:
1.	As ações planejadas para as bases que estão em processo de abertura em formato de dados abertos;
2.	As ações planejadas para as bases que necessitam de ação de melhoria;
3.	As ações relacionadas ao monitoramento e controle do PDA;

* **MP_04 - Dados Referente a Arrecadação Patrimonial**

**Atividade:**
1) Converter em formato para publicação no Portal de Dados Aberto;
2) Publicar na página de dados aberto da SPU;
3) Criar link no Portal de Dados Aberto apontando para o site da SPU.

**Produtos:**
Catálogo com os dados da Arrecadação do Patrimônio da União

**Frequência de Atualização:** Anual
**Meta/Prazo:** Setembro/2018
**Unidade responsável:** SPU
**Ponto Focal:** e-Ouv

* **MP_05 - Dados Referente aos Imóveis Funcionais da União**

**Atividade:**
1) Criar Arquivo dom Informações dos Imóveis e Permissionários;
2) Publicar as informações no Portal de Dados Aberto da SPU;
3) Criar link no Portal de Dados Aberto apontando para o sítio da SPU.

**Produtos:**
Catálogo de dados com informações dos Imóveis da união destinados a residência no DF e dos Permissionários.

**Frequência de Atualização:** Trimestral
**Meta/Prazo:** Setembro/2018
**Unidade responsável:** SPU
**Ponto Focal:** e-Ouv


* **MP_01 - PPA 2016-2019 - Relacionamento com Objetivos de Desenvolvimento Sustentável**

**Atividade:**
1)  Atualização da base de dados original com as informações de 2017;
2)  Formatação dos dados conforme metodologia padronizada estabelecida no PDA;
3)  Conferência dos Dados;
4)  Criação do dicionário de Dados;
5)  Cadastramento no Dados.gov.br

**Produtos:**
1) Catálogo com as informações sobre PPA e sobre ODS em formato aberto
2) Dados dos Atributos do PPA relacionados aos ODS atualizados anualmente, em formato aberto

**Frequência de Atualização:** Anualmente
**Meta/Prazo:** Novembro/2018
**Unidade responsável:** SEPLAN
**Ponto Focal:** e-Ouv

* **MP_02 - Vinculação dos Programas Federais com atributos PPA 2012-2015**

**Atividade:**
1)  Disponibilização do PPA Mais Brasil e da base de dados original em ambiente de teste pela SETIC;
2)  Extração dos dados formatados conforme metodologia padronizada estabelecida no PDA;
3)  Conferência dos Dados;
4)  Criação do dicionário de Dados;
5)  Cadastramento no Dados.gov.br

**Produtos:**
1) Catálogo com as informações sobre PPA e sobre os Programas Federais em formato aberto
2) Dados dos Programas Federais relacionados aos atributos do PPA 2012-2015, em formato aberto

**Frequência de Atualização:** Dados históricos - sem atualização
**Meta/Prazo:** Novembro/2018
**Unidade responsável:** SEPLAN
**Ponto Focal:** e-Ouv

* **MP_03 - Sistema de Transportes de Servidores Públicos - TaxiGov**

**Atividade:**
1)  Definição e seleção dos dados que serão extraídos de acordo com a visão integrada da área de negócio com as demandas da sociedade;
2)  Formatação dos dados conforme metodologia padronizada estabelecida no PDA;
3)  Conferência dos Dados;
4)  Envio para publicação no Dados.gov.br e na INDE, conforme o caso;
5)  Automatização da extração dos dados via API

**Produtos:**
1) Catálogo com os dados dos atributos do TaxiGov em formato aberto
2) Dados dos Atributos do Taxi atualizados mensalmente, em formato aberto
1) Catálogo validado com os dados dos atributos do TaxiGov em formato aberto
2) Dados dos atributos do Taxi atualizados no portal de dados abertos
5) Publicação dos Dados

**Frequência de Atualização:** Mensal
**Meta/Prazo:** Julho/2019
**Unidade responsável:** SEGES
**Ponto Focal:** e-Ouv

* **MP_06 - Dados Referentes aos valores de depreciação de imóveis**

**Atividade:**
1) Criar Arquivo com Informações dos Valores dos Imóveis depreciáveis;
2) Publicar as informações no Portal de Dados Aberto da SPU;
3) Criar link no Portal de Dados Aberto apontando para o sítio da SPU.

**Produtos:**
1. Catálogo de dados dos imóveis e o valor mensal de depreciação do bem.


**Frequência de Atualização:** Mensal
**Meta/Prazo:** Setembro/2018
**Unidade responsável:** SPU
**Ponto Focal:** e-Ouv




<!--stackedit_data:
eyJoaXN0b3J5IjpbNDEzMjA1NjIyLDkxNTE5NTc2OCwtMTA4OD
Y5Mjk4OSwtMzkyMjAyNjcwLC0xODQ0MDQzMzU2LC0xNDMwNjcz
MjU4LC0zMzA1NjI5MDAsLTEwMDg4NzA3OTQsLTE1NjcyNDg3NT
UsLTE1NTY1MTU0MTksLTM3MTEyMDMyLC04MzY5ODg4NCwxNTE4
MDIxNzcxXX0=
-->