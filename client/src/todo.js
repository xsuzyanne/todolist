//Reaproveitamento - Aplicação Exemplo
//
// Inserir tarefas
// Remover tarefas
// Listar tarefas
// Atualizar a tarefa
//
let banco = [
    {'tarefa': 'Estudar'},
    {'tarefa': 'Metropole'},
]

const criarItem = (tarefa, indice) => {
    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.innerHTML = `
    <input class="form-check-input" type="checkbox" data-indice=${indice}>
    <label>${tarefa}</label>
    <button class="fas fa-trash" onclick=removerItem(${indice})></button>
    `
    document.getElementById('todo-list').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById("todo-list");
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach((item, indice) => criarItem(item.tarefa, indice));
};

const removerItem = (indice) => {
    banco.splice (indice, 1);
    atualizarTela();
}

const inputBox = document.querySelector("#formulario");

//Inserir Tarefa
const inserirTarefa = () => {
    const valor = inputBox.value;
    const texto = valor;
           banco.push({'tarefa': texto});
          atualizarTela();

 //Número de atividades pendentes
const numeroPendente = document.querySelector(".numeroPendente");
numeroPendente.textContent = banco.length;

}

document.getElementById('btn-add').addEventListener('onclick', inserirTarefa);

const numeroPendente = document.querySelector(".numeroPendente");
numeroPendente.textContent = banco.length;

atualizarTela();
