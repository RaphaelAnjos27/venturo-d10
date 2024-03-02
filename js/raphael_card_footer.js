export class RaphaelCardFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
        <div class="container rounded shadow p-4 mb-4 bg-white">
        <div class="row">
            <div class="col-sm-3">
                <img src="/static/imagens/profiles/raphael.webp" class="img-fluid rounded-circle" alt="Perfil">
                <br><br>
            </div>
            <div class="col-sm-9">
                <h5>Raphael dos Anjos</h5>
                <p>
                    Meu nome é Raphael dos Anjos, o principal idealizador por trás do Sistema Venturo, e sou profundamente apaixonado pela arte da construção de universos. Meus principais interesses e passatempos incluem programação, design, e a criação de mundos de fantasia dentro deste sistema extraordinário.
                </p>
                
                <div class="btn-group" role="group" aria-label="Redes">
                    <button type="button" class="btn btn-outline-dark">
                        <a href="https://www.instagram.com/raphael_kanlyangh/" target="_blank">
                            <img class="img-fluid" src="/static/imagens/icones/rede_instagram.svg" alt="Icon Social" style="width: 30%;">
                        </a>
                    </button>
                    <button type="button" class="btn btn-outline-dark">
                        <a href="https://www.linkedin.com/in/raphael-dos-anjos/" target="_blank">
                            <img class="img-fluid" src="/static/imagens/icones/rede_linkdin.svg" alt="Icon Social" style="width: 30%;">
                        </a>
                    </button>
                  </div>
            </div>
            
          </div>
    </div>
        `;
    }
}