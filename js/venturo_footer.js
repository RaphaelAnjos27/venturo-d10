export class VenturoFooter extends HTMLElement{
	constructor(){
		super()
		this.attachShadow({mode:"open"})
		this.shadowRoot.innerHTML=
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="/static/css/index.css">
        
        <footer class="mt-5 p-4 bg-dark text-white text-center">
            <p>© Todos direitos Reservados a Raphael dos Anjos – 2024</p>
            <p>
                Versão do Sistema: 2.0.0
            </p>
        </footer>

		`
	}
}