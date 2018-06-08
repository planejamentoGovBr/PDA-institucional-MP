## Sobre o documento e sua manutenção

O PDA do Ministério do Planejamento está disponível em http://plano.dados.planejamento.gov.br. A escolha em publicar o **PDA em formato HTML navegável** tem como objetivo facilitar a edição, a publicação, a busca e compartilhamento deste documento, além de garantir nativamente o rastreamento das modificações.

A página do PDA é construída com o uso do CMS WordPress e um [plugin-WP](https://github.com/culturagovbr/WP-MarkDown-Converter) que converte automaticamente o documento Markdown em HTML. O Ministério da Cultura desenvolveu este plugin e também publicou seu [PDA em html](http://plano.dados.cultura.gov.br/), inspirando-nos em copiar este modelo.

### Versionamento do documento
Inspirado em práticas de desenvolvimento de software, convencionamos a utilizaço de uma adaptação do [Senver](http://semver.org/) como padrão para a definição das versões do documento, da seguinte forma:

Dado um número de versão v[\_MAJOR_].[\_MINOR_].[\_PATCH_] (ex.: v3.0.3)...

* Incremente o MAJOR sempre que você publicar um novo plano,
* Incremente o MINOR sempre que você adicionar novas ações ao plano, e
* Incremente o PATCH caso você realize uma correção ou atualização de alguma informação, ou qualquer outro tipo de modificação que não se encaixam nos casos anteriores (major e minor).
