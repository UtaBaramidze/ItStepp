function showHide() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

let eyeOrSlash = document.querySelector("#ChangeEye")
eyeOrSlash.addEventListener("click",function(){
    if(eyeOrSlash.innerHTML == `<i class="bi bi-eye-fill"></i>`){
        eyeOrSlash.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
    }else{
        eyeOrSlash.innerHTML = `<i class="bi bi-eye-fill"></i>`
    }
})