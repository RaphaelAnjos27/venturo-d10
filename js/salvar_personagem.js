
let personagem = {
    versao_ficha:"",
    informacoes_gerais:{
        perfil:"00",
        campanha:"",
        personagem:"",
        jogador:"",
        raca:"",
        bonus_racial:[0,0,0] //Força, Destreza e Resistência
    },
    aparencia:{
        personalidade:"",
        comportamento:"",
        cor_cabelo:"",
        cor_olhos:"",
        altura:0,
        peso:0,
        idade_aparente:"",
        sexo:""
    },
    escudo:{
        nome:"",
        vigor:"",
        resistencia:"",
        consumo:"",
        energia:""
    },
    armadura:{
        nome:"",
        vigor_armadura:"",
        pca:"",
        durabilidade:"",
        ppd:"",
        bateria:"",
        cdn:"",
        ac:""
    },
    atributos:{
        forca:{nivel:0, bonificacao:""},
        destreza:{nivel:0, bonificacao:""},
        resistencia:{nivel:0, bonificacao:""},
        constituicao:{nivel:0, bonificacao:""},
        carisma:{nivel:0, bonificacao:""},
        percepcao:{nivel:0, bonificacao:""},
        sabedoria:{nivel:0, bonificacao:""},
        inteligencia:{nivel:0, bonificacao:""},
        poder:{nivel:0, bonificacao:""}
    },
    perceveranca:{total:0, gasto:0},
    clol:{total:0, gasto:0, bonificacao:""},
    pontos_acao:{recebidos:0, gasto:0},
    coragem:0,
    bondade:0,
    xp:0,
    pericias:[],
    vitalidade:{
        vitalidade:0,
        bonificacao_total:0,
        bonificacao_gasta:0
    },
    treino:{},
    habilidades:[],
    aquisicoes:[],
    recursos:[],
    idiomas:[],
    vantagens:[],
    confronto:{
        armas_fogo:[],
        armas_brancas:[],
        bombas:[]
    },
    inventario:[],
    acoes_proficientes:[],
    conhecimentos:[],
    habilidades_esclusivas:{
        habilidades_secundarias:[],
        evolutivas:[],
        nao_evolutivas:[]
    },
    historia_personagem:'',
    classes:{
        classe_primaria:[],
        classe_secundaria:[]
    }
};

