export class VenturoAnuncio extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
        
        <script async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3911900562799248"
        crossorigin="anonymous"></script>
    <!-- Anuncio Lateral -->
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3911900562799248"
        data-ad-slot="2483162649" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
            
        `
    }
}

/*
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
*/