'use strict';

let banco = [
    {'tarefa': 'Estudar'},
    {'tarefa': 'Metropole'},
    {'tarefa': 'testar'}
]


const criarItem = (tarefa, indice) => {
    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.innerHTML = `
    <input class="form-check-input" type="checkbox" data-indice=${indice}>
    <label>${tarefa}</label>
    <button class="fas fa-trash" data-indice=${indice}></button>
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

const inserirTarefa = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
       if(tecla == 'Enter'){
            banco.push({'tarefa': texto});
            atualizarTela();
            evento.target.value = '';
        }
}

const removerItem = (indice) => {
    banco.splice (indice, 1);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button'){
        console.log(elemento);
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
    }

}

document.getElementById('formulario').addEventListener('click', inserirTarefa);
document.getElementById('todo-list').addEventListener('click', clickItem);

atualizarTela();