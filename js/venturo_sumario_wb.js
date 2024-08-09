export class VenturoSumarioWorldBuilding extends HTMLElement {
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

                        <!-- Item de Menu -->
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
                                            <a class="nav-link" href="/paginas/wb.html">Introdução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/01-conceitos.html">Conceitos Básicos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/01.01-referencias.html">Referencias na Criação de Mundos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/02-resumo.html">Resumo de Worldbuilding</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/03-linha-tempo.html">Linha do Tempo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/04-guias.html">Guias de Worldbuilding</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/05-checklist.html">Lista de Verificação</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/06-organizando.html">Organizando o Worldbuilding</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/07-pontas-soltas.html">Pontas Soltas na Criação de Mundos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/01-introducao/08-leismagicas.html">Leis Naturais da Magia</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#astronomia">
                                    Astronomia
                                </a>
                            </div>
                            <div id="astronomia" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/01-introducao.html">Introdução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/02-orbitas.html">Órbitas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/03-baricentro.html">Baricentro</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/04-inclinacao.html">Inlinação</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/05-equador.html">Linha do Equador</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/06-poeira.html">Poeira Estelar</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/07-galaxias.html">Galáxias</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/08-buracos.html">Buraco Negro</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/09-estrelas.html">Estrelas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/10-planetas.html">Planetas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/11-sistemas.html">Sistemas Planetários</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/02-astronomia/12-aneis.html">Aneis Planetários</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#geografia">
                                    Geografia
                                </a>
                            </div>
                            <div id="geografia" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/01-introducao.html">Introdução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/02-paisagens.html">Paisagens</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/03-continente.html">Como os Continentes Afetam a Evolução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/04-fronteiras.html">Tipos de Fronteiras</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/05-recursos.html">Recursos Naturais</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/06-paises.html">Como nascem os países</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/07-estados.html">Oque são Estados</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/03-geografia/08-metropoles.html">Metrópoles, Colônias e repúblicas</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#historia">
                                    História
                                </a>
                            </div>
                            <div id="historia" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/04-historia/01-introducao.html">História Básica</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/04-historia/02-antiga.html">Idade Antiga</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/04-historia/03-media.html">Idade Média</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/04-historia/04-moderna.html">Idade Moderna</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/04-historia/05-contemporanea.html">Idade Contemporânea</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#dicas">
                                    Dicas de Worldbuilding
                                </a>
                            </div>
                            <div id="dicas" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/01-introducao.html">Dicas de Criação</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/02-feudalismo.html">Feudalismo e Politica</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/03-cultura.html">Cultura Engessada</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/04-poder.html">Ausência de poder governamental</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/05-conflito.html">Conflitos Externos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/06-opressao.html">Opressão do mais forte</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/07-consequencias.html">Ações causam consequências</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/08-mundos.html">Mundos Vivos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/09-verossimilhanca.html">A verossimilhança em fantasias</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/10-ideias.html">Formas de conseguir ideias para seus mundos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/11-naming.html">Técnicas de naming</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/05-dicas/12-historias.html">Criando a história de seu mundo</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#cenarios">
                                    Cenários
                                </a>
                            </div>
                            <div id="cenarios" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/01-introducao.html">Cenários</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/02-antes.html">Antes de criamos o mundo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/03-primeiro.html">Primeiro Método de criação de mundos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/04-segundo.html">Segundo Método de criação de mundos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/05-arquitetura.html">A Arquitetura moldada pelo Mundo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/06-cenarios/06-masmorra.html">Como Usar Masmorras</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#sociedade">
                                    Sociedade e Economia
                                </a>
                            </div>
                            <div id="sociedade" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/01-introducao.html">A Sociedade</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/02-economia.html">Economia</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/03-nacoes.html">Nações</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/04-cidades.html">Cidades</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/05-culturas.html">Culturas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/06-mitologia.html">Pensando na Mitologia</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/07-politica.html">Como desenvolver o Governo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/08-racas.html">Criando uma raça</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/07-sociedade/09-especies.html">Criando Espécimes</a>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#idiomas">
                                    Idiomas
                                </a>
                            </div>
                            <div id="idiomas" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/08-conlang/01-introducao.html">Idiomas (Conlang)</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/08-conlang/02-arvore.html">Arvore dos idiomas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/08-conlang/03-nunca.html">Nunca crie um idioma inteiro</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/08-conlang/04-basico.html">O Básico de Conlang</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#personagens">
                                    Personagens
                                </a>
                            </div>
                            <div id="personagens" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/09-personagens/01-introducao.html">Personagens</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/09-personagens/01.1-arquetipos.html">Arquétipos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/09-personagens/02-viloes.html">Vilões</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/09-personagens/03-background.html">Background</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#aventuras">
                                    Campanhas e Aventuras
                                </a>
                            </div>
                            <div id="aventuras" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/01-introducao.html">Planejamento de campanha</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/01.1-dicasaventuras.html">Dicas de Aventuras</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/02-criando.html">Criando Aventuras</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/03-historia.html">Historias</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/04-criatividade.html">Criativiade</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/05-improviso.html">Improviso</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/10-aventuras/06-missoes.html">Missões Secundárias</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#elementos">
                                    Elementos de Campanha
                                </a>
                            </div>
                            <div id="elementos" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/01-introducao.html">Elementos do mundo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/02-magia.html">Sistema de magia</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/03-itens.html">Itens Mágicos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/03.1-itenseservicos.html">Itens e Serviços</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/04-elementos.html">Materiais/Elementos Fantasticos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/05-energias.html">Energias & Forças</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/06-armadilhas.html">Armadilhas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/07-comercio.html">Comércio</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/08-organizacao.html">Organizações</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/09-fauna.html">Fauna</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/10-flora.html">Flora</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/11-calendario.html">Calendário</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/paginas/worldbuilding/11-elementos/12-mitos.html">Mitos Lendas E Histórias</a>
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