// sumario.js
document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui...
    
    // Encontre todos os cabeçalhos h1, h2 e h3 na página
    const headers = document.querySelectorAll('h2, h3, h4, h5');

    // Crie uma lista não ordenada para o sumário
    const summaryList = document.createElement('ul');

    headers.forEach(header => {
        // Crie um item de lista para cada cabeçalho
        const listItem = document.createElement('li');

        // Crie um link âncora para o cabeçalho
        const anchor = document.createElement('a');
        
        
        if (header.tagName === 'H3') {
            anchor.textContent = '\u00A0\u00A0\u00A0'+ header.textContent;
            
        }else if(header.tagName === 'H4'){
            anchor.textContent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + header.textContent;
        }else if(header.tagName === 'H5'){
            anchor.textContent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + header.textContent;
        } 
        else {
            anchor.textContent = header.textContent;
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
    sumarioDiv.appendChild(summaryList);

});

