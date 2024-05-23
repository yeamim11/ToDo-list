// let input = document.getElementById("inp");
// let text = document.querySelector(".text");

// function add(){
//     if(input.value == ""){
//         alert("please enter task")
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
//         text.appendChild(newEle);
//         saveData();
//         input.value="";

//         newEle.querySelector("i").addEventListener("click", remove );
//         function remove(){
//             newEle.remove();
//         }
//         saveData();
//     }
// }


// function saveData(){
//     localStorage.setItem("data", text.value);

// }
// function showTask(){
//     text.innerHTML = localStorage.getItem("deta");
// }
// showTask()











let input = document.getElementById("inp");
let text = document.querySelector(".text");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadData);

function add() {
    if (input.value == "") {
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        saveData();
        input.value = "";

        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();
            saveData();
        }
    }
}

function saveData() {
    const tasks = document.querySelectorAll(".text ul");
    const taskList = [];
    tasks.forEach(task => {
        taskList.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadData() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);

        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();
            saveData();
        }
    });
}

