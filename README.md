O Plano de Dados Abertos do Ministério do Planejamento está disponível em http://plano.dados.planejamento.gov.br. A escolha em publicar o **PDA em formato HTML navegável** e de versioná-lo no Github tem como objetivo facilitar a edição, a publicação, a busca e compartilhamento deste documento, além de garantir nativamente o rastreamento das modificações.

O PDA é editado em formato Markdown, um estilo de formatação de documentos fácil de aprender, que preserva a legibilidade e é automaticamente convertido em HTML. Esta arquitetura de *escrita e publicação de documentos digitais* foi inspirada no [PDA do Ministério da Cultura](http://plano.dados.cultura.gov.br/).


#### Versões do documento

A escrita do PDA é controlada por repositório [Git](https://pt.wikipedia.org/wiki/Git) público, proporcionando transparência e rastreabilidade nas edições realizadas. Isso possibilita a atualização do documento (ex.: correção gramatical, atualização de status, ou mesmo o incremento do conteúdo) sem obscuridade, criando mais possibilidades na gestão do documento. Dessa maneira o documento se torna **um artefato digital dinâmico**, bem mais poderoso que um PDF estático.

Inspirado em práticas de desenvolvimento de software, convencionamos a utilizaço de uma adaptação do [Senver](http://semver.org/) como padrão para a definição das versões do documento. Caso você realize alterações no documento, atente para a seguinte instrução:

Dado um número de versão `v[MAJOR].[MINOR].[PATCH]` (ex.: v3.0.3). 

* Incremente o MAJOR sempre que você publicar um novo plano,
* Incremente o MINOR sempre que você adicionar novas ações ao plano, e
* Incremente o PATCH caso você realize uma correção ou atualização de alguma informação, ou qualquer outro tipo de modificação que não se encaixam nos casos anteriores (major e minor).


#### Sobre o documento e sua manutenção

O arquivo principal é o `plano-de-dados-abertos.md` que contém todo o conteúdo do plano escrito em formato [Markdown](https://daringfireball.net/projects/markdown/). O site em HTML é uma página estática e é gerada com uso de [Jekyll](https://jekyllrb.com/), um conversor de Markdown para HTML. O site está hospedado no Github-pages utilizando a branch [gh-pages](https://github.com/planejamentoGovBr/PDA-institucional-MP/tree/gh-pages) deste repositório.

Para subir o ambiente de desenvolvimento é necessário possuir o Docker e o Docker-Compose instalados. Após clonar este repositório, execute o seguinte comando:

`$ docker-compose up`

Em seguida acesse no navegador o endereço `http://127.0.0.1/PDA-institucional-MP/`.

==Incluir trecho sobre como atualizar manualmente==
