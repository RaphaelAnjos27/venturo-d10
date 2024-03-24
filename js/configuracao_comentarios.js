const Container = document.getElementById('comentarios');

const disqu = document.createElement('div');
disqu.setAttribute('id', 'disqus_thread');

const NoScript = document.createElement('noscript');
NoScript.innerHTML = `Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>`;

Container.appendChild(disqu);
Container.appendChild(NoScript);

var disqus_config = function () {
    this.page.url = document.referrer;  // Replace PAGE_URL with your page's canonical URL variable
    };

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://venturod10.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

const ScriptFinal = document.createElement('script');
ScriptFinal.setAttribute('id',"dsq-count-scr");
ScriptFinal.setAttribute('src',"//venturod10.disqus.com/count.js");
ScriptFinal.setAttribute('async',true);

//<script id="dsq-count-scr" src="//venturod10.disqus.com/count.js" async></script>

document.body.appendChild(ScriptFinal)

