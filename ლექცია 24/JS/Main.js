let gilaki = document.querySelector(".gilaki")
let addFields = document.querySelector(".addFields")

let form = document.createElement("form")
form.classList.add("mb-3")


addFields.appendChild(form)
gilaki.addEventListener("click", function(){

    let newInputDiv = document.createElement('div');
    newInputDiv.classList.add('inputGroup')

    let newField = document.createElement("input")
    newField.setAttribute("type", "text")
    newField.setAttribute("class", "inputi forlbl")
newInputDiv.appendChild(newField)

    let delBtn = document.createElement("button")
    delBtn.setAttribute("for", "forlbl")
    delBtn.setAttribute("class", "labeli")
    delBtn.setAttribute("type", "button")
    delBtn.innerHTML = "Delete";
   newInputDiv.appendChild(delBtn);

   form.appendChild(newInputDiv)
    let brr = document.createElement("br")


    let inputGroups = document.querySelectorAll('.inputGroup')
    for (const inputgroup of inputGroups) {
let mb3Div = document.querySelector('.mb-3')

        inputgroup.addEventListener('click', function(event){
            if(event.target.nodeName == "BUTTON"){
                mb3Div.removeChild(this)
                console.log(this)
            }
        })
    }
})