export class VenturoAnuncio extends HTMLElement{
	constructor(){
		super();
	}
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
            <style>
                    .anuncio{
                        width: 100%;
                    }
                    @media (max-width: 600px) {
                        .anuncio {
                            content: url('/static/imagens/anuncio/BannersHotmart_Página2.webp');
                        }
                        }

                </style>
                <a href="https://go.hotmart.com/Y86396770N" target="_blank">
                    <img class="anuncio" src="/static/imagens/anuncio/BannersHotmart_Página5.webp" alt="New York">
                </a>        
            
        `
    }   
}