const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "certo dia na casa de Eulampio quando ele estava limpando o porão ele acha uma caixa empoerada",
    alternativas: ["Isso é assustador,mais não abro!", "Isso é maravilhoso e vou abrir!"],
  },
  {
    enunciado:
      "Depois dessa nova desboberta Eulampio decide chamar seus amigos TheStone e momoão",
    alternativas: [
      "Eles acetam e abrem a caixa",
      "Eles não  aceitam e não abrem",
    ],
  },
  {
    enunciado:
      "TheStone decidiu não concordar com a decisão dos amigos",
    alternativas: [
      " Eles decidem não abrir.",
      "Eles fazem TheStone mudar de ideia",
    ],
  },
  {
    enunciado:
      "Eulampio acha u",
    alternativas: [
      "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      "Criar uma imagem utilizando um gerador de imagem de IA.",
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
