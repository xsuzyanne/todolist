var task = [];
onclick=createTask()
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