// Botão para salvar os dados do personagem
document.getElementById('salvar-personagem').addEventListener("click", function () {
    
    //Adiciona a versao da ficha usada:
    add_versao_ficha();

    //Capturando e Atribuindo os Atributos Gerais:
    capturar_informacoes_gerais();
    capturar_aparencia();
    capturar_escudo_armadura();
    capturar_atributos();
    capturar_outros_atributos();
    capturar_pericias();
    capturar_vitalidade();
    capturar_treino();
    capturar_habilidades();
    capturar_aquisicoes();
    capturar_recursos();
    capturar_idiomas();
    capturar_vantagens_desvantagens();
    capturar_armas_fogo();
    capturar_armas_brancas();
    capturar_bombas();
    capturar_inventario();
    capturar_acoes_proficientes();
    capturar_conhecimentos();
    capturar_hab_secundaria();
    capturar_hab_nao_evolutivas();
    capturar_hab_evolutivas();
    capturar_historia_personagem();
    capturar_classes_personagem();
    
    let objetoString = JSON.stringify(personagem);

    // Criando um novo blob com o conteúdo JSON
    let blob = new Blob([objetoString], { type: "application/json" });

    // Criando um link para download
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${personagem.informacoes_gerais.personagem}.json`;
    link.click();

});

function add_versao_ficha(){
    personagem.versao_ficha = versao_ficha;
}

function capturar_informacoes_gerais() {
    //Adicionando informaçoes gerais:
    let url_img = document.getElementById('imagem-thumb').src;
    let campanha = document.getElementById('campanha').value;
    let nome_personagem = document.getElementById('Personagem').value;
    let jogador = document.getElementById('Jogador').value;
    let raca = document.getElementById('Raça').value;
    let bonus_racial_for = document.getElementById('Bonus-For').value;
    let bonus_racial_des = document.getElementById('Bonus-Des').value;
    let bonus_racial_res = document.getElementById('Bonus-Res').value;
    
    //Atribuindo Valores ao personagem
    personagem.informacoes_gerais.perfil = url_img;
    personagem.informacoes_gerais.campanha = campanha;
    personagem.informacoes_gerais.personagem = nome_personagem;
    personagem.informacoes_gerais.jogador = jogador;
    personagem.informacoes_gerais.raca = raca;
    personagem.informacoes_gerais.bonus_racial = [bonus_racial_for,bonus_racial_des,bonus_racial_res];


    
};

function capturar_aparencia(){
    let personalidade = document.getElementById('Personalidade').value;
    let cor_olhos = document.getElementById('Cor-Olhos').value;
    let cor_cabelo = document.getElementById('Cor-Cabelo').value;
    let altura = document.getElementById('Altura').value;
    let comportamento = document.getElementById('Comportamento').value;
    let peso = document.getElementById('Peso').value;
    let idade_aparente = document.getElementById('Idade').value;
    let sexo = document.getElementById('Sexo').value;

    personagem.aparencia.personalidade = personalidade;
    personagem.aparencia.comportamento = comportamento;
    personagem.aparencia.cor_cabelo = cor_cabelo;
    personagem.aparencia.cor_olhos = cor_olhos;
    personagem.aparencia.altura = parseFloat(altura);
    personagem.aparencia.peso = parseFloat(peso);
    personagem.aparencia.idade_aparente = idade_aparente;
    personagem.aparencia.sexo = sexo;

};

function capturar_escudo_armadura(){
    let escudo_nome = document.getElementById('Escudo-Nome').value;
    let escudo_vigor = document.getElementById('Escudo-Vigor').value;
    let escudo_resistencia = document.getElementById('Escudo-Resistencia').value;
    let escudo_consumo = document.getElementById('Escudo-Consumo').value;
    let escudo_energia = document.getElementById('Escudo-Energia').value;

    personagem.escudo.nome = escudo_nome;
    personagem.escudo.vigor = escudo_vigor;
    personagem.escudo.resistencia = escudo_resistencia;
    personagem.escudo.consumo = escudo_consumo;
    personagem.escudo.energia = escudo_energia;

    let armadura_nome = document.getElementById('Armadura-Nome').value;
    let armadura_vigor_armadura = document.getElementById('Armadura-Vigor').value;
    let armadura_pca = document.getElementById('Armadura-PCA').value;
    let armadura_durabilidade = document.getElementById('Armadura-Durabilidade').value;
    let armadura_ppd = document.getElementById('Armadura-PPD').value;
    let armadura_bateria = document.getElementById('Armadura-Bateria').value;
    let armadura_cdn = document.getElementById('Armadura-CDN').value;
    let armadura_ac = document.getElementById('Armadura-AC').value;

    personagem.armadura.nome = armadura_nome;
    personagem.armadura.vigor_armadura = armadura_vigor_armadura;
    personagem.armadura.pca = armadura_pca;
    personagem.armadura.durabilidade = armadura_durabilidade;
    personagem.armadura.ppd = armadura_ppd;
    personagem.armadura.bateria = armadura_bateria;
    personagem.armadura.cdn = armadura_cdn;
    personagem.armadura.ac = armadura_ac;

};

function capturar_atributos(){
    let atributo_forca = document.getElementById('Atributo-Forca').value;
    let atributo_destreza = document.getElementById('Atributo-Destreza').value;
    let atributo_resistencia = document.getElementById('Atributo-Resistencia').value;
    let atributo_constituicao = document.getElementById('Atributo-Constituicao').value;
    let atributo_carisma = document.getElementById('Atributo-Carisma').value;
    let atributo_percepcao = document.getElementById('Atributo-Percepcao').value;
    let atributo_sabedoria = document.getElementById('Atributo-Sabedoria').value;
    let atributo_inteligencia = document.getElementById('Atributo-Inteligencia').value;
    let atributo_poder = document.getElementById('Atributo-Poder').value;

    let boni_atributo_forca = document.getElementById('Boni-Atributo-Forca').value;
    let boni_atributo_destreza = document.getElementById('Boni-Atributo-Destreza').value;
    let boni_atributo_resistencia = document.getElementById('Boni-Atributo-Resistencia').value;
    let boni_atributo_constituicao = document.getElementById('Boni-Atributo-Constituicao').value;
    let boni_atributo_carisma = document.getElementById('Boni-Atributo-Carisma').value;
    let boni_atributo_percepcao = document.getElementById('Boni-Atributo-Percepcao').value;
    let boni_atributo_sabedoria = document.getElementById('Boni-Atributo-Sabedoria').value;
    let boni_atributo_inteligencia = document.getElementById('Boni-Atributo-Inteligencia').value;
    let boni_atributo_poder = document.getElementById('Boni-Atributo-Poder').value;

    personagem.atributos.forca.nivel = parseInt(atributo_forca);
    personagem.atributos.destreza.nivel = parseInt(atributo_destreza);
    personagem.atributos.resistencia.nivel = parseInt(atributo_resistencia);
    personagem.atributos.constituicao.nivel = parseInt(atributo_constituicao);
    personagem.atributos.carisma.nivel = parseInt(atributo_carisma);
    personagem.atributos.percepcao.nivel = parseInt(atributo_percepcao);
    personagem.atributos.sabedoria.nivel = parseInt(atributo_sabedoria);
    personagem.atributos.inteligencia.nivel = parseInt(atributo_inteligencia);
    personagem.atributos.poder.nivel = parseInt(atributo_poder);

    personagem.atributos.forca.bonificacao = boni_atributo_forca;
    personagem.atributos.destreza.bonificacao = boni_atributo_destreza;
    personagem.atributos.resistencia.bonificacao = boni_atributo_resistencia;
    personagem.atributos.constituicao.bonificacao = boni_atributo_constituicao;
    personagem.atributos.carisma.bonificacao = boni_atributo_carisma;
    personagem.atributos.percepcao.bonificacao = boni_atributo_percepcao;
    personagem.atributos.sabedoria.bonificacao = boni_atributo_sabedoria;
    personagem.atributos.inteligencia.bonificacao = boni_atributo_inteligencia;
    personagem.atributos.poder.bonificacao = boni_atributo_poder;


};

function capturar_outros_atributos(){
    let perceveranca_total = document.getElementById('Perceveranca-Total').value;
    let perceveranca_gasta = document.getElementById('Perceveranca-Gasta').value;

    let clol_total = document.getElementById('Clol-Total').value;
    let clol_gasto = document.getElementById('Clol-Gasto').value;
    let clol_bonificacao = document.getElementById('Clol-Bonificacao').value;

    let pontos_acao_recebidos = document.getElementById('Pontos-Acao-Total').value; 
    let pontos_acao_gasto = document.getElementById('Pontos-Acao-Gasto').value;

    let coragem = document.getElementById('Coragem-Nivel').value;

    let bondade = document.getElementById('bondade_controle').value;

    let xp_total = document.getElementById('Pontos-XP').value;

    personagem.perceveranca.total = parseInt(perceveranca_total);
    personagem.perceveranca.gasto = parseInt(perceveranca_gasta);
    
    personagem.clol.total = parseInt(clol_total);
    personagem.clol.gasto = parseInt(clol_gasto);
    personagem.clol.bonificacao = parseInt(clol_bonificacao);

    personagem.pontos_acao.recebidos = parseInt(pontos_acao_recebidos);
    personagem.pontos_acao.gasto = parseInt(pontos_acao_gasto);

    personagem.coragem = parseInt(coragem);
    personagem.bondade = parseInt(bondade);
    personagem.xp = parseInt(xp_total);
};

function capturar_pericias(){
    let container_pericia = document.getElementById('pericias-container');
    personagem.pericias=[];
    // Verificamos se existe alguma pericia dentro do nosso container.
    if (container_pericia.childElementCount == 0){
        return
    }

    let pericias_adicionadas = container_pericia.children;

    for (var i = 0; i < pericias_adicionadas.length; i++) {
        var elementoFilho = pericias_adicionadas[i];

        // Fazendo algo com cada elemento filho
        var nome_pericia_input = elementoFilho.querySelector('[name="nome-pericia"]').value;
        var combo_pericia_input = elementoFilho.querySelector('[name="combo-pericia"]').value;
        var nivel_pericia_input = elementoFilho.querySelector('[name="nivel-pericia"]').value;
        var especializacao_pericia_input = elementoFilho.querySelector('[name="especializacao-pericia"]').value;
        personagem.pericias.push({
            nome:nome_pericia_input,
            combo:combo_pericia_input,
            nivel:nivel_pericia_input,
            especializacao:especializacao_pericia_input
        })
        
    }    
    
    
};

function capturar_vitalidade(){
    let vitalidade_total = document.getElementById('vitalidade-total').value;
    let vitalidade_bonificacao_total = document.getElementById('vitalidade-bonificacao-total').value;
    let vitalidade_bonificacao_gasta = document.getElementById('vitalidade-bonificacao-gasto').value;

    personagem.vitalidade.vitalidade = parseInt(vitalidade_total);
    personagem.vitalidade.bonificacao_total = parseInt(vitalidade_bonificacao_total);
    personagem.vitalidade.bonificacao_gasta = parseInt(vitalidade_bonificacao_gasta);

};

function capturar_treino(){
    let treino={
        slot_01:{
            atributo:document.getElementById('atributo-treino-slot-1').value,
            quantidade_treino:document.getElementById('qtd-treino-slot-1').value,
            treinado:parseInt(document.getElementById('treinado-slot-1').value)
        },
        slot_02:{
            atributo:document.getElementById('atributo-treino-slot-2').value,
            quantidade_treino:document.getElementById('qtd-treino-slot-2').value,
            treinado:parseInt(document.getElementById('treinado-slot-2').value)
        },
        slot_03:{
            atributo:document.getElementById('atributo-treino-slot-3').value,
            quantidade_treino:document.getElementById('qtd-treino-slot-3').value,
            treinado:parseInt(document.getElementById('treinado-slot-3').value)
        },
        slot_04:{
            atributo:document.getElementById('atributo-treino-slot-4').value,
            quantidade_treino:document.getElementById('qtd-treino-slot-4').value,
            treinado:parseInt(document.getElementById('treinado-slot-4').value)
        },
    }
    personagem.treino = treino;
};

function capturar_habilidades(){
    let container = document.getElementById('container-habilidade');
    personagem.habilidades = [];
    // Verificamos se existe alguma pericia dentro do nosso container.
    if (container.childElementCount == 2){
        return
    }
    
    let atributos_adicionados = container.children;

    
    for (var i = 0; i < atributos_adicionados.length; i++) {
        let elementoFilho = atributos_adicionados[i];
        // Fazendo algo com cada elemento filho
        
        //Filtramos apenas os elementos filhos que possuem as habilidades
        if(elementoFilho.classList.contains('card_atributos')){
            let nome_habilidade_input = elementoFilho.querySelector('[name="nome-habilidade"]').value;
            let nivel_habilidade_input = elementoFilho.querySelector('[name="nivel-habilidade"]').value;
            
            personagem.habilidades.push({
                nome:nome_habilidade_input,
                nivel:parseInt(nivel_habilidade_input)
            })
        }
        
        
        
    }    
    
    
};

function capturar_aquisicoes(){
    let container = document.getElementById('container-aquisicoes');
    personagem.aquisicoes = [];
    // Verificamos se existe alguma pericia dentro do nosso container.
    if (container.childElementCount == 2){
        return
    }
    
    let atributos_adicionados = container.children;

    
    for (var i = 0; i < atributos_adicionados.length; i++) {
        let elementoFilho = atributos_adicionados[i];
        // Fazendo algo com cada elemento filho
        
        //Filtramos apenas os elementos filhos que possuem as habilidades
        if(elementoFilho.classList.contains('card_atributos')){
            let nome_aquisicao_input = elementoFilho.querySelector('[name="nome-aquisicao"]').value;
            let nivel_aquisicao_input = elementoFilho.querySelector('[name="nivel-aquisicao"]').value;
            
            personagem.aquisicoes.push({
                nome:nome_aquisicao_input,
                nivel:parseInt(nivel_aquisicao_input)
            })
        }
        
        
        
    }    
    
    
};

function capturar_recursos(){
    let container = document.getElementById('container-recursos');
    personagem.recursos = [];
    // Verificamos se existe alguma pericia dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_moeda_input = elementoFilho.querySelector('[name="recursos-nome"]').value;
        let valor_moeda_input = elementoFilho.querySelector('[name="recursos-valor"]').value;

        personagem.recursos.push({
            moeda:nome_moeda_input,
            valor:valor_moeda_input
        });
        
    }    
    
    
};

function capturar_idiomas(){
    let container = document.getElementById('container-idiomas');
    personagem.idiomas = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_idioma_input = elementoFilho.querySelector('[name="idioma-input"]').value;

        personagem.idiomas.push(nome_idioma_input);
        
    }    
    
    
};

function capturar_vantagens_desvantagens(){
    let container = document.getElementById('container-vantagem-desvantagem');
    personagem.vantagens = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_vantagem_input = elementoFilho.querySelector('[name="nome-vantagem-input"]').value;
        let valor_vantagem_input = elementoFilho.querySelector('[name="valor-vantagem-input"]').value;
        let descricao_vantagem_input = elementoFilho.querySelector('[name="descricao-vantagem-input"]').value;

        personagem.vantagens.push({
            nome:nome_vantagem_input,
            valor:valor_vantagem_input,
            descricao:descricao_vantagem_input
        });
        
    }    
    
    
};

function capturar_armas_fogo(){
    let container = document.getElementById('container-armas-fogo');
    personagem.confronto.armas_fogo = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-nome"]').value;
        let bonus_racial_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-bonus-racial"]').value;
        let capacidade_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-capacidade"]').value;
        let dano_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-dano"]').value;
        let distancia_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-distancia"]').value;
        let carga_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-carga"]').value;
        let recarga_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-recarga"]').value;
        let nda_arma_fogo_input = elementoFilho.querySelector('[name="arma-fogo-nda"]').value;

        personagem.confronto.armas_fogo.push({
            nome:nome_arma_fogo_input,
            bonus_racial:bonus_racial_arma_fogo_input,
            capacidade:capacidade_arma_fogo_input,
            dano:parseInt(dano_arma_fogo_input),
            distancia:parseInt(distancia_arma_fogo_input),
            carga:carga_arma_fogo_input,
            recarga:recarga_arma_fogo_input,
            nda:nda_arma_fogo_input
        });
        
    }    
    
    
};

function capturar_armas_brancas(){
    let container = document.getElementById('container-armas-brancas');
    personagem.confronto.armas_brancas = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let quantiade_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-quantidade"]').value;
        let nome_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-nome"]').value;
        let bonus_racial_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-bonus-racial"]').value;
        let nivel_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-nivel"]').value;
        let dano_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-dano"]').value;
        let nda_arma_branca_input = elementoFilho.querySelector('[name="armas-branca-nda"]').value;
    

        personagem.confronto.armas_brancas.push({
            quantiade: quantiade_arma_branca_input,
            nome: nome_arma_branca_input,
            bonus: bonus_racial_arma_branca_input,
            nivel: nivel_arma_branca_input,
            dano: dano_arma_branca_input,
            nda: nda_arma_branca_input
        });
        
    }    
    
    
};

function capturar_bombas(){
    let container = document.getElementById('container-bombas');
    personagem.confronto.bombas = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let quantidade_bombas_input = elementoFilho.querySelector('[name="bomas-quantidade"]').value;
        let nome_bombas_input = elementoFilho.querySelector('[name="bomas-nome"]').value;
        let raio_bombas_input = elementoFilho.querySelector('[name="bomas-raio"]').value;
        let dano_bombas_input = elementoFilho.querySelector('[name="bomas-dano"]').value;
        let tsa_bombas_input = elementoFilho.querySelector('[name="bomas-tsa"]').value;
        let nvb_bombas_input = elementoFilho.querySelector('[name="bomas-nvb"]').value;
        let turnos_bombas_input = elementoFilho.querySelector('[name="bomas-turnos"]').value;
        let act_bombas_input = elementoFilho.querySelector('[name="bomas-act"]').value;
        let nda_bombas_input = elementoFilho.querySelector('[name="bomas-nda"]').value;
        let explosivos_bombas_input = elementoFilho.querySelector('[name="bomas-explivos"]').value;
        

        personagem.confronto.bombas.push({
            quantidade: quantidade_bombas_input,
            nome: nome_bombas_input,
            raio: raio_bombas_input,
            dano: dano_bombas_input,
            tsa: tsa_bombas_input,
            nvb: nvb_bombas_input,
            turnos: turnos_bombas_input,
            act: act_bombas_input,
            nda: nda_bombas_input,
            explosivos: explosivos_bombas_input
        });
        
    }    
    
    
};

function capturar_inventario(){
    let container = document.getElementById('container-inventario');
    personagem.inventario = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let quantidade_item_inventario_slot = elementoFilho.querySelector('[name="quantidade-item-inventario-slot"]').value;
        let nome_item_inventario_slot = elementoFilho.querySelector('[name="nome-item-inventario-slot"]').value;
        let armazenado_item_inventario_slot = elementoFilho.querySelector('[name="armazenado-item-inventario-slot"]').value;
        
        

        personagem.inventario.push({
            quantidade:parseInt(quantidade_item_inventario_slot),
            nome:nome_item_inventario_slot,
            armazenado:armazenado_item_inventario_slot
        });
        
    }    
    
    
};

function capturar_acoes_proficientes(){
    let container = document.getElementById('container-acoes-proficientes');
    personagem.acoes_proficientes = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_acoes_procientes_slot = elementoFilho.querySelector('[name="nome-acoes-proficientes"]').value;
        let teste_acoes_procientes_slot = elementoFilho.querySelector('[name="teste-acoes-proficientes"]').value;
        let nd_acoes_procientes_slot = elementoFilho.querySelector('[name="nd-acoes-proficientes"]').value;
        let requisitos_acoes_procientes_slot = elementoFilho.querySelector('[name="requisitos-acoes-proficientes"]').value;
        let efeito_acoes_procientes_slot = elementoFilho.querySelector('[name="efeito-acoes-proficientes"]').value;
        let descricao_acoes_procientes_slot = elementoFilho.querySelector('[name="descricao-acoes-proficientes"]').value;
        
        personagem.acoes_proficientes.push({
            nome: nome_acoes_procientes_slot,
            teste: teste_acoes_procientes_slot,
            nd: nd_acoes_procientes_slot,
            requisitos: requisitos_acoes_procientes_slot,
            efeito: efeito_acoes_procientes_slot,
            descricao: descricao_acoes_procientes_slot
        });
        
    }    
    
    
};

function capturar_conhecimentos(){
    let container = document.getElementById('container-conhecimentos');
    personagem.conhecimentos = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let titulo_conhecimento_input = elementoFilho.querySelector('[name="titulo_conhecimento_input"]').value;
        let descricao_conhecimento_input = elementoFilho.querySelector('[name="descricao_conhecimento_input"]').value;
        

        personagem.conhecimentos.push({
            titulo: titulo_conhecimento_input,
            descricao: descricao_conhecimento_input
        });
        
    }    
    
    
};

function capturar_hab_secundaria(){
    let container = document.getElementById('container-hab-secundarias');
    personagem.habilidades_esclusivas.habilidades_secundarias = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Capiturando os Checkbox
        let checkbox_vocal = elementoFilho.querySelector('[name="checkbox-hab-secundaria-vocal-input"]').checked;
        let checkbox_gestual = elementoFilho.querySelector('[name="checkbox-hab-secundaria-gestual-input"]').checked;
        let checkbox_material = elementoFilho.querySelector('[name="checkbox-hab-secundaria-material-input"]').checked;
        let checkbox_simbolo = elementoFilho.querySelector('[name="checkbox-hab-secundaria-simbolo-input"]').checked;
        let checkbox_leitura = elementoFilho.querySelector('[name="checkbox-hab-secundaria-leitura-input"]').checked;

        // Capturando os restantes dos atributos:
        let nome_hab_secundaria_input = elementoFilho.querySelector('[name="nome-hab-secundaria-input"]').value;
        let concentracao_hab_secundaria_input = elementoFilho.querySelector('[name="concentracao-hab-secundaria-input"]').value;
        let area_hab_secundaria_input = elementoFilho.querySelector('[name="area-hab-secundaria-input"]').value;
        let tipo_hab_secundaria_input = elementoFilho.querySelector('[name="tipo-hab-secundaria-input"]').value;
 

        personagem.habilidades_esclusivas.habilidades_secundarias.push({
            nome: nome_hab_secundaria_input,
            concentracao: concentracao_hab_secundaria_input,
            area: area_hab_secundaria_input,
            tipo: tipo_hab_secundaria_input,
            invocacao:{
                vocal: checkbox_vocal,
                gestual: checkbox_gestual,
                material: checkbox_material,
                simbolo: checkbox_simbolo,
                leitura: checkbox_leitura
            }
        });
        
    }    
    
    
};

function capturar_hab_nao_evolutivas(){
    let container = document.getElementById('container-hab-exclusiva');
    personagem.habilidades_esclusivas.nao_evolutivas = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_habilidade_nv_input = elementoFilho.querySelector('[name="nome-hab-nao-evolutiva-input"]').value;
        let teste_habilidade_nv_input = elementoFilho.querySelector('[name="teste-hab-nao-evolutiva-input"]').value;
        let nd_habilidade_nv_input = elementoFilho.querySelector('[name="nd-hab-nao-evolutiva-input"]').value;
        let origem_habilidade_nv_input = elementoFilho.querySelector('[name="origem-hab-nao-evolutiva-input"]').value;
        let descricao_habilidade_nv_input = elementoFilho.querySelector('[name="descricao-hab-nao-evolutiva-input"]').value;
        

        personagem.habilidades_esclusivas.nao_evolutivas.push({
            nome: nome_habilidade_nv_input,
            teste: teste_habilidade_nv_input,
            nd: nd_habilidade_nv_input,
            origem: origem_habilidade_nv_input,
            descricao: descricao_habilidade_nv_input
        });
        
    }    
    
    
};

function capturar_hab_evolutivas(){
    let container = document.getElementById('container-hab-exclusiva-2');
    personagem.habilidades_esclusivas.evolutivas = [];
    // Verificamos se existe alguma atributo dentro do nosso container.
    if (container.childElementCount == 0){
        return
    }

    let atributo_adicionado = container.children;

    for (var i = 0; i < atributo_adicionado.length; i++) {
        let elementoFilho = atributo_adicionado[i];

        // Fazendo algo com cada elemento filho
        let nome_habilidade_evolutiva_input = elementoFilho.querySelector('[name="nome-hab-evolutiva-input"]').value;
        let descricao_habilidade_evolutiva_input = elementoFilho.querySelector('[name="descricao-hab-evolutiva-input"]').value;

        let nivel_01_nome_hab_input = elementoFilho.querySelector('[name="nv-01-nome-hab-evolutiva-input"]').value;
        let nivel_01_teste_hab_input = elementoFilho.querySelector('[name="nv-01-teste-hab-evolutiva-input"]').value;
        let nivel_01_descricao_hab_input = elementoFilho.querySelector('[name="nv-01-descricao-hab-evolutiva-input"]').value;

        let nivel_02_nome_hab_input = elementoFilho.querySelector('[name="nv-02-nome-hab-evolutiva-input"]').value;
        let nivel_02_teste_hab_input = elementoFilho.querySelector('[name="nv-02-teste-hab-evolutiva-input"]').value;
        let nivel_02_descricao_hab_input = elementoFilho.querySelector('[name="nv-02-descricao-hab-evolutiva-input"]').value;

        let nivel_03_nome_hab_input = elementoFilho.querySelector('[name="nv-03-nome-hab-evolutiva-input"]').value;
        let nivel_03_teste_hab_input = elementoFilho.querySelector('[name="nv-03-teste-hab-evolutiva-input"]').value;
        let nivel_03_descricao_hab_input = elementoFilho.querySelector('[name="nv-03-descricao-hab-evolutiva-input"]').value;

        let nivel_04_nome_hab_input = elementoFilho.querySelector('[name="nv-04-nome-hab-evolutiva-input"]').value;
        let nivel_04_teste_hab_input = elementoFilho.querySelector('[name="nv-04-teste-hab-evolutiva-input"]').value;
        let nivel_04_descricao_hab_input = elementoFilho.querySelector('[name="nv-04-descricao-hab-evolutiva-input"]').value;

        let nivel_05_nome_hab_input = elementoFilho.querySelector('[name="nv-05-nome-hab-evolutiva-input"]').value;
        let nivel_05_teste_hab_input = elementoFilho.querySelector('[name="nv-05-teste-hab-evolutiva-input"]').value;
        let nivel_05_descricao_hab_input = elementoFilho.querySelector('[name="nv-05-descricao-hab-evolutiva-input"]').value;

        personagem.habilidades_esclusivas.evolutivas.push({
            nome_hab: nome_habilidade_evolutiva_input,
            descricao_geral: descricao_habilidade_evolutiva_input,
            nivel_01:{
                nome_nivel:nivel_01_nome_hab_input,
                teste:nivel_01_teste_hab_input,
                descricao:nivel_01_descricao_hab_input
            },
            nivel_02:{
                nome_nivel:nivel_02_nome_hab_input,
                teste:nivel_02_teste_hab_input,
                descricao:nivel_02_descricao_hab_input
            },
            nivel_03:{
                nome_nivel:nivel_03_nome_hab_input,
                teste:nivel_03_teste_hab_input,
                descricao:nivel_03_descricao_hab_input
            },
            nivel_04:{
                nome_nivel:nivel_04_nome_hab_input,
                teste:nivel_04_teste_hab_input,
                descricao:nivel_04_descricao_hab_input
            },
            nivel_05:{
                nome_nivel:nivel_05_nome_hab_input,
                teste:nivel_05_teste_hab_input,
                descricao:nivel_05_descricao_hab_input
            },
        });
        
    }    
    
    
};

function capturar_historia_personagem(){
    let historia = document.getElementById("historia-personagem");
    
    personagem.historia_personagem = historia.innerHTML;


};

function capturar_classes_personagem(){
    
    personagem.classes.classe_primaria = [];
    personagem.classes.classe_secundaria = [];

    let classes_primaria = document.getElementById("classe-primaria-container");
    let classes_secundaria = document.getElementById("classe-secundaria-container");

    // Capturando as classes primarias:
    if (classes_primaria.childElementCount > 2){
        let atributo_adicionado = classes_primaria.children;
        
        for (var i = 0; i < atributo_adicionado.length; i++) {
            let elementoFilho = atributo_adicionado[i];
            // Fazendo algo com cada elemento filho
            
            if(elementoFilho.classList.contains('card_atributos')){
                let nome_classe_input = elementoFilho.querySelector('[name="nome-classe"]').value;
                let consumo_classe_input = elementoFilho.querySelector('[name="consumo-classe"]').value;
                let descricao_classe_input = elementoFilho.querySelector('[name="descricao-geral-classe"]').value;
                
        
                personagem.classes.classe_primaria.push({
                    nome:nome_classe_input,
                    consumo:consumo_classe_input,
                    descricao:descricao_classe_input
                });
            }
            
        }   
    }

    // Capturando as Classes Secundárias
    if (classes_secundaria.childElementCount > 2){
        let atributo_adicionado = classes_secundaria.children;

        for (var i = 0; i < atributo_adicionado.length; i++) {
            let elementoFilho = atributo_adicionado[i];
    
            if(elementoFilho.classList.contains('card_atributos')){
            // Fazendo algo com cada elemento filho
                let nome_classe_input = elementoFilho.querySelector('[name="nome-classe"]').value;
                let consumo_classe_input = elementoFilho.querySelector('[name="consumo-classe"]').value;
                let descricao_classe_input = elementoFilho.querySelector('[name="descricao-geral-classe"]').value;
                
        
                personagem.classes.classe_secundaria.push({
                    nome:nome_classe_input,
                    consumo:consumo_classe_input,
                    descricao:descricao_classe_input
                });
            }
            
        }
    }
    
}