
// Botão para salvar o arquivo:
document.getElementById('btn-carregar-personagem').addEventListener("click", function (){
    // Convertendo o objeto para uma string JSON
    let arquivo_json_carregado = document.getElementById("file-json-personagem")
    // Verificando se um arquivo foi selecionado
    if (arquivo_json_carregado.files.length > 0) {
        // Obtendo o primeiro arquivo da lista
        var file = arquivo_json_carregado.files[0];

        // Criando um novo FileReader
        var reader = new FileReader();

        // Definindo a função de callback quando a leitura estiver completa
        reader.onload = function (e) {
            // Obtendo o conteúdo do arquivo como uma string
            var fileContent = e.target.result;

            // Convertendo a string JSON de volta para um objeto
            var objetoRecuperado = JSON.parse(fileContent);

            // Faça o que quiser com o objeto recuperado
            personagem = objetoRecuperado;
            carregar_dados_pagina();
        };
        
        // Iniciando a leitura do arquivo como texto
        reader.readAsText(file);
        
    } else {
        console.error("Nenhum arquivo selecionado.");
    }
    
    
});

function carregar_dados_pagina(){
    verificar_versao_ficha();
    carregar_informacoes_gerais();
    carregar_aparencia();
    carregar_escudo_armadura();
    carregar_atributos();
    carregar_outros_atributos();
    carregar_pericias();
    carregar_vitalidade();
    carregar_treinamento();
    carregar_habilidades();
    carregar_aquisicoes();
    carregar_recursos();
    carregar_idiomas();
    carregar_vantagens();
    carregar_armas_fogo();
    carregar_armas_branca();
    carregar_bombas();
    carregar_inventario();
    carregar_acoes();
    carregar_conhecimento();
    carregar_habilidade_secundaria();
    carregar_habilidade_nao_evolutivas();
    carregar_habilidade_evolutivas();
    carregar_historia_personagem();
    carregar_classes();
};

function verificar_versao_ficha(){
    if (personagem.versao_ficha != versao_ficha){
        alert('Atenção!!!\n\n Seu personagem carrega uma versão diferente dessa aplicação, provavelmente os dados serão carregados com erro!')
    }
}

function carregar_informacoes_gerais(){
    
    let input_img = document.getElementById('imagem-thumb');
    let campanha = document.getElementById('campanha');
    let nome_personagem = document.getElementById('Personagem');
    let jogador = document.getElementById('Jogador');
    let raca = document.getElementById('Raça');
    let bonus_racial_for = document.getElementById('Bonus-For');
    let bonus_racial_des = document.getElementById('Bonus-Des');
    let bonus_racial_res = document.getElementById('Bonus-Res');


    input_img.src = personagem.informacoes_gerais.perfil;
    campanha.value = personagem.informacoes_gerais.campanha;
    nome_personagem.value = personagem.informacoes_gerais.personagem;
    jogador.value = personagem.informacoes_gerais.jogador;
    raca.value = personagem.informacoes_gerais.raca
    bonus_racial_for.value = personagem.informacoes_gerais.bonus_racial[0]
    bonus_racial_des.value = personagem.informacoes_gerais.bonus_racial[1]
    bonus_racial_res.value = personagem.informacoes_gerais.bonus_racial[2]
    
}

function carregar_aparencia(){
    let personalidade = document.getElementById('Personalidade');
    let cor_olhos = document.getElementById('Cor-Olhos');
    let cor_cabelo = document.getElementById('Cor-Cabelo');
    let altura = document.getElementById('Altura');
    let comportamento = document.getElementById('Comportamento');
    let peso = document.getElementById('Peso');
    let idade_aparente = document.getElementById('Idade');
    let sexo = document.getElementById('Sexo');

    personalidade.value = personagem.aparencia.personalidade;
    cor_olhos.value = personagem.aparencia.cor_olhos;
    cor_cabelo.value = personagem.aparencia.cor_cabelo;
    altura.value = personagem.aparencia.altura
    comportamento.value = personagem.aparencia.comportamento;
    peso.value = personagem.aparencia.peso;
    idade_aparente.value = personagem.aparencia.idade_aparente;
    sexo.value = personagem.aparencia.sexo;
}

