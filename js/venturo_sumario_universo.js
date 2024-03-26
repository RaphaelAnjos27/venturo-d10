export class VenturoSumarioUniverso extends HTMLElement {
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
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse10">
                        Universo
                    </a>
                </div>
                <div id="collapse10" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/01-sistema-estelar.html">Sistema Estelar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/02-organizacoes.html">Organizações Espaciais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/03-ciclo.html">Ciclo Comercial e Estações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/04-guildas.html">Guildas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/05-civilizacoes.html">Tipos de Civilizações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/01-introducao/06-realidadeabstrata.html">A Existência Abstrata</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse11">
                        Mitologia Venturo
                    </a>
                </div>
                <div id="collapse11" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/02-energia.html">Energia Auforem</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/03-abys.html">Unyvirsaly'Abys</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/04-primordiais.html">Divindades primordiais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/05-divindades.html">Divindades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/06-celestiais.html">Celestiais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/07-filhos.html">Filhos das Divindades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/08-divinos.html">Seres Divinos e Infernais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/09-azmir.html">Azmir</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/10-idioma.html">Idioma Cósmico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/02-mitologia/11-dominios.html">Domínios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse12">
                        Cosmologia Venturo
                    </a>
                </div>
                <div id="collapse12" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/03-dimensoes/01-introducao.html">Introdução</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/03-dimensoes/02-dimensao.html">Dimensões e Planos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/03-dimensoes/03-dimensoes2.html">Dimensões</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/03-dimensoes/04-planos.html">Planos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse13">
                        Habilidades Secundárias
                    </a>
                </div>
                <div id="collapse13" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/04-habilidade/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/04-habilidade/02-categoria.html">Categorias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/04-habilidade/03-formas.html">Formas de Invocação</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/04-habilidade/04-origem.html">Origem e Área</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapse16">
                        Raças e Classes
                    </a>
                </div>
                <div id="collapse16" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/05-racasclasse/01-introducao.html">Introdução</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/05-racasclasse/02-racas.html">Civilizações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paginas/universo/05-racasclasse/03-classes.html">Classes</a>
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