// sumario.js
document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui...

    // Função para Deixar primeira letra maiuscula
    
    function capitalizeWords(str) {
        //Quebra em Arrays:
        let palavras = str.split(' ')
        for (key in palavras){
            if(palavras[key].length != 0){
                let palavra_tratada = palavras[key].toLowerCase();
                let Letra = palavra_tratada[0].toUpperCase();
                palavra_tratada = Letra + palavra_tratada.slice(1);
                palavras[key] = palavra_tratada;
            }
        }
        return palavras.join(" ");
    }
    
    // Encontre todos os cabeçalhos h1, h2 e h3 na página
    const headers = document.querySelectorAll('h2, h3, h4, h5');

    // Crie uma lista não ordenada para o sumário
    const summaryList = document.createElement('ul');

    // Crie uma Tag de Sumario:
    const tagDetail = document.createElement('details');
    const tagSumary = document.createElement('summary');
    
    tagSumary.innerHTML = '<p style="font-size:1.3em; display: inline">Sumário</p><hr>';
    

    headers.forEach(header => {
        // Crie um item de lista para cada cabeçalho
        const listItem = document.createElement('li');

        // Crie um link âncora para o cabeçalho
        const anchor = document.createElement('a');
        
        
        if (header.tagName === 'H3') {
            
            anchor.textContent = '\u00A0\u00A0\u00A0'+ capitalizeWords(header.textContent);
            
        }else if(header.tagName === 'H4'){
            anchor.textContent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + capitalizeWords(header.textContent);
        }else if(header.tagName === 'H5'){
            anchor.textContent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + capitalizeWords(header.textContent);
        }
        else {
            anchor.textContent = capitalizeWords(header.textContent);
        }


        // Configure o link para rolar suavemente para o cabeçalho quando clicado
        anchor.href = `#${header.id || ''}`;
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            header.scrollIntoView({ behavior: 'smooth' });
        });
        // Remova a decoração de link (sublinhado)
        anchor.style.textDecoration = 'none';
        anchor.style.color = "#212529"
        anchor.style.fontWeight = "bold"

        listItem.appendChild(anchor);
        summaryList.appendChild(listItem);
    });

    // Adicione o sumário à div com o ID "sumario"
    const sumarioDiv = document.getElementById('sumario');
    tagDetail.appendChild(tagSumary);
    tagDetail.appendChild(summaryList);
    sumarioDiv.appendChild(tagDetail);
    //sumarioDiv.appendChild(summaryList);

});

