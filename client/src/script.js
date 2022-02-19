//Reaproveitamento - Aplicação Exemplo
//
// Criar uma tarefa
// Atualizar a tarefa
// Remover a tarefa
// Listar tarefas
//

//DOM
const botao = document.querySelector("#btn-add");
const inputBox = document.querySelector("#formulario");
const lista = document.querySelector("#todo-list");
//const deleteAllBtn = document.querySelector(".footer button");


function clicouBotao() {
    // 1. Armazenar o valor do input em uma variável
    const valor = inputBox.value;
  
    // 2. Adicionar o item da lista
    const li = document.createElement("li");
    const texto = document.createTextNode(valor);
    li.appendChild(texto);
  
    // border: 1px solid #aaa; border-radius: 5px; padding: 4px;
    li.style.border = "1px solid #aaa";
    li.style.borderRadius = "5px";
  
    lista.appendChild(li);
  
    // 3. Limpar o campo de item
    input.value = "";
}
  
  function clicouApagar() {
    // 2. Identificar o item
    const li = document.querySelector("#item-1");
  
    // 3. Remover o item
    lista.removeChild(li);
  }
  
  botao.addEventListener("click", clicouBotao);
  //botaoApagar.addEventListener("click", clicouApagar);