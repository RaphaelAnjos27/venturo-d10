export class VenturoSumarioRegras extends HTMLElement{
	constructor(){
		super();
	}
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
        <link rel="stylesheet" href="/static/css/menu_sumario.css">
        <div class="offcanvas offcanvas-start" id="demo">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title">Sumário</h1>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
            <div id="accordion">
    
                <div class="card">
                    <div class="card-header">
                        <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                            Introdução
                        </a>
                    </div>
                    <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras.html">Introdução</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/01-Introducao/01-o_sistema.html">O Sistema Venturo D10</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/01-Introducao/02-estrutura.html">Estrutura do Sistema</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/01-Introducao/03-conduta.html">Conduta</a>
                                </li>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                            Mestre
                        </a>
                    </div>
                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/01-mestre.html">Mestre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/02-diario-campanha.html">Diário de Campanha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/03-fichario-mestre.html">Fichario do Mestre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/04-escudo-mestre.html">Escudo do Mestre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/05-auxilio-interpretacao.html">Auxilio na Interpretação</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/06-interpretacao-acontecimentos.html">Interpretação para Acontecimentos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/07-regra-ouro.html">A Regra de Ouro</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/02-mestre/08-regras-casa.html">Regras da Casa</a>
                                </li>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                            Jogadores
                        </a>
                    </div>
                    <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/03-jogadores/01-jogadores.html">Jogadores</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/03-jogadores/02-tipo-jogadores.html">Tipos de Jogadores</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/03-jogadores/03-falta-sessao.html">Falta na Sessão</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/03-jogadores/04-fichario-jogador.html">Fichario do Jogador</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse04">
                            Narrativa
                        </a>
                    </div>
                    <div id="collapse04" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/01-narrativa.html">Narrativa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/02-interpretando-vitalidade.html">Interpretando a Vitalidade</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/03-juntar-jogadores.html">Como juntar Jogadores</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/04-encontros-aleatorios.html">Encontros Aleatórios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/05-combate.html">Combate</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/06-viagens.html">Viagens</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/07-riscos-acoes.html">Riscos das Ações</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/08-eventos.html">Eventos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/09-ameacas.html">Ameaças</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/10-florhex.html">Flores de Hex</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/04-narrativa/11-organizacao-mesa.html">Organização da mesa</a>
                                </li>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse05">
                            Campanha e Aventura
                        </a>
                    </div>
                    <div id="collapse05" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/01-campanhas.html">Campanhas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/02-aventuras.html">Aventuras</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/03-cenario.html">Cenário</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/04-plottwist.html">Plot Twist</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/05-cenassequencias.html">Cenas e Sequências</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/06-premissas.html">Premissas e Histórias
                                        Empolgantes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/07-historiascoletivas.html">Criando Histórias
                                        Coletivas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/08-ganchos.html">Usando Ganchos
                                        Narrativos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/09-tramasparalelas.html">Usando Tramas Paralelas na
                                        Campanha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/10-estruturanarrativa.html">Estruturas Narrativas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/11-dicas.html">Dicas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/05-campanhasaventuras/12-sessaozero.html">Sessão Zero</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse06">
                            Regras do Sistema
                        </a>
                    </div>
                    <div id="collapse06" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/01-regras.html">Regras</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/02-testes.html">Testes Normais e Termos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/03-sugestao.html">Sugestões de Teste</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/04-acertos.html">Acertos e Falhas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/05-bonificacao.html">Bonificações e Penalidades</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/06-tentativa.html">Teste de Tentativa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/07-repetidos.html">Testes Repetidos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/08-oposto.html">Teste Oposto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/09-modificadores.html">Modificadores de Ocasião</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/10-inicializacao.html">Modificadores de Inicialização</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/11-restricao.html">Restrição de Pericias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/12-decisao.html">Decisao D2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/13-armas.html">Armas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/14-armaduras.html">Armaduras</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/15-escudos.html">Escudos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/15.1-inventario.html">Inventário</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/16-naves.html">Naves</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/17-morte.html">Morte do Personagem</a>
                                </li>
    
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/18-atributoraca.html">Bônus Racial</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/19-exaustao.html">Exaustão</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/20-condicoes.html">Condições</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/21-viagemtempo.html">Viagens no Tempo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/22-treinoacao.html">Treino de Ação</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/23-destino.html">Destino Adaptado</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/06-regras/24-passagemtempo.html">Passagem de Tempo e Envelhecimento</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse07">
                            Ações
                        </a>
                    </div>
                    <div id="collapse07" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/01-acoes.html">Ações</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/02-seguidas.html">Ações Seguidas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/03-multiplas.html">Multiplas Ações</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/04-conjunta.html">Ação Conjunta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/05-reacao.html">Reação</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/07-acoes/06-complementar.html">Ações Complementares</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse08">
                            Combate
                        </a>
                    </div>
                    <div id="collapse08" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/01-combatepersonagem.html">Combate de Personagem</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/03-defesa.html">Defesa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/04-dano.html">Dano e Teste de Efeito</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/05-surpresa.html">Ataque Surpresa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/06-sequente.html">Ataque Sequente</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/07-oportunidade.html">Ataque de Oportunidade</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/07.2-salvaguarda.html">Salvaguarda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/08-pontofraco.html">Ponto Fraco</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/09-categoria.html">Categorias de XP</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/08-combate/10-loot.html">Loot</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse09">
                            Tempo
                        </a>
                    </div>
                    <div id="collapse09" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/09-tempo/01-tempo.html">Estrutura e Fluxo de Tempo em RPG</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/09-tempo/02-existencia.html">Existencia</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse14">
                            Personagem
                        </a>
                    </div>
                    <div id="collapse14" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/01-introducao.html">Introdução</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/02-fichaum.html">Primeira Ficha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/03-atributos.html">Atributos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/04-fichadois.html">Segunda Ficha</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/07-fichatres.html">Terceira Ficha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/08-fichaquatro.html">Quarta Ficha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/09-fichacinco.html">Quinta Ficha</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/10-fichaaux.html">Fichas Auxiliares</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/11-criacao.html">Tabela de Criação</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/12-dicas.html">Dicas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/10-personagem/13-acordo.html">Acordo de Desenvolvimento de Personagem</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse15">
                            Elementos da Criação de Personagem
                        </a>
                    </div>
                    <div id="collapse15" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/11-pericias/01-pericias.html">Pericias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/11-pericias/05-aquisicoes.html">Aquisições</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/paginas/regras/11-pericias/06-vantagens.html">Vantagens e Desvantagens</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>
    </div>
    <div id="menu-button-sumary-1" class="d-grid">
        <button type="button" class="btn btn-outline-dark btn-block" data-bs-toggle="offcanvas" data-bs-target="#demo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                <path
                    d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path fill-rule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>
            Sumário
        </button>
    </div>
    <div id="menu-button-sumary-2" class="rounded-3 me-2 ms-2 mb-1 bg-dark clearfix fixed-bottom">
        <button type="button" class="btn btn-dark float-start p-2  m-1" data-bs-toggle="offcanvas" data-bs-target="#demo">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-task"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                <path
                    d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path fill-rule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>
        </button>
        <a href="#" type="button" class="btn btn-dark float-end p-2  m-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
        </a>
    </div>
    
    
    <br>
        `;
    }
}