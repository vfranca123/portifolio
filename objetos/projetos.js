

const projetos = [
  {
    imagem: 'imgs/Memoro.png',
    link: 'https://www.youtube.com/watch?v=-ttHHnTZ80M&t=90s',
    nome: 'Memoro',
    texto: 'loren',
    numero:1
  },
  {
    imagem: 'https://exemplo.com/imagem2.jpg',
    link: 'https://exemplo2.com',
    nome: 'Projeto 2',
    texto: 'Descrição do Projeto 2',
    numero:2
  }
];

function projeto(objeto) {
  let projetoSerializado = encodeURIComponent(JSON.stringify(objeto));
  window.location.href = `projeto.html?projeto=${projetoSerializado}`;
}
// Seleciona o container onde os itens serão exibidos
const container = document.getElementById('MeusProjetos');

// Verifica se o container foi encontrado
if (!container) {
  console.error('Elemento com ID "MeusProjetos" não encontrado no DOM.');
} else {
  // Itera sobre os objetos e cria uma div para cada um
  projetos.forEach(exemplo => {
    // Cria uma nova div
    const div = document.createElement('div');

    // Adiciona classes à div
    div.classList.add('d-flex', 'flex-column','btn', 'col-md-3', 'configBox', 'm-5','container','w-40');
    
    // Define o conteúdo da div
    div.innerHTML = `
      <img src="${exemplo.imagem}" alt="${exemplo.nome}" class="container">
      <p class="text-light">${exemplo.texto}</p>
      
    `;
    console.log(exemplo);
    div.addEventListener('click', () => projeto(exemplo));
    
    // Adiciona a div ao container
    container.appendChild(div);
  });
}
