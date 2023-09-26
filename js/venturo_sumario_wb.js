export class VenturoSumarioWorldBuilding extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/01-conceitos.html">Conceitos Básicos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/02-resumo.html">Resumo de Worldbuilding</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/03-linha-tempo.html">Linha do Tempo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/04-guias.html">Guias de Worldbuilding</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/05-checklist.html">Lista de Verificação</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/01-introducao/06-organizando.html">Organizando o Worldbuilding</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/01-introducao.html">Introdução</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/02-orbitas.html">Órbitas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/03-baricentro.html">Baricentro</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/04-inclinacao.html">Inlinação</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/05-equador.html">Linha do Equador</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/06-poeira.html">Poeira Estelar</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/07-galaxias.html">Galáxias</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/08-buracos.html">Buraco Negro</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/09-estrelas.html">Estrelas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/10-planetas.html">Planetas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/11-sistemas.html">Sistemas Planetários</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/worldbuilding/02-astronomia/12-aneis.html">Aneis Planetários</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Item de Menu -->

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" data-bs-toggle="collapse" href="#aventuras">
                                    Aventuras
                                </a>
                            </div>
                            <div id="aventuras" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
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
                                            <a class="nav-link" href="/venturo-d10/paginas/wb.html">Introdução</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="d-grid">
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

<br>
        `;
    }
}