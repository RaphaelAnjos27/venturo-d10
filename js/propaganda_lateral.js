// Criação dos Elementos da Propaganda.

const script = document.createElement('script');
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
script.async = true;
script.crossOrigin = 'anonymous';

const insElement = document.createElement('ins');
insElement.className = 'adsbygoogle';
insElement.style.display = 'block';
insElement.setAttribute('data-ad-client', 'ca-pub-3911900562799248');
insElement.setAttribute('data-ad-slot', '2483162649');
insElement.setAttribute('data-ad-format', 'auto');
insElement.setAttribute('data-full-width-responsive', 'true');

function displayAds() {
    (adsbygoogle = window.adsbygoogle || []).push({});
}

//Adiciona os Elementos ao Corpo de Anuncio:
const containerAnuncio = document.getElementById('propaganda-lateral');
containerAnuncio.appendChild(script);
containerAnuncio.appendChild(insElement);


//Executa a Função:
displayAds();
