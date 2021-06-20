let lista = document.querySelector("ul");
let item = document.querySelector("#item");
let botao = document.querySelector("#btn");
let botaoLimpar = document.querySelector("#btn_limpar");

botao.addEventListener("click", adicionarItem);
botaoLimpar.addEventListener("click", limparItem);

function adicionarItem() {
  let adicionar = "<li>" + item.value;
  lista.innerHTML += adicionar;

  item.value = "";
  item.focus();
}

function limparItem() {
  lista.innerHTML = "";
}
