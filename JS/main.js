let inputPox = document.getElementById("input-task");
let taskList = document.getElementById("tasks-list");
let addTasks = document.getElementById("add-task");
let deleteTasks = document.getElementById("delete");
let doneAll = document.getElementById("done-all");


addTasks.onclick = function addTask(){
    let taskText = inputPox.value.trim();
    if(taskText === ""){
        alert("You must write task !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskText;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputPox.value=" ";
    saveTask ();
}

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask ();
    }
    else if (e.target.parentElement.classList.contains("checked")) {
        e.target.parentElement.remove();
        saveTask ();
    }
},false);

deleteTasks.onclick = function deletetask(){
    let taskList = document.getElementById("tasks-list");
    taskList.innerHTML = "";
    saveTask ();
};

doneAll.onclick = function doneall(){
    let taskList = document.getElementById("tasks-list");
    let allTasks = taskList.querySelectorAll("li");
    allTasks.forEach(function (task) {
        task.classList.add("checked");
    });
    
    saveTask ();
}

function saveTask (){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask (){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();

if (taskList.childElementCount === 0) {
    taskList.style.padding = "0";
}

