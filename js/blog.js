let categorias = {};
let pagias_artigos = [];

// Carrega as categorias do Arquivo Json para estruturar o sumário de categorias do Blog
async function carregar_Dados() {
    const resposta = await fetch('/static/blog_estrutura/categorias.json');
    if (!resposta.ok) {
        throw new Error('Erro na requisição');
    }
    const json = await resposta.json();
    categorias = json;
    return json;
}

async function carregar_Artigos(categoria) {
    const resposta = await fetch('/static/blog_estrutura/' + categoria + ".json");
   
    if (!resposta.ok) {
        throw new Error('Erro na requisição');
    }
    const json = await resposta.json();
    return json;
}

async function capturar_artigo_categoria(categoria) {
    const resposta = await fetch('/static/blog_estrutura/' + categoria + ".json");
    if (!resposta.ok) {
        throw new Error('Erro na requisição');
    }
    const json = await resposta.json();
    return json;
}

//Verifica o Tipo de categoria da URL para chamar a estrutura padrão do blog ou categorias especificas
async function verificar_url() {
    // Cria um objeto com os parâmetros da URL atual
    const parametros = new URLSearchParams(window.location.search);

    // Captura o valor do parâmetro 'categoria'
    const categoria_url = parametros.get('categoria');
    if (categoria_url === null) {
        await construir_index_blog()
    } else {
        await construir_index_blog_categoria(categoria_url)
        let teste = await carregar_Artigos(categoria_url)
    }
}

async function Montar_Menu_Categorias() {
    await carregar_Dados();
    document.getElementById("menu_categorias").innerHTML = "teste";
    let estrutura = '';
    const host = window.location.origin;
    for (let key in categorias) {
        estrutura += `
            <li class="nav-item">
                <a class="nav-link"
                    href="${host}/paginas/blog/blog_index.html?categoria=${categorias[key]}">
                    ${categorias[key].toUpperCase()}
                </a>
            </li>
            
        `
    }

    document.getElementById("menu_categorias").innerHTML = estrutura;
}

// Inicia a Página
async function iniciar() {
    await Montar_Menu_Categorias()

    await verificar_url();

}

async function construir_index_blog() {
    document.getElementById("titulo_pagina").innerText = "Blog do Sistema Venturo";
    await montar_paginacao()

    let artigos = [];

    for (let i in categorias) {
        retorno = await carregar_Artigos(categorias[i])
        
        if (retorno[0] != undefined){
            retorno[0].categoria = categorias[i]
            artigos.push(retorno[0])
        }
    }

    //Ordena os artigos por data de inserção
    const arrayOrdenado = artigos.sort((a, b) => {
        const [diaA, mesA, anoA] = a.data.split("-").map(Number);
        const [diaB, mesB, anoB] = b.data.split("-").map(Number);

        const dataA = new Date(anoA, mesA - 1, diaA); // mês é zero-based no Date
        const dataB = new Date(anoB, mesB - 1, diaB);

        return dataB - dataA; // para ordenar da maior para a menor
    });

    let render = ''

    for (let i in arrayOrdenado) {
        render += gerar_estrutura_index(arrayOrdenado[i], arrayOrdenado[i]['categoria'])
    }

    document.getElementById("corpo_lista").innerHTML = render

}

async function construir_index_blog_categoria(categoria) {
    document.getElementById("titulo_pagina").innerText = `Artigos sobre ${categoria}`;
    const artigos = await capturar_artigo_categoria(categoria)
    for (let i = 0; i < artigos.length; i += 10) {
        const pagina = artigos.slice(i, i + 10);
        pagias_artigos.push(pagina);
    }
    await montar_paginacao()
    renderizar_pagina(0)
}

function renderizar_pagina(numero) {
    let render = '';

    for (let i in pagias_artigos[numero]) {
        let artigo = pagias_artigos[numero][i];
        render += gerar_estrutura(artigo)
    }

    document.getElementById("corpo_lista").innerHTML = render
}


//Construi a Páginação da Página
async function montar_paginacao() {
    const Paginacao = document.getElementById("paginacao");

    if (pagias_artigos.length <= 1) {
        Paginacao.innerHTML = `<li class="page-item"><a class="page-link" href="#">1</a></li>`;
    } else {
        let estrutura = ''
        for (let chave in pagias_artigos) {
            estrutura += `<li class="page-item"><a onclick="renderizar_pagina(${chave})" class="page-link" href="#">${parseInt(chave) + 1}</a></li>`;
        }
        Paginacao.innerHTML = estrutura;
    }

}

function estaDentroDeUmaSemanaAtras(dataString) {
    const [dia, mes, ano] = dataString.split('-').map(Number);
    const dataInformada = new Date(ano, mes - 1, dia);

    const hoje = new Date();
    const seteDiasAtras = new Date();
    seteDiasAtras.setDate(hoje.getDate() - 7);

    return dataInformada >= seteDiasAtras && dataInformada <= hoje;
}

function gerar_estrutura(objeto) {
    const host = window.location.origin;

    let badge_novo = ''

    const dataArtigo = objeto.data;
    if (estaDentroDeUmaSemanaAtras(dataArtigo)) {
        badge_novo = '<span class="badge bg-success">Novo</span>';
    }

    const Estrutura = `
        <li class="list-group-item">
            <div class="row">
                <div class="col-sm-4">
                    <img src="${host}/static/imagens/blog/${objeto.thumb}.webp"
                        class="img-fluid mx-auto d-block rounded" alt="Cinque Terre">
                    <br>
                </div>
                <div class="col-sm-8">
                    <h4 class="card-title">${objeto.titulo} ${badge_novo}</h4>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg> ${objeto.autor}<br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                            <path
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg> ${objeto.data}
                    </p>
                    <p class="card-text">
                        ${objeto.descricao}
                    </p>
                    <a href="${host}/paginas/blog/artigos/${objeto.nome_arquivo}.html" class="btn btn-outline-secondary">Continue Lendo...</a>
                </div>
                </div>
        </li>
    `
    return Estrutura
}

function gerar_estrutura_index(objeto, categoria) {
    const host = window.location.origin;
    let badge_novo = ''

    const dataArtigo = objeto.data;
    if (estaDentroDeUmaSemanaAtras(dataArtigo)) {
        badge_novo = '<span class="badge bg-success">Novo</span>';
    }

    const Estrutura = `
        <li class="list-group-item"> 
            <div class="row">
                <div class="col-sm-4">
                    <img src="${host}/static/imagens/blog/${objeto.thumb}.webp"
                        class="img-fluid mx-auto d-block rounded" alt="Cinque Terre">
                    <br>
                </div>
                <div class="col-sm-8">
                    <h4 class="card-title">${objeto.titulo} ${badge_novo}</h4> 
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg> ${objeto.autor}<br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                            <path
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg> ${objeto.data}
                    </p>
                    <p class="card-text">
                        ${objeto.descricao}
                    </p>
                    <p>
                        <kbd>${categoria.toUpperCase()}</kbd>
                    </p>
                    <a href="${host}/paginas/blog/artigos/${objeto.nome_arquivo}.html" class="btn btn-outline-secondary">Continue Lendo...</a>
                </div>
                </div>
        </li>
    `
    return Estrutura
}



iniciar();
