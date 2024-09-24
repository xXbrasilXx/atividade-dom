// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera a mensagem
const changeMessage = document.getElementById("btn-mudar-frase");

// Mensagens
const messages = document.querySelectorAll(".container p");

// Armazenar congratulação anterior
const congrat = "";

// Array Congratulações
const congrats = [
    "Parabéns!",
    "Wow",
    "É isso aí",
    "Excelente trabalho!",
    "Você conseguiu!",
    "Fantástico!",
    "Muito bem!",
    "Incrível!",
    "Show de bola!",
    "Mandou bem!"
];

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Função de numero aleatorio
function getRandomNumber() {
    return Math.floor(Math.random() * 10); // Gera um número de 0 a 9
}

// Evento de clique para alterar o texto das mensagens
changeMessage.addEventListener("click", function() {
  for (let i = 0; i < messages.length; i++) {
    messages[i].textContent = "A frase "+ (i + 1)  + " foi alterada com sucesso: " + congrats[getRandomNumber()];
  }
});
