export class ConfigAnuncio extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Inclua o conteúdo do componente no DOM quando ele for conectado
        this.innerHTML = `
        <meta name="google-adsense-account" content="ca-pub-3911900562799248">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3911900562799248"
            crossorigin="anonymous"></script>
            
        `
    }
}