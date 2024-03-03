// Criação dos elementos <meta> e <script>
const metaElement = document.createElement('meta');
metaElement.setAttribute('name', 'google-adsense-account');
metaElement.setAttribute('content', 'ca-pub-3911900562799248');

const scriptElement = document.createElement('script');
scriptElement.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3911900562799248');
scriptElement.setAttribute('async', '');
scriptElement.setAttribute('crossorigin', 'anonymous');

// Adiciona os elementos criados ao <head> do documento
document.head.appendChild(metaElement);
document.head.appendChild(scriptElement);