//getting all required elements

//const inputBox = document.querySelector(".imputField input");
//const addBtn = document.querySelector(".inputField button");

//inputBox.onkeyup = ()=>{
//    let userData = inputBox.Value;
//    if(userData.trim() != 0){
//        addBtn.classList.add("active");
//  }else{
//      addBtn.classList.remove("active");
//  }
//}
//
//<div class="inputField">
//<input class="inputField" type="text" placeholder="O que faremos hoje?">
//<button class="inputField">+</button>
//</div>
//<br />

const inputBox = document.querySelector("formulario");
const addBtn = document.getElementById("btn-add");
const todoList = document.getElementById("list")
const deleteAllBtn = document.querySelector(".footer button")

addBtn.onclick = ()=>{
    let userData = inputBox.Value;
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    if(getLocalStorage == Null){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.push("Hello World");
    localStorage.setItem("Nova Tarefa", JSON.stringify(listArr));

}