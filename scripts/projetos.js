

const projetos = [
  {
    imagem: 'imgs/Memoro.png',
    link: 'https://www.youtube.com/watch?v=-ttHHnTZ80M&t=90s',
    nome: 'Memoro',
    texto: 'O Memoro é um santuário de sensações que viram narrativas, eternizando momentos. Desde sua criação, inova ao capturar não só o que sentimos, mas como sentimos. ',
  },
  {
    imagem: 'imgs/BemEstar.png',
    link: 'https://www.youtube.com/watch?v=3Yot0sv9I9Y&t=4s',
    nome: 'Bem Estar',
    texto: 'Bem-Estar é um app para gerenciar sono, exercícios e alimentação, avaliando qualidade com parâmetros específicos. Registra sono, intensidade dos treinos e qualidade nutricional. Com design moderno e fácil uso, promove uma rotina saudável e controle dos hábitos.',
  },
  {
    imagem:'imgs/mobilisa.png',
    link: 'https://guscanavese.github.io/projetos-front-end/',
    nome: 'Mobilisa',
    texto: 'Mobilisa foi um projeto freelancer para eleições, com telas responsivas, design otimizado e desenvolvido usando Bootstrap e tecnologias web básicas. ',
  },
  {
    imagem:'imgs/starBucks.png',
    link: 'https://vfranca123.github.io/Projeto-de-front-starbucks/',
    nome: 'StarBucks',
    texto: 'Pagina estatica feita com intuito de praticar o css puro e design, uma das minhas primeiras praticas,',
  },
  {
    imagem:'imgs/UaiGuia.png',
    link: 'https://www.youtube.com/watch?v=WE_qaqMlmu8',
    nome: 'UaiGuia',
    texto: 'A transformação digital é essencial no turismo para atender às expectativas dos turistas. O setor abrange segmentos religiosos, naturais, gastronômicos e culturais, com opções personalizadas. O app UaiGuia cria rotas em São João del-Rei e informa sobre locais e eventos.',
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
    div.classList.add('d-flex', 'flex-column','btn', 'col-md-3', 'configBox', 'm-5','container','w-40','bg-white', 'justify-content-between');
    
    // Define o conteúdo da div
    div.innerHTML = `
      <h1>${exemplo.nome} <hr></h1>
      <img src="${exemplo.imagem}" alt="${exemplo.nome}" class="container">
      <p class="text-dark">${exemplo.texto}</p>
      <a class="text-primary">Saiba mais</a>
    `;
    console.log(exemplo);
    div.addEventListener('click', () => projeto(exemplo));
    
    // Adiciona a div ao container
    container.appendChild(div);
  });
}
