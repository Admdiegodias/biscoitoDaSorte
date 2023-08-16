
// VARIÁVEIS
const cracker = document.querySelector('#img');
const firstScreen = document.querySelector('.screen1');
const secondScreen = document.querySelector('.screen2');
const newCracker = document.querySelector('#btnReset');
const crackerOpen = document.querySelector('.frase p');


//ARRAY
const messages = [
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Só existe um êxito: a capacidade de levar a vida que se quer.',
  'A coragem não é ausência do medo; é a persistência apesar do medo.',
  'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
  'A vida trará coisas boas se tiver paciência.',
  'Não há que ser forte. Há que ser flexível.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
]

//VARIÁVEL
let randomMessage = messages[Math.round(Math.random() * messages.length)];




//FUNÇÃO PARA ALTERNAR VISIBILIDADE ENTRE DUAS TELAS
const toggleScreen = () => {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

//FUNÇÃO PARA ALTERNAR ENTRE AS TELAS E EXIBIR A MENSAGEM ALEATÓRIA, É ACIONADA QUANDO O CRACKER É ABERTO OU ATIVADO NO CÓDIGO
const openCracker = () => {
  toggleScreen()
  crackerOpen.innerText = `${randomMessage}`
}


//fUNÇÃO QUE ALTERNA ENTRE AS TELAS, RECARREGA A PAGINA E GERA UMA NOVA MENSAGEM ALEATÓRIA PARA A FUNÇÃO
const handleOpennewCracker = () => {
  toggleScreen()
  randomMessage = messages[Math.round(Math.random() * messages.length)];
}

/*FUNÇAO PARA VERIFICAR SE O USUÁRIO PRESSIONOU A TECLA ENTER QUANDO A TELA FIRSTSCREEN ESTÁ OCULTA. SE ISSO ACONTECER A FUNÇÃO handleOpennewCracker É ACIONADA. */
const pressEnter = (e) => {
  if (e.key === 'Enter') {
    openCracker();
  }
}

//ELEMENTOS CLICÁVEIS NO DOM, COMO BOTÕES E ÍCONES.
cracker.addEventListener('click', openCracker);
newCracker.addEventListener('click', handleOpennewCracker);
document.addEventListener('keydown', pressEnter);
