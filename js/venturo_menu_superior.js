export class VenturoMenuSuperior extends HTMLElement{
	constructor(){
		super();
	}
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
        <style>
        .navbar a {
            text-decoration: none;
            /* Remove o underline padrão de todos os links na navbar */
    
        }
    
        .navbar a:hover {
            color: aliceblue;
            text-decoration: underline;
            /* Adiciona um underline para links ativos */
            text-decoration-thickness: 3px;
            /* Espessura do underline */
            text-underline-offset: 5px;
            /* Deslocamento vertical do underline */
        }
        </style>
        
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">
                    <img src="/static/imagens/logo_simples_pequeno_branco.webp" alt=""
                        style="width:40px;" class="rounded-pill">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/sobre.html">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/regras.html">Regras</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/universo.html">Universo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/criacao.html">Criação</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/wb.html">Worldbuilding</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/blog/blog_index.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/contos.html">Contos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/ferramenta.html">Ferramentas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/paginas/devlog.html">Devlog</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>        
            
        `
    }
    
}