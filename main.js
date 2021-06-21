let lista = document.querySelector("ul");
let item = document.querySelector("#item");
let botao = document.querySelector("#btn");
let botaoLimpar = document.querySelector("#btn_limpar");

botao.addEventListener("click", adicionarItem);
botaoLimpar.addEventListener("click", limparItem);

function adicionarItem() {
  let adicionar = "<li class=itens>" + item.value;

  if (lista.innerText.includes(item.value.toLowerCase())) {
    window.alert("O item informado já existe na lista");
  } else {
    lista.innerHTML += adicionar.toLowerCase();
  }

  item.value = "";
  item.focus();
}

function limparItem() {
  lista.innerHTML = "";
  return;
}
document.querySelector("ul").value = localStorage.item;
const salvarDados = function () {
  let itensLista = lista.innerText;

  localStorage.setItem("item", itensLista);
};

document.onchange = salvarDados;
localStorage.clear();
