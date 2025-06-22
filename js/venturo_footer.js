import VERSAO from "/@types/VERSAO.js"
export class VenturoFooter extends HTMLElement{
    
	constructor(){
        
		super()
        
        const dataAtual = new Date();
        const anoCompleto = dataAtual.getFullYear();
		this.attachShadow({mode:"open"})
		this.shadowRoot.innerHTML=
        `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="/static/css/index.css">

        <footer 
            style="
                background-image:url(/static/imagens/thumbFootr.webp);
                background-repeat: no-repeat;
                background-size: cover;
            "
            class="mt-5 p-4 text-white">
            <h2 class="text-center">Sistema Venturo D10</h2>
            <hr/>
            <p class="text-center">Desperte a divindade que existe em você e comande as estrelas do seu próprio universo, pois cada escolha molda o seu destino!</p>
            <br>
            <div class="row">
                <div class="col-sm-6 d-flex flex-column-reverse">
                    
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-4">
                            <p><b>Informações</b></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/sobre.html">Sobre</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/transparencia.html">Trasnparência</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/politica-privacidade.html">Privacidade</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/termos/politica-uso00012024.html">Termos de Uso</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/devlog.html">Devlog</a></p>
                        </div>

                        <div class="col-sm-4">
                            <p><b>Sistema</b></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/regras.html">Regras</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/universo.html">Universo</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/criacao.html">Criacao</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/wb.html">Worldbuilding</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/blog/blog_index.html">Blog</a></p>
                        </div>  

                        <div class="col-sm-4">
                            <p><b>Outros</b></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/contos.html">Contos</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/documentos/fichas_personagem.html">Fichas</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/documentos/documentos_universo.html">Documentos Universo</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/documentos/escudo_mestre.html">Escudo do Mestre</a></p>
                            <p><a target="_blank" style="text-decoration: none; color:white;" href="/paginas/documentos/linha_tempo.html">Linha do Tempo</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <p>Venturo D10 © ${anoCompleto}. Desenvolvido por <a style="text-decoration: none;" href="https://raphaelanjos27.github.io/Raphael-Page/" target="_blank">Raphael dos Anjos</a></p>
            <p><b>Versão do Sistema: ${VERSAO}</b></p>
            <br><br>
        </footer>

		`
	}
}