window.onscroll = function(event){
    if(document.documentElement.scrollTop > 200){
        document.querySelector("nav").classList.add("scrolled")
    }else{
        document.querySelector("nav").classList.remove("scrolled")
    }
}
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionn(){
    document.getElementById("myDropdownn").classList.toggle("show");
}
function myFunctionnn(){
    document.getElementById("myDropdownnn").classList.toggle("show");
}
let scrollBtn = document.querySelector(".gilaki")
scrollBtn.addEventListener("click", function(){
    let scrollDiv = document.querySelector(".itemi")
    scrollDiv.scrollBy(80,70)
})