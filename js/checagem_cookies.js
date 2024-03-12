import URL from "/@types/URL.js"

// Função para desbloquear cookies de terceiros
function desbloquearCookiesDeTerceiros() {
    // Define a política de cookies para permitir cookies de terceiros
    cookieStore.get(URL).then(cookie => {
        if (cookie) {
            // Atualiza a política de cookies para permitir cookies de terceiros
            cookie.sameSite = 'none';
            cookieStore.set(cookie);
            document.cookie = "cookie-consent=accepted; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
            console.log('Cookies de terceiros desbloqueados com sucesso!');
        } else {
            console.error('Não foi possível encontrar o cookie.');
            
        }
    });

    FecharPopUp();
    
}

//Função para Verificar se o navegador suporta Cookies:
async function ChecagemCookies() {
    if ('cookieStore' in window) {
        try {
            const cookie = await cookieStore.get(URL);
            return !!cookie; // Convert to boolean
        } catch (error) {
            console.error('Error fetching cookie:', error);
            return false;
        }
    } else {
        return false;
    }
}
//Função para Gerar o PopUP:

function FecharPopUp() {
    const POPUPELEMENT = document.getElementById('popup-politicas-privacidade');
    POPUPELEMENT.remove();
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
        Ao continuar navegando neste site, você concorda com nossa Política de Privacidade. Para saber mais sobre como coletamos, usamos e protegemos suas informações, consulte a <a href="https://venturod10.com.br/paginas/politica-privacidade.html" target="_blank">política completa</a>.
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
    btn_recusar.addEventListener('click', FecharPopUp);
}

document.addEventListener("DOMContentLoaded", function () {
    ChecagemCookies().then(result => {
        if (!result){
            GerarPopUp()
        }
    });
});

