
//armazenar a escolha do jogador numa variavel
let escolhaJogador = 0;

const pedra = document.getElementById("pedra");
pedra.addEventListener("click", function () {
  escolhaJogador = 1;
});
const papel = document.getElementById("papel");
papel.addEventListener("click", function () {
  escolhaJogador = 2;
});
const tesoura = document.getElementById("tesoura");
tesoura.addEventListener("click", function () {
  escolhaJogador = 3;
});


//escolha do adversario
let escolhaAdversario = 0

function randon(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function escolherAdv(){
  escolhaAdversario = randon(1, 3);
}

//funcao para mostrar escolha do "Adversario"
function mostrarAdversario(){
   const adversario = document.createElement("div");
   adversario.classList.add("advDiv");
   if (escolhaAdversario === 1){
     adversario.innerHTML ==="O adversario escolheu: Pedra"
   }else if(escolhaAdversario === 2){
    adversario.innerHTML = "O adversario escolheu: Papel"
   }else{
    adversario.innerHTML = "O adversario escolheu: Tesoura"
   }
   const resultado = document.getElementById("resultado");
   resultado.appendChild(adversario);
 }

//comparador dos resultados e exibe o resultados da comparação
function comparar() {
  const resultado = document.getElementById("resultado");
  const frase = document.createElement("div");
  frase.classList.add("resultsDiv");

  if (escolhaJogador === 1) {
    if (escolhaAdversario === 3) {
      frase.innerHTML = "Parabéns, você venceu!<br> Pedra vence Tessoura";
    } else if (escolhaAdversario === 2) {
      frase.innerHTML = "Oh não, você perdeu!<br> Pepel vence pedra";
    } else if (escolhaAdversario === 1) {
      frase.innerHTML = "Empate! Tente mais uma vez";
    }
  } else if (escolhaJogador === 2) {
    if (escolhaAdversario === 1) {
      frase.innerHTML = "Parabéns, você venceu!<br> Papel vence Pedra";
    } else if (escolhaAdversario === 3) {
      frase.innerHTML = "Oh não, você perdeu!<br> Tesoura vence Papel";
    } else if (escolhaAdversario === 2) {
      frase.innerHTML = "Empate! Tente mais uma vez";
    }
  } else if (escolhaJogador === 3) {
    if (escolhaAdversario === 2) {
      frase.innerHTML = "Parabéns, você venceu!<br> Tesoura vence Papel";
    } else if (escolhaAdversario === 1) {
      frase.innerHTML = "Oh não, você perdeu!<br> Pedra vence Tesoura";
    } else if (escolhaAdversario === 3) {
      frase.innerHTML = "Empate! Tente mais uma vez";
    }
  }
  resultado.appendChild(frase);
}

//Funcao para limpar a tela ao realizar uma nova rodada
function limpar(){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

//Chamada do botao GO para mostrar os resultados
const go = document.getElementById("go");
go.addEventListener('click', limpar);
go.addEventListener("click", escolherAdv);
go.addEventListener("click", mostrarAdversario);
go.addEventListener("click", comparar);
