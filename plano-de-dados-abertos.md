**Plano de Dados Abertos do Ministério do Planejamento**

----------

Versão [3.0.0](https://github.com/planejamentogovbr/PDA-institucional-MP/releases/xxxxxx) de julho/18 - Vigência 2018/2019


## **Sumário**

[TOC]


----------

## **Apresentação**
O Plano de Dados Abertos (PDA) é o documento orientador para as ações de implementação e promoção de abertura de dados no Ministério do Planejamento, Desenvolvimento e Gestão (MP), obedecendo aos padrões mínimos de qualidade, de forma a facilitar o entendimento e a reutilização das informações. É ele quem organiza o planejamento referente à implantação e racionalização dos processos de publicação de dados abertos.

Sua elaboração vem ao encontro do disposto na [Lei de Acesso à Informação (LAI)](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm), na [Instrução Normativa SLTI nº 4](http://dados.gov.br/paginas/instrucao-normativa-da-inda), de 13 de abril de 2012, que institui a Infraestrutura Nacional de Dados Abertos, no Decreto Presidencial nº 6.666, de 27 de novembro de 2008, que institui a Infraestrutura Nacio­nal de Dados Espaciais, bem como dos compromissos assumidos pelo Brasil no âmbito do 3º Plano de Ação Nacional sobre Governo Aberto, entre outros normativos que abordam o tema de transparência.

Considerando a existência de cartilhas e modelos que dispõem sobre arquitetura, ontologias e aspectos técnicos relacionados à formatação operacional para a catalogação e publicação de dados, este documento visa orientar o planejamento para a abertura de dados, citando a literatura e materiais disponí­veis sobre o ferramental técnico.

Nessa trilha, são detalhados os principais normativos aplicáveis ao tema, assim como o cenário institucional que possui influência direta no conteúdo do documento, tais como: o Planejamento Estratégico Institucional (PEI), Planejamento Estratégico de Tecnologia da Informação (PETI) e o Plano Diretor de Tecnologia da Informação (PDTI) ambos do MP.

A partir das diretrizes estratégicas, este Plano de Dados Abertos preve no seu Plano de Ação, as ações necessárias para o alcance da sustentabilidade dos resultados pretendidos, estabelecendo a matriz de responsabilidade, a periodicidade e os responsáveis pela atualização constante das bases de dados; além de prever os canais de comunicação e as formas de interação com a sociedade, bem como a matriz de governança e obediência às metodologias e padrões para a correta catalogação e publicação dos dados a serem disponibilizados.

O presente Plano, referente ao Biênio 2018-2019 e com edição registrada para Julho/2018, é a atualização do Plano de Ações do PDA anterior, referente ao Biênio de 2016-2017. Além disso, foi revisado quanto ao cumprimento das metas anteriores e a inserção de novos dados que serão abertos para a sociedade.

O Plano possui periodicidade bienal, com eventuais novas edições, dentro dessa mesma periodicidade, identificadas no mês de sua liberação, as quais, podem ser motivadas pela revisão do _status_ das metas ou novas inserções de abertura de dados. Esse será divulgado à sociedade por meio de sua publicação no Portal Brasileiro de Dados Abertos e no sítio eletrônico do MP.

O Plano foi construído no 1º. Semestre de 2018, de forma colaborativa, envolvendo todas as unidades do MP e considerando os princípios da publicidade e da transparência da administração pública. Para se estabelecer priorização dos conjuntos de dados que serão disponibilizados foram considerados o grau de relevância das informações para o cidadão, os compromissos assumidos pelo Ministério no PDA anterior, além das competências e os conjuntos de dados efetivamente mantidos pelo MP.

O cidadão poderá usar o sistema e-Ouv, por meio do endereço eletrônico: _https://sistema.ouvidorias.gov.br/publico/Manifestacao/RegistrarManifestacao.aspx_, para relatar problemas técnicos ou inconsistên­cias, devendo a manifestação ser encaminhada à área responsável para resposta e solução, conforme o caso. Os usuários também podem fazer sugestões que serão referência para o aperfeiçoamento e as revisões do PDA.

## **I) Introdução**

Na sociedade em rede, os dados produzidos pelos cidadãos, ou em seu nome, são a força motriz da economia e da nação — o governo tem a responsabilidade de tratar esta informação como precioso recurso nacional. Os cidadãos, hoje,...

Os principais normativos aplicáveis para a confecção deste Plano são:

- A [Lei nº 12.527](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm), de 18 de Novembro de 2011, Lei de Acesso à Informação – LAI;
- O [Decreto nº 8.777,](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/D8777.htm) de 11 de maio de 2016, que institui a Política de Dados Abertos do Poder Executivo Federal;
- O disposto no art. 48 da [Lei Complementar nº 101](http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp101.htm), de 4 de maio de 2000, que determina ao Poder Público a adoção de instrumentos de transparência na gestão fiscal  em meios eletrônicos de acesso público às informações orçamentárias e prestações de contas;
- O [Decreto Presidencial nº 6.666](http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6666.htm), de 27 de novembro de 2008, que instituiu a criação da Infraestrutura Nacional de Dados Espaciais – INDE, e determina que o compartilhamento e disseminação dos dados geoespaciais e seus metadados é obrigatório para todos os órgãos e entidades do Poder Executivo Federal, salvo os protegidos por sigilo;
- [Decreto s/nº de 15 de setembro de 2011](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/dsn/dsn13117.htm), que institui o Plano de Ação Nacional sobre Governo Aberto, o qual estabelece o compromisso do governo de implantar a Infraestrutura Nacional de Dados Abertos (INDA);
- A [Instrução Normativa nº 4 de 13 de abril de 2012](http://dados.gov.br/paginas/instrucao-normativa-da-inda), que cria a INDA e estabelece conceitos referentes a dado, informação, dado público, formato aberto, licença aberta, dados abertos e metadado;
- O Plano de Ação da INDA , que institui a necessidade de os órgãos de instituírem seus respectivos Planos de Abertura de Dados, com vistas a uma Política Nacional de Dados Abertos, e institui os elementos mínimos do documento, bem como orienta que a abertura de dados deve observar a relevância para o cidadão;
- O Plano de Ação Nacional sobre Governo Aberto (no âmbito da Parceria para Governo Aberto, Open Government Partnership - OGP);
- Os parâmetros estabelecidos na e-PING - arquitetura de interoperabilidade do governo eletrônico, e os vocabulários e ontologias de Governo Eletrônico e-VoG e e-MAG - Modelo de Acessibilidade de Governo Eletrônico (instituído pela Portaria nº 03, de 07 de Maio de 2007);
- Os parâmetros atuais ou que venham a ser estabelecidos no âmbito de Planejamento Estratégico Institucional ou setorial, bem como os relacionados às áreas de tecnologia da informação (PETI e PDTI), sob orientação da [Estratégia de Governança Digital – EGD](https://www.governoeletronico.gov.br/egd/estrategia-de-governanca-digital).

### *Objetivo Geral*

A abertura dos dados do Ministério da Cultura, de maneira a garantir a transparência das políticas públicas realizadas pelo Sistema MinC, visa estimular a inovação e a geração de novos serviços digitais para e pela sociedade, contribuindo com a consolidação do um governo mais aberto.

### *Objetivos Específicos*

 - Identificar e priorizar a abertura de dados com maior grau de relevância para o cidadão;
 - Incrementar os processos de transparência e de acesso a informações públicas;
 - Fornecer dados atualizados implementando as melhores práticas de publicação de dados e por meio de padrões consolidados;
 - Estimular a interoperabilidade informacional entre instituições públicas;
 - Reduzir a assimetria de informações entre a sociedade e o governo;
 - Fomentar a participação social e a inovação tecnológica;
 - Estimular o crescimento da economia pela produção de novos serviços digitais e a reutilização dos recursos informacionais de caráter público.
 
 ----------

## **II) Dados para Abertura**

Para definição dos dados que serão abertos na vigência deste PDA, foi realizada uma dinâmica com a participação de representantes de cada secretaria do Ministério da Cultura. A dinâmica consistiu em formar **grupos heterogêneos com representantes das secretarias**, aos quais foram apresentados um inventário com todas as bases de dados do Órgão, acompanhadas de uma pequena descrição, para que fossem priorizadas utilizando os seguintes critérios:

- Relevância para a sociedade
- Pincipais solicitações por intermédio da LAI
- Obrigações legais
- Alinhamento estratégico
- Facilidade para abertura

Como resultado desta dinâmica obtivemos a seguinte tabela:

| Conjunto de Dados/Critérios | Importância para cidadão  | Obrigação Legal | Alinhamento  Estratégico | Facilidade de abertura | Total |
|--:|:--:|:--:|:--:|:--:|:--:|
| **SALIC - Lei Rouanet** | 2 | 2 | 2 | 1 | **7** |
| **Vale Cultura** | 2 | 2 | 2 | 1 | **7** |
| **Mapa da Cultura - SNIIC** | 1 | 1 | 2 | 2 | **6** |
| **Rede Cultura Viva** | 1 | 1 | 2 | 2 | **6** |
| **Sistema Nacional de Bibliotecas Públicas** | 1 | 1 | 2 | 2 | **6** |
| **Plataforma Museus BR** | 1 | 1 | 2 | 2 | **6** |
| **Sistema Nacional de Cultura - SNC** | 1 | 1 | 2 | 2 | **6** |
| **Cadastro de Centros de Artes e Esportes Unificados - CEUS** | 1 | 1 | 2 | 1 | **5** |
| **Processo Eleitoral CNPC - 2015** | 1 | 1 | 2 | 1 | **5** |

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMyOTQ5NTQ3Myw2ODYwNTY2NjhdfQ==
-->