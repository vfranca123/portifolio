

const projetos = [
  {
    imagem: 'imgs/Memoro.png',
    link: 'https://www.youtube.com/watch?v=-ttHHnTZ80M&t=90s',
    nome: 'Memoro',
    texto: 'O Memoro pode ser definido como um santuário onde as sensações se transformam em narrativas ricas, e os momentos se tornam memórias eternas. Desde a sua concepção, Memoro tem sido um farol de inovação, dedicado a capturar não apenas o que sentimos, mas também como sentimos. ',
  },
  {
    imagem: 'imgs/BemEstar.png',
    link: 'https://www.youtube.com/watch?v=3Yot0sv9I9Y&t=4s',
    nome: 'Bem Estar',
    texto: 'Bem-Estar é uma aplicação que permite aos usuários gerenciar sono, exercícios físicos e alimentação, avaliando esses aspectos com parâmetros de qualidade. Registra o sono, a intensidade dos treinos e a qualidade nutricional das refeições. Com design moderno e fácil usabilidade, a aplicação promove uma rotina saudável e oferece controle sobre os hábitos do usuário.',
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
    texto: 'Pagina estatica feita com intuito de praticar o css puro e design, uma das minhas primeiras praticas, video base para desenvolvimento "https://www.youtube.com/watch?v=91Q6RvKvd7o"',
  },
  {
    imagem:'imgs/UaiGuia.png',
    link: 'https://www.youtube.com/watch?v=WE_qaqMlmu8',
    nome: 'UaiGuia',
    texto: 'A transformação digital é crucial no turismo para atender às expectativas dos turistas. O setor divide-se em segmentos religiosos, naturais, gastronômicos e culturais, oferecendo opções personalizadas. O aplicativo UaiGuia cria rotas personalizadas em São João del-Rei, fornece informações sobre locais e eventos. ',
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
    div.classList.add('d-flex', 'flex-column','btn', 'col-md-3', 'configBox', 'm-5','container','w-40','bg-white');
    
    // Define o conteúdo da div
    div.innerHTML = `
      <img src="${exemplo.imagem}" alt="${exemplo.nome}" class="container">
      <p class="text-dark">${exemplo.texto}</p>
      
    `;
    console.log(exemplo);
    div.addEventListener('click', () => projeto(exemplo));
    
    // Adiciona a div ao container
    container.appendChild(div);
  });
}