function carregar_escudo_armadura(){
    let escudo_nome = document.getElementById('Escudo-Nome');
    let escudo_vigor = document.getElementById('Escudo-Vigor');
    let escudo_resistencia = document.getElementById('Escudo-Resistencia');
    let escudo_consumo = document.getElementById('Escudo-Consumo');
    let escudo_energia = document.getElementById('Escudo-Energia');
    
    let armadura_nome = document.getElementById('Armadura-Nome');
    let armadura_vigor_armadura = document.getElementById('Armadura-Vigor');
    let armadura_pca = document.getElementById('Armadura-PCA');
    let armadura_durabilidade = document.getElementById('Armadura-Durabilidade');
    let armadura_ppd = document.getElementById('Armadura-PPD');
    let armadura_bateria = document.getElementById('Armadura-Bateria');
    let armadura_cdn = document.getElementById('Armadura-CDN');
    let armadura_ac = document.getElementById('Armadura-AC');

    escudo_nome.value = personagem.escudo.nome;
    escudo_vigor.value = personagem.escudo.vigor;
    escudo_resistencia.value = personagem.escudo.resistencia;
    escudo_consumo.value = personagem.escudo.consumo;
    escudo_energia.value = personagem.escudo.energia;

    armadura_nome.value = personagem.armadura.nome;
    armadura_vigor_armadura.value = personagem.armadura.vigor_armadura;
    armadura_pca.value = personagem.armadura.pca;
    armadura_durabilidade.value = personagem.armadura.durabilidade;
    armadura_ppd.value = personagem.armadura.ppd;
    armadura_bateria.value = personagem.armadura.bateria;
    armadura_cdn.value = personagem.armadura.cdn;
    armadura_ac.value = personagem.armadura.ac;

}

function carregar_atributos(){
    let atributo_forca = document.getElementById('Atributo-Forca');
    let atributo_destreza = document.getElementById('Atributo-Destreza');
    let atributo_resistencia = document.getElementById('Atributo-Resistencia');
    let atributo_constituicao = document.getElementById('Atributo-Constituicao');
    let atributo_carisma = document.getElementById('Atributo-Carisma');
    let atributo_percepcao = document.getElementById('Atributo-Percepcao');
    let atributo_sabedoria = document.getElementById('Atributo-Sabedoria');
    let atributo_inteligencia = document.getElementById('Atributo-Inteligencia');
    let atributo_poder = document.getElementById('Atributo-Poder');

    let boni_atributo_forca = document.getElementById('Boni-Atributo-Forca');
    let boni_atributo_destreza = document.getElementById('Boni-Atributo-Destreza');
    let boni_atributo_resistencia = document.getElementById('Boni-Atributo-Resistencia');
    let boni_atributo_constituicao = document.getElementById('Boni-Atributo-Constituicao');
    let boni_atributo_carisma = document.getElementById('Boni-Atributo-Carisma');
    let boni_atributo_percepcao = document.getElementById('Boni-Atributo-Percepcao');
    let boni_atributo_sabedoria = document.getElementById('Boni-Atributo-Sabedoria');
    let boni_atributo_inteligencia = document.getElementById('Boni-Atributo-Inteligencia');
    let boni_atributo_poder = document.getElementById('Boni-Atributo-Poder');

    atributo_forca.value = personagem.atributos.forca.nivel;
    atributo_destreza.value = personagem.atributos.destreza.nivel;
    atributo_resistencia.value = personagem.atributos.resistencia.nivel;
    atributo_constituicao.value = personagem.atributos.constituicao.nivel;
    atributo_carisma.value = personagem.atributos.carisma.nivel;
    atributo_percepcao.value = personagem.atributos.percepcao.nivel;
    atributo_sabedoria.value = personagem.atributos.sabedoria.nivel;
    atributo_inteligencia.value = personagem.atributos.inteligencia.nivel;
    atributo_poder.value = personagem.atributos.poder.nivel;
    boni_atributo_forca.value = personagem.atributos.forca.bonificacao;
    boni_atributo_destreza.value = personagem.atributos.destreza.bonificacao;
    boni_atributo_resistencia.value = personagem.atributos.resistencia.bonificacao;
    boni_atributo_constituicao.value = personagem.atributos.constituicao.bonificacao;
    boni_atributo_carisma.value = personagem.atributos.carisma.bonificacao;
    boni_atributo_percepcao.value = personagem.atributos.percepcao.bonificacao;
    boni_atributo_sabedoria.value = personagem.atributos.sabedoria.bonificacao;
    boni_atributo_inteligencia.value = personagem.atributos.inteligencia.bonificacao;
    boni_atributo_poder.value = personagem.atributos.poder.bonificacao;
}

