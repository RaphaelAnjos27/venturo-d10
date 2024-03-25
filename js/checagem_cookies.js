import URL from "/@types/URL.js"

// Função para desbloquear cookies de terceiros
function desbloquearCookiesDeTerceiros() {
    document.cookie = "cookie-consent=accepted; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    // Define a política de cookies para permitir cookies de terceiros
    cookieStore.get(URL).then(cookie => {
        if (cookie) {
            // Atualiza a política de cookies para permitir cookies de terceiros
            cookie.sameSite = 'none';
            cookieStore.set(cookie);
            
            console.log('Cookies de terceiros desbloqueados com sucesso!');
        } else {
            console.error('Não foi possível encontrar o cookie.');
            
        }
    });

    FecharPopUp();
    
}

//Função para Verificar se o navegador suporta Cookies:
function ChecagemCookies() {
    const cookiesEnabled = document.cookie.indexOf("cookie-consent=accepted") !== -1;

    return cookiesEnabled;
}
//Função para Gerar o PopUP:

function FecharPopUp() {
    const POPUPELEMENT = document.getElementById('popup-politicas-privacidade');
    POPUPELEMENT.remove();
}

function RedirecionarUsuario(){
    // Redirecionar para outra página
    window.location.href = "https://www.google.com";
}

function GerarPopUp() {

    // Criando o elemento <article>:
    const popupArticle = document.createElement('article');
    popupArticle.id = 'popup-politicas-privacidade';
    popupArticle.className = 'alert alert-secondary fixed-bottom m-5 shadow';

    //Criando o Popup:
    const POPUP = `
    <h3>Politicas de Privacidade:</h3>
    <p>
    Para melhorar sua experiência neste site, utilizamos cookies que nos ajudam a personalizar conteúdos e anúncios, oferecer funcionalidades de redes sociais e analisar o tráfego. Ao continuar navegando, você concorda com nossa Política de Privacidade. Para mais detalhes sobre como coletamos, usamos e protegemos suas informações, consulte nossa <a href="https://venturod10.com.br/paginas/politica-privacidade.html" target="_blank">política completa</a>.
    </p>
    <div class="clearfix">
        <button
            id="recusar-cookie"
            class="btn btn-sm btn-outline-danger float-end">
            Recusar
        </button>
        <button
            id="aceitar-cookie"
            class="btn btn-sm btn-outline-dark float-end me-2">
            Aceitar
        </button>
    </div>
    `
    popupArticle.innerHTML = POPUP;

    document.body.appendChild(popupArticle);

    const btn_aceitar = document.getElementById('aceitar-cookie')
    const btn_recusar = document.getElementById('recusar-cookie')

    btn_aceitar.addEventListener('click', desbloquearCookiesDeTerceiros);
    btn_recusar.addEventListener('click', RedirecionarUsuario);
}

document.addEventListener("DOMContentLoaded", function () {
    if(!ChecagemCookies()){
        GerarPopUp()
    }
});

