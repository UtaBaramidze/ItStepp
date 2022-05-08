let sideBar = document.querySelector(".sideBar")
let sideBarBtn = document.querySelector(".btn")
sideBarBtn.addEventListener("click",function(){
    sideBar.classList.toggle("active")
    this.classList.toggle("clicked")

    if(sideBarBtn.innerHTML == `<i class="bi bi-x-lg"></i>`){
        sideBarBtn.innerHTML = `<i class="bi bi-list"></i>`
    }else{
        sideBarBtn.innerHTML = `<i class="bi bi-x-lg"></i>`
    }
})