function carregar_outros_atributos(){
    let perceveranca_total = document.getElementById('Perceveranca-Total');
    let perceveranca_gasta = document.getElementById('Perceveranca-Gasta');

    let clol_total = document.getElementById('Clol-Total');
    let clol_gasto = document.getElementById('Clol-Gasto');
    let clol_bonificacao = document.getElementById('Clol-Bonificacao');

    let pontos_acao_recebidos = document.getElementById('Pontos-Acao-Total');
    let pontos_acao_gasto = document.getElementById('Pontos-Acao-Gasto');

    let coragem = document.getElementById('Coragem-Nivel');

    let bondade = document.getElementById('bondade_controle');

    let xp_total = document.getElementById('Pontos-XP');

    perceveranca_total.value = personagem.perceveranca.total;
    perceveranca_gasta.value = personagem.perceveranca.gasto;
    clol_total.value = personagem.clol.total;
    clol_gasto.value = personagem.clol.gasto;
    clol_bonificacao.value = personagem.clol.bonificacao;
    pontos_acao_recebidos.value = personagem.pontos_acao.recebidos;
    pontos_acao_gasto.value = personagem.pontos_acao.gasto;
    coragem.value = personagem.coragem;
    bondade.value = personagem.bondade;
    xp_total.value = personagem.xp;

    //Aplicando os indicadores da bondade:
    alterar_bondade(personagem.bondade);
}

function carregar_pericias(){
    
    // Verifica se temos pericias para adicionar:
    if(personagem.pericias.length != 0){
        for (let i = 0; i < personagem.pericias.length; i++) {
            add_pericia(personagem.pericias[i]);
        }
    }
    
}

function carregar_vitalidade(){
    let vitalidade_total = document.getElementById('vitalidade-total');
    let vitalidade_bonificacao_total = document.getElementById('vitalidade-bonificacao-total');
    let vitalidade_bonificacao_gasta = document.getElementById('vitalidade-bonificacao-gasto');

    vitalidade_total.value = personagem.vitalidade.vitalidade;
    vitalidade_bonificacao_total.value = personagem.vitalidade.bonificacao_total;
    vitalidade_bonificacao_gasta.value = personagem.vitalidade.bonificacao_gasta;
    alterar_status_vitalidade();
}

function carregar_treinamento(){
    let slot_01_atributo = document.getElementById('atributo-treino-slot-1');
    let slot_01_quantidade_treino = document.getElementById('qtd-treino-slot-1');
    let slot_01_treinado = document.getElementById('treinado-slot-1');

    let slot_02_atributo = document.getElementById('atributo-treino-slot-2');
    let slot_02_quantidade_treino = document.getElementById('qtd-treino-slot-2');
    let slot_02_treinado = document.getElementById('treinado-slot-2');

    let slot_03_atributo = document.getElementById('atributo-treino-slot-3');
    let slot_03_quantidade_treino = document.getElementById('qtd-treino-slot-3');
    let slot_03_treinado = document.getElementById('treinado-slot-3');

    let slot_04_atributo = document.getElementById('atributo-treino-slot-4');
    let slot_04_quantidade_treino = document.getElementById('qtd-treino-slot-4');
    let slot_04_treinado = document.getElementById('treinado-slot-4');

    slot_01_atributo.value = personagem.treino.slot_01.atributo;
    slot_01_quantidade_treino.value = personagem.treino.slot_01.quantidade_treino;
    slot_01_treinado.value = personagem.treino.slot_01.treinado;

    slot_02_atributo.value = personagem.treino.slot_02.atributo;
    slot_02_quantidade_treino.value = personagem.treino.slot_02.quantidade_treino;
    slot_02_treinado.value = personagem.treino.slot_02.treinado;

    slot_03_atributo.value = personagem.treino.slot_03.atributo;
    slot_03_quantidade_treino.value = personagem.treino.slot_03.quantidade_treino;
    slot_03_treinado.value = personagem.treino.slot_03.treinado;

    slot_04_atributo.value = personagem.treino.slot_04.atributo;
    slot_04_quantidade_treino.value = personagem.treino.slot_04.quantidade_treino;
    slot_04_treinado.value = personagem.treino.slot_04.treinado;
}

function carregar_habilidades(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.habilidades.length > 0){
        for (let i = 0; i < personagem.habilidades.length; i++) {
            add_habilidade(personagem.habilidades[i]);
        }
    }
    
}

