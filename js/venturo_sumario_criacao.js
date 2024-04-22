export class VenturoSumarioCriacao extends HTMLElement {
    constructor() {
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
                                <a class="nav-link" href="/paginas/criacao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/01.1-direitos.html">Plágio e Inspiração</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/01.2-criandocenario.html">Estratégias e Flexibilidade na Criação de Cenários</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/01-habilidades.html">Habilidades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/02-locais.html">Locais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/03-concepcao.html">Concepção</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/03.1-Aquisicoes.html">Criando Aquisições</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/04-coletividade.html">Universos Coletivos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/05-descricao.html">Descrição de Atributos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/06-cenario.html">Cenários</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/07-organizacao.html">Organização de Mundo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/01-introducao/08-divulgacao.html">Divulgação de Cenários e Criação de Conteúdo</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#2">
                        Cosmo
                    </a>
                </div>
                <div id="2" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/02-cosmo/01-universo.html">Universo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/02-cosmo/02-planos.html">Planos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/02-cosmo/03-dimensoes.html">Dimensões</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#3">
                        Objetos Celestes
                    </a>
                </div>
                <div id="3" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/03-celestes/01-celestes.html">Objetos Celestes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/03-celestes/02-mundo.html">Criando um Mundo</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#4">
                        Mapas
                    </a>
                </div>
                <div id="4" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/04-mapa/01-mapas.html">Mapas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/04-mapa/02-estelar.html">Mapa Estelar</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#5">
                        Civilização
                    </a>
                </div>
                <div id="5" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05-racas/01-racas.html">Civilização</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05-racas/02-inicio.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05-racas/03-racas.html">Criando uma Civilização</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05-racas/05-especies.html">Especies</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#5.1">
                        Nações
                    </a>
                </div>

                <div id="5.1" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05.1-nacoes/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05.1-nacoes/02-nacao.html">Nações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/05.1-nacoes/03-cidades.html">Cidades e Reinos</a>
                            </li>
                            
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#6">
                        Corporações
                    </a>
                </div>
                <div id="6" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/01-corporacoes.html">Corporações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/02-ramificacao.html">Áreas e Ramificações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/03-hierarquia.html">Hierarquias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/04-criacao.html">Criação de uma organização</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/05-guildas.html">Criando Guildas e Grupos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/06-corporacao/06-carreira.html">Carreiras através das organizações</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#7">
                        Classes
                    </a>
                </div>
                <div id="7" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/07-classe/01-classes.html">Classes</a>
                            </li>
                            
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#8">
                        Armas
                    </a>
                </div>
                <div id="8" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/01-armas.html">Armas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/02-fogo.html">Armas de Fogo, Energia e Antimatéria</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/03-branca.html">Armas Brancas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/04-bombas.html">Bombas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/05-poder.html">Grande Poder</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/08-armas/06-tabela.html">Tabela de Referencia</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#9">
                        Armaduras
                    </a>
                </div>
                <div id="9" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/09-armadura/01-armadura.html">Criação de Armaduras</a>
                            </li>
                            
                            
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#10">
                        Veiculos
                    </a>
                </div>
                <div id="10" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/02-categorias.html">Categorias</a>
                            </li>      
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/03-caracteristicas.html">Caracteristicas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/04-componentes.html">Componentes</a>
                            </li>    
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/05-poder.html">Poder de Fogo</a>
                            </li>   
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/10-veiculo/06-atributos.html">Atributos dos Veículos</a>
                            </li>                     
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#11">
                        Estações e Bases
                    </a>
                </div>
                <div id="11" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/11-estacoes/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/11-estacoes/02-criacao.html">Criação</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/11-estacoes/03-poder.html">Poder de Fogo</a>
                            </li>
                                            
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#12">
                        Personagens Não Jogáveis
                    </a>
                </div>
                <div id="12" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/02-irrelevantes.html">Não Relevante</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/03-importantes.html">Importantes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/04-viloes.html">Vilões</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/04.1-motivacao.html">Motivações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/04.2-segredos.html">Segredos</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/04.3-relacionamentos.html">Relacionamentos</a>
                            </li>  
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/05-auxiliar.html">Personagens Auxiliáres</a>
                            </li>   
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/06-usando.html">Maneiras de usar PnJ</a>
                            </li>     
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/12-pnj/07-relacionamento.html">Mapa de Relacionamento</a>
                            </li>  
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#13">
                        Criaturas
                    </a>
                </div>
                <div id="13" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/02-animais.html">Animais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/03-monstros.html">Monstros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/04-tecnologicos.html">Tecnológicos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/05-divinos.html">Seres Divinos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/06-malignos.html">Seres Malignos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/07-infectados.html">Infectados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/13-criaturas/08-sobrenaturais.html">Sobrenaturais</a>
                            </li>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#14">
                        Itens
                    </a>
                </div>
                <div id="14" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/01-artefactos.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/02-fontes.html">Fontes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/03-combustivel.html">Combustivel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/04-protecao.html">Proteção e Escudos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/05-restauracao.html">Restaruação e Ajuda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/06-porte.html">Porte</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/07-objetos.html">Objetos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/14-itens/08-mecanismo.html">Mecanismo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#15">
                        Habilidades Secundárias
                    </a>
                </div>
                <div id="15" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/15-habilidades/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/15-habilidades/02-elementos.html">Elementos de uma Habilidade</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/15-habilidades/03-criando.html">Criando Habilidades Secundárias</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="btn" data-bs-toggle="collapse" href="#16">
                        Deidades
                    </a>
                </div>
                <div id="16" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/02-primordial.html">Divindades Primordiais</a>
                            </li>  
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/03-contato.html">Contato</a>
                            </li>   
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/04-mandamentos.html">Mandamentos</a>
                            </li>     
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/05-artefatos.html">Artefatos Divinos</a>
                            </li>     
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/06-caracteristicas.html">Características</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/07-habilidades.html">Habilidades Divinas</a>
                            </li>  
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/08-especiais.html">Divindades Especiais</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/09-normais.html">Divindades Normais</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/10-celestiais.html">Seres Celestiais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/criacao/16-divindades/11-filhos.html">Filhos das divindades primordiais</a>
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