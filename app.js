let local = "";
let descricaoImovel = "";
let urlImg = "";
let numeroBanheiros;
let arrObjImagem = [];

function inserirCard() {
  local = document.getElementById("local").value;
  descricaoImovel = document.getElementById("descricaoImovel").value;
  urlImg = document.getElementById("urlImg").value;
  numeroBanheiros = document.getElementById("numeroBanheiros").value;

  let cardSection = document.getElementById("card");
  cardSection.innerHTML += `<div class="imovel-card"> 
                                    <h2 class="local-card">${local}</h2> 
                                    <img src="${urlImg}" class="imagem-imovel">
                                    <p class="descricao-card">${descricaoImovel}<p> 
                                    <p class="numero-banheiros">${numeroBanheiros} - banheiro(os)</p></div>`;
}
let endereco = document.getElementById("local");
let localValidacao = document.getElementById("localValidacao");
let textArea = document.querySelector("textarea");
let imgValidacao = document.getElementById("urlImg");
let numBanheiros = document.getElementById("numeroBanheiros");
let button = document.querySelector("button");
button.addEventListener("click", function () {
  button.removeAttribute("disabled");
});

endereco.addEventListener("click", function () {
  endereco.style.backgroundColor = "rgba(65, 126, 97, 100)";
});
endereco.addEventListener("blur", function () {
  endereco.style.backgroundColor = "#FFFF";
});
endereco.addEventListener("keyup", function () {
  endereco.style.backgroundColor = "#FFFF";

  if (endereco.value.length >= 4) {
    localValidacao.innerText = "";
    button.removeAttribute("disabled");
    button.style.backgroundColor = "rgba(65, 126, 97, 100)";
    button.style.color = "black";
  } else {
    localValidacao.innerText = "Mínimo de 4 caracteres";
    button.setAttribute("disabled");
  }
});

imgValidacao.addEventListener("click", function () {
  imgValidacao.style.backgroundColor = "rgba(65, 126, 97, 100)";
});
imgValidacao.addEventListener("blur", function () {
  imgValidacao.style.backgroundColor = "#FFFF";
});
imgValidacao.addEventListener("keyup", function () {
  imgValidacao.style.backgroundColor = "#FFFF";

  if (imgValidacao === imgValidacao) {
    button.removeAttribute("disabled");
    button.style.backgroundColor = "rgba(65, 126, 97, 100)";
    button.style.color = "black";
  } else {
    button.setAttribute("disabled");
  }
});

textArea.addEventListener("click", function () {
  textArea.style.backgroundColor = "rgba(65, 126, 97, 100)";
});
textArea.addEventListener("blur", function () {
  textArea.style.backgroundColor = "#FFFF";
});
textArea.addEventListener("keyup", function () {
  textArea.style.backgroundColor = "#FFFF";
});

numBanheiros.addEventListener("click", function () {
  numBanheiros.style.backgroundColor = "rgba(65, 126, 97, 100)";
});
numBanheiros.addEventListener("blur", function () {
  numBanheiros.style.backgroundColor = "#FFFF";
});
numBanheiros.addEventListener("keyup", function () {
  numBanheiros.style.backgroundColor = "#FFFF";
});