function carregar_aquisicoes(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.aquisicoes.length > 0){
        for (let i = 0; i < personagem.aquisicoes.length; i++) {
            add_aquisicoes(personagem.aquisicoes[i]);
        }
    }
    
}

function carregar_recursos(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.recursos.length > 0){
        for (let i = 0; i < personagem.recursos.length; i++) {
            add_recurso(personagem.recursos[i]);
        }
    }
    
}

function carregar_idiomas(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.idiomas.length > 0){
        for (let i = 0; i < personagem.idiomas.length; i++) {
            add_idiomas(personagem.idiomas[i]);
        }
    }
    
}

function carregar_vantagens(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.vantagens.length > 0){
        for (let i = 0; i < personagem.vantagens.length; i++) {
            add_vantagens_desvantagens(personagem.vantagens[i]);
        }
    }
    
}

function carregar_armas_fogo(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.confronto.armas_fogo.length > 0){
        for (let i = 0; i < personagem.confronto.armas_fogo.length; i++) {
            add_arma_fogo(personagem.confronto.armas_fogo[i]);
        }
    }
    
}

function carregar_armas_branca(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.confronto.armas_brancas.length > 0){
        for (let i = 0; i < personagem.confronto.armas_brancas.length; i++) {
            add_arma_branca(personagem.confronto.armas_brancas[i]);
        }
    }
    
}

function carregar_bombas(){
    
    // Verifica se temos objetos para adicionar:
    if(personagem.confronto.bombas.length > 0){
        for (let i = 0; i < personagem.confronto.bombas.length; i++) {
            add_bombas(personagem.confronto.bombas[i]);
        }
    }
    
}

function carregar_inventario(){
    // Verifica se temos objetos para adicionar:
    if(personagem.inventario.length > 0){
        for (let i = 0; i < personagem.inventario.length; i++) {
            add_inventario(personagem.inventario[i]);
        }
    }
}

function carregar_acoes(){
    // Verifica se temos objetos para adicionar:
    if(personagem.acoes_proficientes.length > 0){
        for (let i = 0; i < personagem.acoes_proficientes.length; i++) {
            add_acoes(personagem.acoes_proficientes[i]);
        }
    }
}

function carregar_conhecimento(){
    // Verifica se temos objetos para adicionar:
    if(personagem.conhecimentos.length > 0){
        for (let i = 0; i < personagem.conhecimentos.length; i++) {
            add_conhecimento(personagem.conhecimentos[i]);
        }
    }
}

function carregar_habilidade_secundaria(){
    // Verifica se temos objetos para adicionar:
    if(personagem.habilidades_esclusivas.habilidades_secundarias.length > 0){
        for (let i = 0; i < personagem.habilidades_esclusivas.habilidades_secundarias.length; i++) {
            add_habilidade_exclusiva_secundaria(personagem.habilidades_esclusivas.habilidades_secundarias[i]);
        }
    }
}

function carregar_habilidade_nao_evolutivas(){
    // Verifica se temos objetos para adicionar:
    if(personagem.habilidades_esclusivas.nao_evolutivas.length > 0){
        for (let i = 0; i < personagem.habilidades_esclusivas.nao_evolutivas.length; i++) {
            add_habilidade_exclusiva_nao_evolutiva(personagem.habilidades_esclusivas.nao_evolutivas[i]);
        }
    }
}

function carregar_habilidade_evolutivas(){
    // Verifica se temos objetos para adicionar:
    if(personagem.habilidades_esclusivas.evolutivas.length > 0){
        for (let i = 0; i < personagem.habilidades_esclusivas.evolutivas.length; i++) {
            add_habilidade_exclusiva_evolutiva(personagem.habilidades_esclusivas.evolutivas[i]);
        }
    }
}

function carregar_historia_personagem(){
    let historia = document.getElementById('historia-personagem');

    historia.innerHTML = personagem.historia_personagem;
}

function carregar_classes(){
    // Verifica se temos objetos para adicionar:
    if(personagem.classes.classe_primaria.length > 0){
        for (let i = 0; i < personagem.classes.classe_primaria.length; i++) {
            add_classe_primaria(personagem.classes.classe_primaria[i]);
        }
    }
    if(personagem.classes.classe_secundaria.length > 0){
        for (let i = 0; i < personagem.classes.classe_secundaria.length; i++) {
            add_classe_secundaria(personagem.classes.classe_secundaria[i]);
        }
    }
}
