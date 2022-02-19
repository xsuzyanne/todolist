var task = [];
function idGenerator(){

    var timestamp = new Date()

    var id =
    timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();

    return id
}

function createTask(){

    var taskDescription = document.getElementById("formulario").value;

    var task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        }
    }
}

const inputBox = document.querySelector("formulario");
const addBtn = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list")
const deleteAllBtn = document.querySelector(".footer button")

addBtn.onclick = ()=>{
    let userData = inputBox.Value;
    if(userData.trim() != 0){
        const li = document.createElement("li");
        const texto = document.createTextNode(valor);
        li.appendChild(texto);}
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == Null){
     listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage)
  }

  listArr.push("Hello World");
localStorage.setItem("New Todo", JSON.stringify(listArr));

}

//função para mostrar lista de tarefas dentro da ul
function showTasks(){
    const todoList = document.getElementById("todo-list");
    let newLiTag = '';
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        banco = []
    } else {
        banco = JSON.parse(getLocalStorage)
    }
  
    banco.forEach((element, indice) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${indice})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
  }