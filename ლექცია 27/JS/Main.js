let addTaskBtn = document.querySelector(".addTask")
let taskInput = document.querySelector("#ToDo")
let todosDiv = document.querySelector(".ToDos")
let taskCount = 0;
taskInput.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        let task = taskInput.value
    if(task.length > 0){
        taskCount++;
        let newTask = document.createElement("div")
        newTask.classList.add(`task${taskCount}`, "task")

        let taskCheckbox = document.createElement("input")
        taskCheckbox.setAttribute("type", "checkbox")

        let taskText = document.createElement("span")
        taskText.textContent = task

        newTask.appendChild(taskCheckbox)
        newTask.appendChild(taskText)

        todosDiv.appendChild(newTask)
        localStorage.setItem(task, `task${taskCount}`)
    }
    let allCheckBox = document.querySelectorAll("input[type='checkbox']")
    for (const checkbox of allCheckBox){
        checkbox.addEventListener("change", function(){
            if(this.checked){
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                if(!taskValue.includes("true")){
                    localStorage.setItem(taskKey, `${taskValue},true`)
                }
            }else{
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                let isTaskDone = taskValue.split(",")
                if(isTaskDone[1] == "true"){
                    localStorage.setItem(taskKey,isTaskDone[0])
                }
            }
        })
    }
    }
})
addTaskBtn.addEventListener("click", function(){
    let task = taskInput.value
    if(task.length > 0){
        taskCount++;
        let newTask = document.createElement("div")
        newTask.classList.add(`task${taskCount}`, "task")

        let taskCheckbox = document.createElement("input")
        taskCheckbox.setAttribute("type", "checkbox")

        let taskText = document.createElement("span")
        taskText.textContent = task

        newTask.appendChild(taskCheckbox)
        newTask.appendChild(taskText)

        todosDiv.appendChild(newTask)
        localStorage.setItem(task, `task${taskCount}`)
    }
    let allCheckBox = document.querySelectorAll("input[type='checkbox']")
    for (const checkbox of allCheckBox){
        checkbox.addEventListener("change", function(){
            if(this.checked){
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                if(!taskValue.includes("true")){
                    localStorage.setItem(taskKey, `${taskValue},true`)
                }
            }else{
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                let isTaskDone = taskValue.split(",")
                if(isTaskDone[1] == "true"){
                    localStorage.setItem(taskKey,isTaskDone[0])
                }
            }
        })
    }
})
window.onload = function(){
    for(let index = 0; index < localStorage.length; index++){
        let task = localStorage.key(index)
        let taskValue = localStorage.getItem(task)
        
        let newTask = document.createElement("div")
        newTask.classList.add(`task${index}`, "task")

        let taskCheckbox = document.createElement("input")
        taskCheckbox.setAttribute("type", "checkbox")

        let taskText = document.createElement("span")
        taskText.textContent = task

        newTask.appendChild(taskCheckbox)
        newTask.appendChild(taskText)

        todosDiv.appendChild(newTask)

        let isTaskDone = taskValue.split(",")
        if(isTaskDone[1] == "true"){
            taskCheckbox.setAttribute("checked", true)
        }
    }
    let allCheckBox = document.querySelectorAll("input[type='checkbox']")
    for (const checkbox of allCheckBox){
        checkbox.addEventListener("change", function(){
            if(this.checked){
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                if(!taskValue.includes("true")){
                    localStorage.setItem(taskKey, `${taskValue},true`)
                }
            }else{
                let taskKey = this.nextElementSibling.innerText
                let taskValue = localStorage.getItem(taskKey)
                let isTaskDone = taskValue.split(",")
                if(isTaskDone[1] == "true"){
                    localStorage.setItem(taskKey,isTaskDone[0])
                }
            }
        })
    }
}