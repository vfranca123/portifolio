const projetos = [
  {
    imagem: 'imgs/Memoro.png',
    link: 'https://www.youtube.com/watch?v=-ttHHnTZ80M&t=90s',
    nome: 'Memoro',
    texto: 'loren'
  },
  {
    imagem: 'https://exemplo.com/imagem2.jpg',
    link: 'https://exemplo2.com',
    nome: 'Projeto 2',
    texto: 'Descrição do Projeto 2'
  }
];

        // Seleciona o container onde os itens serão exibidos
    const container = document.getElementById('MeusProjetos');

        // Itera sobre os objetos e cria uma div para cada um
    projetos.forEach(projeto => {
            // Cria uma nova div
    const div = document.createElement('div');

            // Define o conteúdo da div
        div.innerHTML = `
        <a onclick="projeto()">
            <div class="d-flex flex-column col-md-3 configBox m-5">
                <img src="${projeto.imagem}" alt="memoro">
                <p class="text-light">${projeto.texto}</p>
            </div>
        </a>`;

    // Adiciona a div ao container
    container.appendChild(div);
});