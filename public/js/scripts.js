jQuery(document).ready(function ($) {

    var modal = $('<div id="modal" style="display:none;"/>');
    modal.css({
        'position':'fixed',
        'top':'0px',
        'z-index':'1',
        'width':$(window).width(),
        'height':$(window).height(),
        'background':'rgb(0,0,0)',
        'background':'transparent\9',
        'background-color':'rgba(0,0,0,0.25)',
        'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#7fcccccc,endColorstr=#7fcccccc)'
    });
    var carregando = $('<div id="carregando" style="position: fixed; top: 40%; left: 40%; width: 20%; height: 20%;">' +
        '<div class="blob blob-0"></div>' +
        '<div class="blob blob-1"></div>' +
        '<div class="blob blob-2"></div>' +
        '<div class="blob blob-3"></div>' +
        '<div class="blob blob-4"></div>' +
        '<div class="blob blob-5"></div>' +
        '</div>');
    $('body').prepend(modal.append(carregando));

    $('body').on('click', '.download_as_pdf', function (e) {
        e.preventDefault();
        $('#modal').fadeIn('fast', function(){
            var docDefinition = {},
                markdownBodyHtml = $('#main_content > *');

            docDefinition.content = [];

            // Capa do documento
            docDefinition.content.push({
                text: 'Plano de dados abertos do Ministério do Planejamento, Desenvolvimento e Gestão',
                style: ['cover'],
                pageBreak: 'after'
            });

            // Conversão das tags HTML (estilos)
            markdownBodyHtml.each(function (i, el){
                // console.log(el);
                switch( el.tagName ){
                    case 'H1':
                        docDefinition.content.push({ text: el.innerText, style: ['header', 'default'] });
                        break;
                    case 'H2':
                        docDefinition.content.push({ text: el.innerText, style: ['header2', 'default'] });
                        break;
                    case 'H3':
                        docDefinition.content.push({ text: el.innerText, style: ['header3', 'default'] });
                        break;
                    case 'H4':
                        docDefinition.content.push({ text: el.innerText, style: ['header4', 'default'] });
                        break;
                    case 'H5':
                        docDefinition.content.push({ text: el.innerText, style: ['header5', 'default'] });
                        break;
                    case 'H6':
                        docDefinition.content.push({ text: el.innerText, style: ['header6', 'default'] });
                        break;
                    case 'UL':
                        var lis = [];
                        var toc = ( $(el).hasClass('toc') ) ? true : false;
                        $(el).find('> li').each(function(){
                            if( toc ){
                                lis.push( $(this).find('> a').text() );
                            }else{
                                lis.push( $(this).text() );
                            }
                            if( $(this).find('> .submenu').length ){
                                var submenu = {};
                                submenu.ul = [];
                                $(this).find('> .submenu > li').each(function(){
                                    if( toc ){
                                        submenu.ul.push( $(this).find('> a').text() );
                                    }else{
                                        submenu.ul.push( $(this).text() );
                                    }

                                    // Granchildren itens
                                    if( $(this).find('> .submenu').length ){
                                        var granchildren = {};
                                        granchildren.ul = [];
                                        $(this).find('> .submenu > li').each(function(){
                                            if( toc ){
                                                granchildren.ul.push( $(this).find('> a').text() );
                                            }else{
                                                granchildren.ul.push( $(this).text() );
                                            }
                                        });
                                        submenu.ul.push( granchildren );
                                    }

                                });
                                lis.push( submenu );
                            }
                        });
                        docDefinition.content.push({
                            ul: lis,
                            style: ['list', 'default']
                        });
                        break;
                    case 'P':
                        docDefinition.content.push({ text: el.innerText, style: ['paragraph', 'default'] });
                        break;
                    case 'TABLE':
                        var ths = [],
                            tds = [],
                            table = [];
                        $(el).find('th').each(function(){
                            ths.push( $(this).text() );
                        });
                        table.push(ths);

                        $(el).find('tbody > tr').each(function(){
                            var tds = [];
                            $(this).find(' > td').each(function(){
                                tds.push( $(this).text() );
                            });
                            table.push(tds);
                        });
                        docDefinition.content.push({
                            table: {
                                headerRows: 1,
                                body: table
                            },
                            style: 'table'
                        });
                        break;
                    case 'A':
                        docDefinition.content.push({ text: el.innerText, style: ['link', 'default'] });
                        break;
                    default:
                        docDefinition.content.push({ text: el.innerText, style: 'default' });
                }
            });

            docDefinition.styles = {
                default: {
                    color: '#666',
                    margin: [0, 5],
                    lineHeight: 1.3
                },
                cover: {
                    fontSize: 50,
                    color: '#29499c',
                    marginTop: 225,
                    bold: true
                },
                header: {
                    color: '#333',
                    fontSize: 26,
                    margin: [0, 20],
                    bold: true,
                    lineHeight: 1.2
                },
                header2: {
                    color: '#333',
                    fontSize: 24,
                    margin: [0, 20],
                    borderBottom: '1px solid #eaecef',
                    bold: true,
                    lineHeight: 1.2
                },
                header3: {
                    color: '#333',
                    fontSize: 22,
                    margin: [0, 20],
                    bold: true,
                    lineHeight: 1.2
                },
                header4: {
                    color: '#333',
                    fontSize: 20,
                    margin: [0, 20],
                    bold: true,
                    lineHeight: 1.2
                },
                header5: {
                    color: '#333',
                    fontSize: 18,
                    margin: [0, 20],
                    bold: true,
                    lineHeight: 1.2
                },
                header6: {
                    color: '#333',
                    fontSize: 16,
                    margin: [0, 20],
                    bold: true,
                    lineHeight: 1.2
                },
                paragraph: {
                    marginBottom: 10,
                    lineHeight: 1.4
                },
                list: {
                    marginBottom: 20,
                    lineHeight: 1.4,
                    color: '#333',
                    borderColor: '#dfe2e5'
                },
                link: {
                    color: '#29499c',
                    italics: true,
                    textDecoration: 'underline'
                }
            };

            docDefinition.footer = function(currentPage, pageCount) { return {
                text: (currentPage !== 1 ) ? currentPage.toString() : '',
                alignment: 'center',
                margin: [0, 15]
            } };

            docDefinition.pageMargins = [ 60, 75 ];

            pdfMake.createPdf(docDefinition).download('plano-dados.pdf');
            $('#modal').fadeOut('fast');
        });
    });

    if( $('.download_as_pdf').length ){
        var clone = $('.download_as_pdf').clone();
        console.log(clone);
        $('#main-content .page').prepend(clone.addClass('download_as_pdf--header'));
    }

});