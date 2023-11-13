let versao_ficha = "01-exordio-venturo" 


// Função para Adicionar Pericias na Pagian
function add_pericia(pericia = false) {
    let minhaDiv = document.getElementById("pericias-container");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("row", "border-bottom", "border-2");
    container_pericia.style.padding = "5px";

    let estrutura = null;
    // Verifica se estamos adicionando uma nova pericia vazia ou existente:
    if (pericia != false) {
        // Defina o conteúdo desse elemento
        estrutura = `<div class="col-sm-3">
        <label class="form-label mx-auto">Nome da Pericia</label>
        <input type="text" class="form-control-plaintext" placeholder="Nome da Pericia" name="nome-pericia" value="${pericia.nome}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Combo</label>
        <input type="text" class="form-control-plaintext" name="combo-pericia" value="${pericia.combo}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Nível</label>' +
        <input type="number" min="0" max="5" class="form-control-plaintext" name="nivel-pericia" value="${pericia.nivel}">
        </div>
        <div class="col-sm-6">
        <label class="form-label mx-auto">Especialização</label>
        <input type="text" class="form-control-plaintext" placeholder="Nome da Especialização" name="especializacao-pericia" value="${pericia.especializacao}">
        </div>
        <div class="col-sm-1">
        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
        </div>`
    } else {
        // Defina o conteúdo desse elemento
        estrutura = `<div class="col-sm-3">` +
            '<label class="form-label mx-auto">Nome da Pericia</label>' +
            '<input type="text" class="form-control-plaintext" placeholder="Nome da Pericia" name="nome-pericia">' +
            '</div>' +
            '<div class="col-sm-1">' +
            '<label class="form-label mx-auto">Combo</label>' +
            '<input type="text" class="form-control-plaintext" name="combo-pericia">' +
            '</div>' +
            '<div class="col-sm-1">' +
            '<label class="form-label mx-auto">Nível</label>' +
            '<input type="number" min="0" max="5" class="form-control-plaintext" name="nivel-pericia">' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<label class="form-label mx-auto">Especialização</label>' +
            '<input type="text" class="form-control-plaintext" placeholder="Nome da Especialização" name="especializacao-pericia">' +
            '</div>' +
            '<div class="col-sm-1">' +
            `<button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>` +
            '</div>';
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para Adicionar Habilidades na Pagian
function add_habilidade(habilidade = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-habilidade");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow");
    let estrutura = null;

    if (habilidade != false) {
        estrutura = `<div class="row">
        <div class="col-sm-8">
        <input type="text" class="form-control-plaintext" placeholder="Nome da Habilidade" name="nome-habilidade" value="${habilidade.nome}">
        </div>
        <div class="col-sm-3">
        <div class="input-group mb-3">
        <span class="input-group-text">Nível</span>
        <input type="number" min="0" max="5" class="form-control"name="nivel-habilidade" value="${habilidade.nivel}">
        </div>
        </div>
        <div class="col-sm-1">
        <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>

        </div>
        </div> `;
    } else {
        // Defina o conteúdo desse elemento
        estrutura = `<div class="row">
        <div class="col-sm-8">
        <input type="text" class="form-control-plaintext" placeholder="Nome da Habilidade" name="nome-habilidade">
        </div>
        <div class="col-sm-3">
        <div class="input-group mb-3">
        <span class="input-group-text">Nível</span>
        <input type="number" min="0" max="5" class="form-control"name="nivel-habilidade">
        </div>
        </div>
        <div class="col-sm-1">
        <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>

        </div>
        </div> `;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para Adicionar Aquisições na Pagian
function add_aquisicoes(aquisicao = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-aquisicoes");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow");
    let estrutura = null;

    if (aquisicao != false) {
        estrutura = `<div class="row">
            <div class="col-sm-8">
            <input type="text" class="form-control-plaintext" placeholder="Nome da Aquisição" name="nome-aquisicao" value="${aquisicao.nome}">
            </div>
            <div class="col-sm-3">
            <div class="input-group mb-3">
            <span class="input-group-text">Nível</span>
            <input type="number" min="0" max="5" class="form-control" name="nivel-aquisicao" value="${aquisicao.nivel}">
            </div>
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>

            </div>
            </div>`;
    } else {
        estrutura = `<div class="row">
            <div class="col-sm-8">
            <input type="text" class="form-control-plaintext" placeholder="Nome da Aquisição" name="nome-aquisicao">
            </div>
            <div class="col-sm-3">
            <div class="input-group mb-3">
            <span class="input-group-text">Nível</span>
            <input type="number" min="0" max="5" class="form-control" name="nivel-aquisicao">
            </div>
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>

            </div>
            </div>`;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para Adicionar recursos na Pagian
function add_recurso(recurso = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-recursos");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");


    let estrutura = null;

    if (recurso != false) {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col-sm-6">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da Moeda" name="recursos-nome" value="${recurso.moeda}">
            </div>
            <div class="col-sm-6">
            <label class="form-label mx-auto">Valor</label>
            <input type="text" class="form-control-plaintext" placeholder="0" name="recursos-valor" value="${recurso.valor}">
            </div>
            </div>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col-sm-6">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da Moeda" name="recursos-nome">
            </div>
            <div class="col-sm-6">
            <label class="form-label mx-auto">Valor</label>
            <input type="text" class="form-control-plaintext" placeholder="0" name="recursos-valor">
            </div>
            </div>`;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para adicionar Vantagens e Desvantagens
function add_vantagens_desvantagens(vantagem = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-vantagem-desvantagem");

    //Contar os elementos dentro da div para gerar um id:
    let id_pericia = 'id-pericia-' + minhaDiv.childElementCount;


    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("row", "border-bottom", "border-2");
    container_pericia.style.padding = "5px";


    let estrutura = null;

    if (vantagem != false) {
        estrutura = `<div class="col-sm-3">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da vantagem ou desvantagem" name="nome-vantagem-input" value="${vantagem.nome}">
            </div>
            <div class="col-sm-1">
            <label class="form-label mx-auto">Valor</label>
            <input type="text" class="form-control-plaintext" name="valor-vantagem-input" value="${vantagem.valor}">
            </div>
            <div class="col-sm-7">
            <label class="form-label mx-auto">Descrição</label>
            <input type="text" class="form-control-plaintext" placeholder="Descrição da Vantagem ou Desvantagem" name="descricao-vantagem-input" value="${vantagem.descricao}">
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </div>`;
    } else {
        estrutura = `<div class="col-sm-3">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da vantagem ou desvantagem" name="nome-vantagem-input">
            </div>
            <div class="col-sm-1">
            <label class="form-label mx-auto">Valor</label>
            <input type="text" class="form-control-plaintext" name="valor-vantagem-input">
            </div>
            <div class="col-sm-7">
            <label class="form-label mx-auto">Descrição</label>
            <input type="text" class="form-control-plaintext" placeholder="Descrição da Vantagem ou Desvantagem" name="descricao-vantagem-input">
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </div>`;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para Adicionar idiomas na Pagian
function add_idiomas(idioma = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-idiomas");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (idioma != false) {

        estrutura = `<div class="row">
            <div class="col-sm-11">
            <input type="text" class="form-control-plaintext" placeholder="Nome do Idioma" name="idioma-input" value="${idioma}">
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>
            </div>
            </div>`;
    } else {
        estrutura = `<div class="row">
            <div class="col-sm-11">
            <input type="text" class="form-control-plaintext" placeholder="Nome do Idioma" name="idioma-input">
            </div>
            <div class="col-sm-1">
            <button type="button" onclick="remover_habilidade(this)" class="btn btn-danger">-</button>
            </div>
            </div>`;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

// Função para adicionar Armas de Fogo na Página:
function add_arma_fogo(armas = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-armas-fogo");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (armas != false) {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">Nome da Arma</span>
            <input type="text" class="form-control" name="arma-fogo-nome" value="${armas.nome}">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Bonus Racial</span>
            <input type="text" class="form-control" placeholder="Bônus Racial de Força para erguer a arma" name="arma-fogo-bonus-racial" value="${armas.bonus_racial}">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Capacidade</span>
            <input type="text" class="form-control" placeholder="Nível do Atributo Força" name="arma-fogo-capacidade" value="${armas.capacidade}">
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Dano</span>
            <input type="number" class="form-control" name="arma-fogo-dano" value="${armas.dano}">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Distância</span>
            <input type="number" class="form-control"
            placeholder="Valor em Metros" name="arma-fogo-distancia" value="${armas.distancia}">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Carga</span>
            <input type="text" class="form-control"
            placeholder="Carga" name="arma-fogo-carga" value="${armas.carga}">
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">Rec</span>
            <input type="text" class="form-control" placeholder="Tempo de Recarga da arma" name="arma-fogo-recarga" value="${armas.recarga}">
            </div>
            </div>
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">NdA</span>
            <input type="text" class="form-control" placeholder="Nível de Dificuldade" name="arma-fogo-nda" value="${armas.nda}">
            </div>
            </div>
            </div>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">Nome da Arma</span>
            <input type="text" class="form-control" name="arma-fogo-nome">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Bonus Racial</span>
            <input type="text" class="form-control" placeholder="Bônus Racial de Força para erguer a arma" name="arma-fogo-bonus-racial">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Capacidade</span>
            <input type="text" class="form-control" placeholder="Nível do Atributo Força" name="arma-fogo-capacidade">
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Dano</span>
            <input type="number" class="form-control" name="arma-fogo-dano">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Distância</span>
            <input type="number" class="form-control"
            placeholder="Valor em Metros" name="arma-fogo-distancia">
            </div>
            </div>
            <div class="col-sm-4">
            <div class="input-group mb-3">
            <span class="input-group-text">Carga</span>
            <input type="text" class="form-control"
            placeholder="Carga" name="arma-fogo-carga">
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">Rec</span>
            <input type="text" class="form-control" placeholder="Tempo de Recarga da arma" name="arma-fogo-recarga">
            </div>
            </div>
            <div class="col">
            <div class="input-group mb-3">
            <span class="input-group-text">NdA</span>
            <input type="text" class="form-control" placeholder="Nível de Dificuldade" name="arma-fogo-nda">
            </div>
            </div>
            </div>`;
    }

    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_arma_branca(armas = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-armas-brancas");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (armas != false) {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col">
            <label class="form-label mx-auto">QtD</label>
            <input type="text" class="form-control-plaintext" placeholder="0" name="armas-branca-quantidade" value="${armas.quantiade}">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Nome da Arma</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da Arma" name="armas-branca-nome" value="${armas.nome}">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Bônus Racial</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-bonus-racial" value="${armas.bonus}">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Armas Brancas</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-nivel" value="${armas.nivel}">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Dano</label>
            <input type="number" class="form-control-plaintext" placeholder="Valor" name="armas-branca-dano" value="${armas.dano}">
            </div>
            <div class="col">
            <label class="form-label mx-auto">NdA</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-nda" value="${armas.nda}">
            </div>
            </div>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col">
            <label class="form-label mx-auto">QtD</label>
            <input type="text" class="form-control-plaintext" placeholder="0" name="armas-branca-quantidade">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Nome da Arma</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome da Arma" name="armas-branca-nome">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Bônus Racial</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-bonus-racial">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Armas Brancas</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-nivel">
            </div>
            <div class="col">
            <label class="form-label mx-auto">Dano</label>
            <input type="number" class="form-control-plaintext" placeholder="Valor" name="armas-branca-dano">
            </div>
            <div class="col">
            <label class="form-label mx-auto">NdA</label>
            <input type="text" class="form-control-plaintext" placeholder="Valor" name="armas-branca-nda">
            </div>
            </div>`;
    }



    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_bombas(bomba = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-bombas");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (bomba != false) {
        estrutura = `<ul class="nav justify-content-end">
        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
        </ul>
        <div class="row">
        <div class="col-sm-1">
        <label class="form-label mx-auto">Qtd</label>
        <input type="number" class="form-control-plaintext" placeholder="0" name="bomas-quantidade" value="${bomba.quantidade}">
        </div>
        <div class="col-sm-2">
        <label class="form-label mx-auto">Nome</label>
        <input type="text" class="form-control-plaintext" placeholder="Nome da Arma" name="bomas-nome" value="${bomba.nome}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Raio</label>
        <input type="number" class="form-control-plaintext" placeholder="Valor" name="bomas-raio" value="${bomba.raio}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Dano</label>
        <input type="number" class="form-control-plaintext" placeholder="Valor" name="bomas-dano" value="${bomba.dano}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">TSA</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-tsa" value="${bomba.tsa}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">NVB</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-nvb" value="${bomba.nvb}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Turnos</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-turnos" value="${bomba.turnos}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">ACT</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-act" value="${bomba.act}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">NdA</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-nda" value="${bomba.nda}">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Explosivo</label>
        <input type="number" min="0" max="5" class="form-control-plaintext" placeholder="Valor" name="bomas-explivos" value="${bomba.explosivos}">
        </div>
        </div>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
        </ul>
        <div class="row">
        <div class="col-sm-1">
        <label class="form-label mx-auto">Qtd</label>
        <input type="number" class="form-control-plaintext" placeholder="0" name="bomas-quantidade">
        </div>
        <div class="col-sm-2">
        <label class="form-label mx-auto">Nome</label>
        <input type="text" class="form-control-plaintext" placeholder="Nome da Arma" name="bomas-nome">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Raio</label>
        <input type="number" class="form-control-plaintext" placeholder="Valor" name="bomas-raio">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Dano</label>
        <input type="number" class="form-control-plaintext" placeholder="Valor" name="bomas-dano">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">TSA</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-tsa">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">NVB</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-nvb">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Turnos</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-turnos">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">ACT</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-act">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">NdA</label>
        <input type="text" class="form-control-plaintext" placeholder="Valor" name="bomas-nda">
        </div>
        <div class="col-sm-1">
        <label class="form-label mx-auto">Explosivo</label>
        <input type="number" min="0" max="5" class="form-control-plaintext" placeholder="Valor" name="bomas-explivos">
        </div>
        </div>`;
    }



    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_inventario(inventario = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-inventario");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (inventario != false) {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col-sm-4">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome do item" name="nome-item-inventario-slot" value="${inventario.nome}">
            </div>
            <div class="col-sm-1">
            <label class="form-label mx-auto">Qtd</label>
            <input type="number" class="form-control-plaintext" placeholder="0" name="quantidade-item-inventario-slot" value="${inventario.quantidade}">
            </div>
            <div class="col-sm-7">
            <label class="form-label mx-auto">Armazenado</label>
            <input type="text" class="form-control-plaintext" placeholder="Local onde o item está guardado" name="armazenado-item-inventario-slot" value="${inventario.armazenado}">
            </div>
            </div>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <div class="row">
            <div class="col-sm-4">
            <label class="form-label mx-auto">Nome</label>
            <input type="text" class="form-control-plaintext" placeholder="Nome do item" name="nome-item-inventario-slot">
            </div>
            <div class="col-sm-1">
            <label class="form-label mx-auto">Qtd</label>
            <input type="number" class="form-control-plaintext" placeholder="0" name="quantidade-item-inventario-slot">
            </div>
            <div class="col-sm-7">
            <label class="form-label mx-auto">Armazenado</label>
            <input type="text" class="form-control-plaintext" placeholder="Local onde o item está guardado" name="armazenado-item-inventario-slot">
            </div>
            </div>`;
    }


    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_acoes(acoes = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-acoes-proficientes");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;
    if (acoes != false) {
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Ação Proficiente" name="nome-acoes-proficientes" value="${acoes.nome}">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text">Teste</span>
                                <input type="text" class="form-control" placeholder="Atributo + Perícia" name="teste-acoes-proficientes" value="${acoes.teste}">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text">ND</span>
                                <input type="text" class="form-control" placeholder="Valor" name="nd-acoes-proficientes" value="${acoes.nd}">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Requisitos da Ação</label>
                            <textarea class="form-control" rows="5" placeholder="Insira aqui o que é preciso para realizar a ação..." name="requisitos-acoes-proficientes" >${acoes.requisitos}</textarea>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Efeito da Ação</label>
                            <textarea class="form-control" rows="5" placeholder="Insira aqui os efeitos causados pela ação resumidamente, como por exemplo, causar 40 de dano no alvo..." name="efeito-acoes-proficientes" >${acoes.efeito}</textarea>
                        </div>
                    </div>
                    <label class="form-label mx-auto">Descrição da Ação</label>
                    <textarea class="form-control" rows="5" placeholder="Informe os movimentos e ações que o personagem precisa fazer para realizar a ação..." name="descricao-acoes-proficientes" >${acoes.descricao}</textarea>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Ação Proficiente" name="nome-acoes-proficientes">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text">Teste</span>
                                <input type="text" class="form-control" placeholder="Atributo + Perícia" name="teste-acoes-proficientes">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text">ND</span>
                                <input type="text" class="form-control" placeholder="Valor" name="nd-acoes-proficientes">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Requisitos da Ação</label>
                            <textarea class="form-control" rows="5" placeholder="Insira aqui o que é preciso para realizar a ação..." name="requisitos-acoes-proficientes"></textarea>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Efeito da Ação</label>
                            <textarea class="form-control" rows="5" placeholder="Insira aqui os efeitos causados pela ação resumidamente, como por exemplo, causar 40 de dano no alvo..." name="efeito-acoes-proficientes"></textarea>
                        </div>
                    </div>
                    <label class="form-label mx-auto">Descrição da Ação</label>
                    <textarea class="form-control" rows="5" placeholder="Informe os movimentos e ações que o personagem precisa fazer para realizar a ação..." name="descricao-acoes-proficientes"></textarea>`;
    }

    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_conhecimento(conhecimento = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-conhecimentos");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (conhecimento != false) {
        estrutura = `<ul class="nav justify-content-end">
        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
        </ul>
        <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Título do Conhecimento" name="titulo_conhecimento_input" value="${conhecimento.titulo}">
        <textarea class="form-control" rows="5" placeholder="Descrição do que o personagem sabe sobre esse conhecimento" name="descricao_conhecimento_input"> ${conhecimento.descricao} </textarea>`;
    } else {
        estrutura = `<ul class="nav justify-content-end">
        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
        </ul>
        <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Título do Conhecimento" name="titulo_conhecimento_input">
        <textarea class="form-control" rows="5" placeholder="Descrição do que o personagem sabe sobre esse conhecimento" name="descricao_conhecimento_input"></textarea>`;
    }



    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_habilidade_exclusiva_secundaria(hab = false) {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-hab-secundarias");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;
    if (hab != false) {
        let habilitados = {
            vocal:"",
            gestual:"",
            material:"",
            simbolo:"",
            leitura:""
        }
        if(hab.invocacao.vocal == true){
            habilitados.vocal = "checked"
        }
        if(hab.invocacao.gestual == true){
            habilitados.gestual = "checked"
        }
        if(hab.invocacao.material == true){
            habilitados.material = "checked"
        }
        if(hab.invocacao.simbolo == true){
            habilitados.simbolo = "checked"
        }
        if(hab.invocacao.leitura == true){
            habilitados.leitura = "checked"
        }
        
       
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <div class="row">
                        <div class="col-sm-10">
                            <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Habilidade Secundária" name="nome-hab-secundaria-input" value="${hab.nome}">

                            <div class="row">
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Concentração</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="concentracao-hab-secundaria-input" value="${hab.concentracao}">
                                </div>
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Área</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="area-hab-secundaria-input" value="${hab.area}">
                                </div>
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Tipo</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="tipo-hab-secundaria-input" value="${hab.tipo}">
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-2">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${habilitados.vocal} value="Vocal" name="checkbox-hab-secundaria-vocal-input">
                                <label class="form-check-label">Vocal</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${habilitados.gestual} value="Gestual" name="checkbox-hab-secundaria-gestual-input">
                                <label class="form-check-label" for="mySwitch">Gestual</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${habilitados.material} value="Material" name="checkbox-hab-secundaria-material-input">
                                <label class="form-check-label" for="mySwitch">Material</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${habilitados.simbolo} value="Simbolo" name="checkbox-hab-secundaria-simbolo-input">
                                <label class="form-check-label" for="mySwitch">Simbolo</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${habilitados.leitura} value="Leitura" name="checkbox-hab-secundaria-leitura-input">
                                <label class="form-check-label" for="mySwitch">Leitura</label>
                            </div>
                        </div>
                    </div>
`;
    } else {
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <div class="row">
                        <div class="col-sm-10">
                            <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Habilidade Secundária" name="nome-hab-secundaria-input">

                            <div class="row">
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Concentração</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="concentracao-hab-secundaria-input">
                                </div>
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Área</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="area-hab-secundaria-input">
                                </div>
                                <div class="col-sm-4">
                                    <label class="form-label mx-auto">Tipo</label>
                                    <input type="text" class="form-control-plaintext" placeholder="Informação..." name="tipo-hab-secundaria-input">
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-2">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="Vocal" name="checkbox-hab-secundaria-vocal-input">
                                <label class="form-check-label">Vocal</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="Gestual" name="checkbox-hab-secundaria-gestual-input">
                                <label class="form-check-label" for="mySwitch">Gestual</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox"  value="Material" name="checkbox-hab-secundaria-material-input">
                                <label class="form-check-label" for="mySwitch">Material</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox"  value="Simbolo" name="checkbox-hab-secundaria-simbolo-input">
                                <label class="form-check-label" for="mySwitch">Simbolo</label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox"  value="Leitura" name="checkbox-hab-secundaria-leitura-input">
                                <label class="form-check-label" for="mySwitch">Leitura</label>
                            </div>
                        </div>
                    </div>
`;
    }

    // Defina o conteúdo desse elemento

    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_habilidade_exclusiva_nao_evolutiva(hab = false){
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-hab-exclusiva");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (hab != false){
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Habilidade" name="nome-hab-nao-evolutiva-input" value="${hab.nome}">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text">Teste</span>
                                <input type="text" class="form-control" placeholder="Atributo + Perícia" name="teste-hab-nao-evolutiva-input" value="${hab.teste}">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text">ND</span>
                                <input type="text" class="form-control" placeholder="Valor" name="nd-hab-nao-evolutiva-input" value="${hab.nd}">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Origem</label>
                            <textarea class="form-control" rows="5" placeholder="Explicando de forma básica como o personagem conseguiu essas habilidades. Mais detalhes devem ser inseridos na história do personagem..." name="origem-hab-nao-evolutiva-input"> ${hab.origem}</textarea>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Descrição</label>
                            <textarea class="form-control" rows="5" placeholder="Aqui você vai explicar o efeito da habilidade..." name="descricao-hab-nao-evolutiva-input"> ${hab.descricao}</textarea>
                        </div>
                    </div>
                    `;
    }else{
        estrutura = `<ul class="nav justify-content-end">                            
                        <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text" class="form-control-plaintext" placeholder="Nome da Habilidade" name="nome-hab-nao-evolutiva-input">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text">Teste</span>
                                <input type="text" class="form-control" placeholder="Atributo + Perícia" name="teste-hab-nao-evolutiva-input">
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text">ND</span>
                                <input type="text" class="form-control" placeholder="Valor" name="nd-hab-nao-evolutiva-input">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Origem</label>
                            <textarea class="form-control" rows="5" placeholder="Explicando de forma básica como o personagem conseguiu essas habilidades. Mais detalhes devem ser inseridos na história do personagem..." name="origem-hab-nao-evolutiva-input"></textarea>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label mx-auto">Descrição</label>
                            <textarea class="form-control" rows="5" placeholder="Aqui você vai explicar o efeito da habilidade..." name="descricao-hab-nao-evolutiva-input"></textarea>
                        </div>
                    </div>
`;
    }

    
    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_habilidade_exclusiva_evolutiva(hab = false){
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("container-hab-exclusiva-2");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "col-sm-12");

    let estrutura = null;

    if (hab != false){
        estrutura = `<ul class="nav justify-content-end">
                        <button type="button" onclick="remover_pericia(this)"
                            class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text"
                        class="form-control-plaintext text-center"
                        placeholder="Nome Geral da Habilidade" name="nome-hab-evolutiva-input" value="${hab.nome_hab}">

                    <textarea class="form-control-plaintext" rows="2"
                        placeholder="Descrição Geral da Habilidade..." name="descricao-hab-evolutiva-input">${hab.descricao_geral}</textarea>
                    <br>
                    <!--Nível 01  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 1</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-01-nome-hab-evolutiva-input" value="${hab.nivel_01.nome_nivel}">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-01-teste-hab-evolutiva-input" value="${hab.nivel_01.teste}">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-01-descricao-hab-evolutiva-input">${hab.nivel_01.descricao}</textarea>

                    <!--Nível 02  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 2</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-02-nome-hab-evolutiva-input"value="${hab.nivel_02.nome_nivel}">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-02-teste-hab-evolutiva-input"value="${hab.nivel_02.teste}">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-02-descricao-hab-evolutiva-input">${hab.nivel_02.descricao}</textarea>

                    <!--Nível 03  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 3</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-03-nome-hab-evolutiva-input" value="${hab.nivel_03.nome_nivel}">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-03-teste-hab-evolutiva-input" value="${hab.nivel_03.teste}">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-03-descricao-hab-evolutiva-input"> ${hab.nivel_03.descricao}</textarea>

                    <!--Nível 04  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 4</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-04-nome-hab-evolutiva-input" value="${hab.nivel_04.nome_nivel}">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-04-teste-hab-evolutiva-input" value="${hab.nivel_04.teste}">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-04-descricao-hab-evolutiva-input"> ${hab.nivel_04.descricao}</textarea>

                    <!--Nível 05  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 5</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-05-nome-hab-evolutiva-input" value="${hab.nivel_05.nome_nivel}">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-05-teste-hab-evolutiva-input" value="${hab.nivel_05.teste}">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-05-descricao-hab-evolutiva-input"> ${hab.nivel_05.descricao}</textarea>
`;
    }else{
        estrutura = `<ul class="nav justify-content-end">
                        <button type="button" onclick="remover_pericia(this)"
                            class="btn btn-danger">-</button>
                    </ul>
                    <input style="font-size: 1.5rem;" type="text"
                        class="form-control-plaintext text-center"
                        placeholder="Nome Geral da Habilidade" name="nome-hab-evolutiva-input">

                    <textarea class="form-control-plaintext" rows="2"
                        placeholder="Descrição Geral da Habilidade..." name="descricao-hab-evolutiva-input"></textarea>
                    <br>
                    <!--Nível 01  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 1</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-01-nome-hab-evolutiva-input">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-01-teste-hab-evolutiva-input">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-01-descricao-hab-evolutiva-input"></textarea>

                    <!--Nível 02  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 2</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-02-nome-hab-evolutiva-input">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-02-teste-hab-evolutiva-input">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-02-descricao-hab-evolutiva-input"></textarea>

                    <!--Nível 03  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 3</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-03-nome-hab-evolutiva-input">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-03-teste-hab-evolutiva-input">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-03-descricao-hab-evolutiva-input"></textarea>

                    <!--Nível 04  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 4</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-04-nome-hab-evolutiva-input">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-04-teste-hab-evolutiva-input">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-04-descricao-hab-evolutiva-input"></textarea>

                    <!--Nível 05  da Habilidade-->
                    <div class="row">
                        <div class="col-sm-1">
                            <label class="form-label mx-auto">Nível 5</label>
                        </div>
                        <div class="col-sm-11">
                            <input style="font-size: 1.1rem;" type="text" class="form-control-plaintext"
                                placeholder="Nome do Nível..." name="nv-05-nome-hab-evolutiva-input">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Teste</span>
                        <input type="text" class="form-control"
                            placeholder="Atributo + Perícia - Consumo de Energia e Nível de Dificuldade" name="nv-05-teste-hab-evolutiva-input">
                    </div>

                    <label class="form-label mx-auto">Descrição</label>
                    <textarea class="form-control-plaintext" rows="3"
                    placeholder="Descrição do Nível..." name="nv-05-descricao-hab-evolutiva-input"></textarea>
`;
    }
    // Defina o conteúdo desse elemento
    
    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_classe_primaria(classe=false){
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("classe-primaria-container");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "row");

    let estrutura = null;

    if (classe != false){
        estrutura = `
            <ul class="nav justify-content-end">                            
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <input style="font-size: 1.2rem;" type="text" class="form-control-plaintext" placeholder="Nome da Classe" name="nome-classe" value="${classe.nome}">
            
            <div class="input-group mb-3">
                <span class="input-group-text">Consumo</span>
                <input type="text" class="form-control" placeholder="Nome da Energia (Valor Total) - Valor Consumido" name="consumo-classe" value="${classe.consumo}">
            </div>
            <label class="form-label mx-auto">Informações da Classe</label>
            <textarea class="form-control" rows="8" placeholder="Informe todos os atributos essenciais da classe nessa regiao" name="descricao-geral-classe">${classe.descricao}</textarea>
        `;
    }else{
        estrutura = `
            <ul class="nav justify-content-end">                            
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <input style="font-size: 1.2rem;" type="text" class="form-control-plaintext" placeholder="Nome da Classe" name="nome-classe">
            
            <div class="input-group mb-3">
                <span class="input-group-text">Consumo</span>
                <input type="text" class="form-control" placeholder="Nome da Energia (Valor Total) - Valor Consumido" name="consumo-classe">
            </div>
            <label class="form-label mx-auto">Informações da Classe</label>
            <textarea class="form-control" rows="8" placeholder="Informe todos os atributos essenciais da classe nessa regiao" name="descricao-geral-classe"></textarea>
        `;
    }

    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}

function add_classe_secundaria(classe=false){
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("classe-secundaria-container");

    // Crie um novo elemento (por exemplo, um parágrafo)
    let container_pericia = document.createElement("div");
    container_pericia.classList.add("card_atributos", "shadow", "row");

    let estrutura = null;

    if (classe != false){
        estrutura = `
            <ul class="nav justify-content-end">                            
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <input style="font-size: 1.2rem;" type="text" class="form-control-plaintext" placeholder="Nome da Classe" name="nome-classe" value="${classe.nome}">
            
            <div class="input-group mb-3">
                <span class="input-group-text">Consumo</span>
                <input type="text" class="form-control" placeholder="Nome da Energia (Valor Total) - Valor Consumido" name="consumo-classe" value="${classe.consumo}">
            </div>
            <label class="form-label mx-auto">Informações da Classe</label>
            <textarea class="form-control" rows="8" placeholder="Informe todos os atributos essenciais da classe nessa regiao" name="descricao-geral-classe">${classe.descricao}</textarea>
        `;
    }else{
        estrutura = `
            <ul class="nav justify-content-end">                            
            <button type="button" onclick="remover_pericia(this)" class="btn btn-danger">-</button>
            </ul>
            <input style="font-size: 1.2rem;" type="text" class="form-control-plaintext" placeholder="Nome da Classe" name="nome-classe">
            
            <div class="input-group mb-3">
                <span class="input-group-text">Consumo</span>
                <input type="text" class="form-control" placeholder="Nome da Energia (Valor Total) - Valor Consumido" name="consumo-classe">
            </div>
            <label class="form-label mx-auto">Informações da Classe</label>
            <textarea class="form-control" rows="8" placeholder="Informe todos os atributos essenciais da classe nessa regiao" name="descricao-geral-classe"></textarea>
        `;
    }

    container_pericia.innerHTML = estrutura;

    // Adicione o novo elemento à div
    minhaDiv.appendChild(container_pericia);
}



function remover_pericia(botao) {

    let divPai = botao.parentNode; // Obter o elemento pai do botão (a div)
    divPai = divPai.parentNode;
    divPai.parentNode.removeChild(divPai); // Remover a div do DOM

}

function remover_habilidade(botao) {

    let divPai = botao.parentNode; // Obter o elemento pai do botão (a div)
    divPai = divPai.parentNode;
    divPai = divPai.parentNode;
    divPai.parentNode.removeChild(divPai); // Remover a div do DOM

}

//Relacionados a Vitalidade
function alterar_status_vitalidade() {
    let valor = parseInt(document.getElementById('vitalidade-total').value);

    let status = '';

    if (valor <= 10) {
        status = 'Normal'
    } else if (valor >= 11 && valor <= 20) {
        status = 'Ferimento Médio (-2)'
    } else if (valor >= 21 && valor <= 30) {
        status = 'Espancado (-3)'
    } else if (valor >= 31 && valor <= 39) {
        status = 'Quebrado (-5)'
    } else if (valor >= 40) {
        status = 'Incapaz (-10)'
    }

    let contador = document.getElementById('status-vitalidade');
    contador.textContent = "Status: " + status;
}

// Relacionado a alteração de imagem
function alterar_imagem() {
    // Capturando o elemento que receberá a imagem
    let classe_img = document.getElementById('imagem-thumb');

    // Capturando o novo link inserido
    let link_nova_img = document.getElementById('input-link-img');
    link_nova_img = link_nova_img.value;
    classe_img.src = link_nova_img;


}

// Controle da Bondade
function alterar_bondade(valor_recebido) {
    let valor = parseInt(valor_recebido)

    contador = document.getElementById('contador-bondade');
    contador.textContent = `Mal < ${valor} > Bom`;

    let tipo_status = 'Neutro'

    let status = document.getElementById('status-bondade');

    if (valor <= -10) {
        tipo_status = "Maligno"
    } else if (valor >= -9 && valor <= -7) {
        tipo_status = "Cruel"
    } else if (valor >= -6 && valor <= -4) {
        tipo_status = "Insensivel"
    } else if (valor >= -3 && valor <= -1) {
        tipo_status = "Negativamente Neutro"
    } else if (valor == 0) {
        tipo_status = "Neutro"
    } else if (valor >= 1 && valor <= 3) {
        tipo_status = "Positivamente Neutro"
    } else if (valor >= 4 && valor <= 6) {
        tipo_status = "Tolerante"
    } else if (valor >= 7 && valor <= 9) {
        tipo_status = "Gentil"
    } else if (valor >= 10) {
        tipo_status = "Bondoso"
    }
    status.innerHTML = tipo_status;
}


//funcao do botao para adicionar classe primaria
document.getElementById("add-classe-primaria").addEventListener("click", function () {
    add_classe_primaria();
});

//funcao do botao para adicionar classe secundaria
document.getElementById("add-classe-secundaria").addEventListener("click", function () {
    add_classe_secundaria();
});

//Função do Botão de adicionar Pericia
document.getElementById("add-pericia").addEventListener("click", function () {
    add_pericia();
});

//Função do Botão de adicionar Habilidade
document.getElementById("add-habilidade").addEventListener("click", function () {
    add_habilidade();
});

document.getElementById("add-aquisicao").addEventListener("click", function () {
    add_aquisicoes();
});

//Funções relacionadas a bondade

document.getElementById('bondade_controle').addEventListener("change", function () {
    alterar_bondade(this.value);
});

// Funções da Vantagem e Desvantagens
document.getElementById("add-vantagem-desvantagem").addEventListener("click", function () {
    add_vantagens_desvantagens();
});

//Funções para a pagina de confronto

document.getElementById("add-arma-fogo").addEventListener("click", function () {
    add_arma_fogo();
});

document.getElementById("add-arma-branca").addEventListener("click", function () {
    add_arma_branca();
});

document.getElementById("add-bombas").addEventListener("click", function () {
    add_bombas();
});

// Funções para a Página de Inventário

document.getElementById("add-item-inventario").addEventListener("click", function () {
    add_inventario();
});

// Funções para a sessão Recursos
document.getElementById("add-moeda").addEventListener("click", function () {
    add_recurso();
});

// Funções para a sessão Idiomas
document.getElementById("add-idioma").addEventListener("click", function () {
    add_idiomas();
});

// Funções para a sessão conhecimentos
document.getElementById("add-conhecimento").addEventListener("click", function () {
    add_conhecimento();
});

// Funções para a sessão ações proficientes
document.getElementById("add-acoes").addEventListener("click", function () {
    add_acoes();
});

// Função para adicionar novas habilidades Secundárias:
document.getElementById("add-hab-secundaria").addEventListener("click", function () {
    add_habilidade_exclusiva_secundaria();
});

// Função para adicionar novas habilidades exclusivas nao evolutivas:
document.getElementById("add-hab-exclusiva").addEventListener("click", function () {
    add_habilidade_exclusiva_nao_evolutiva();
});

// Função para adicionar novas habilidades exclusivas evolutivas:
document.getElementById("add-hab-exclusiva-2").addEventListener("click", function () {
    add_habilidade_exclusiva_evolutiva();
    
});

// Função para editar historia:
document.getElementById("editar-historia").addEventListener("click", function () {
    // Selecione a div alvo pelo ID
    let minhaDiv = document.getElementById("historia-personagem");

    if (minhaDiv.contentEditable == 'false') {
        minhaDiv.contentEditable = 'true';
        minhaDiv.classList.add("shadow", "modo-editavel");

    } else {
        minhaDiv.contentEditable = 'false';
        minhaDiv.classList.remove("shadow", "modo-editavel");
    }
});

