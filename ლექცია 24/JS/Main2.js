let searchBtn = document.querySelector(".searchBtn")
let input = document.querySelector("input")
let searchIcon = document.querySelector(".searchIcon")

searchBtn.addEventListener("click", function(){
    input.classList.toggle("show")
    this.classList.toggle("show")

    if (searchIcon.innerHTML == `<i class="bi bi-x-lg"></i>`){
        searchIcon.innerHTML = `<i class="bi bi-search"></i>`
    }else{
        searchIcon.innerHTML = `<i class="bi bi-x-lg"></i>`
    }
})
