let lista = document.querySelector("ul");
let item = document.querySelector("#item");
let botao = document.querySelector("#btn");
let botaoLimpar = document.querySelector("#btn_limpar");

botao.addEventListener("click", adicionarItem);
botaoLimpar.addEventListener("click", limparItem);

function adicionarItem() {
  let adicionar = "<li class=itens>" + item.value;

  if (lista.innerText.includes(item.value)) {
    window.alert("O item informado já existe na lista");
  } else {
    lista.innerHTML += adicionar;
  }

  item.value = "";
  item.focus();
  return adicionar;
}

function limparItem() {
  lista.innerHTML = "";
}
