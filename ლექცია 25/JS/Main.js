let nextBtn = document.querySelector(".arrows.next")
let prevBtn = document.querySelector(".arrows.prev")
let allCarouselItems = document.querySelectorAll(".carousel-item")
let allIndicators = document.querySelectorAll(".indicator")
let autoSlide = document.querySelector(".carousel").getAttribute("data-autoSlide")
if(autoSlide != "false"){
    setInterval(() => {
      
    let activeItem = document.querySelector(".carousel-item.active")
    let activeIndicator = document.querySelector(".indicator.active")
    if(activeItem.nextElementSibling != null){
        activeItem.classList.remove("active")
        activeItem.nextElementSibling.classList.add("active")
        activeIndicator.classList.remove("active")
        activeIndicator.nextElementSibling.classList.add("active")
    }else{
        activeItem.classList.remove("active")
        allCarouselItems[0].classList.add("active")
        activeIndicator.classList.remove("active")
        allIndicators[0].classList.add("active")
    }

    }, autoSlide);
}
for (const indicator of allIndicators){
    indicator.addEventListener("click", function(){
        let activeItem = document.querySelector(".carousel-item.active")
        let activeIndicator = document.querySelector(".indicator.active")
        activeItem.classList.remove("active")
        activeIndicator.classList.remove("active")
        let indicatorValue = this.getAttribute("data-itemNumber")
        allCarouselItems[indicatorValue].classList.add("active")
        this.classList.add("active")
    })
}
nextBtn.addEventListener("click", function(){
    let activeItem = document.querySelector(".carousel-item.active")
    let activeIndicator = document.querySelector(".indicator.active")
    if(activeItem.nextElementSibling != null){
        activeItem.classList.remove("active")
        activeItem.nextElementSibling.classList.add("active")
        activeIndicator.classList.remove("active")
        activeIndicator.nextElementSibling.classList.add("active")
    }else{
        activeItem.classList.remove("active")
        allCarouselItems[0].classList.add("active")
        activeIndicator.classList.remove("active")
        allIndicators[0].classList.add("active")
    }
})
prevBtn.addEventListener("click", function(){
    let activeItem = document.querySelector(".carousel-item.active")
    let activeIndicator = document.querySelector(".indicator.active")
    if(activeItem.previousElementSibling != null){
        activeItem.classList.remove("active")
        activeItem.previousElementSibling.classList.add("active")
        activeIndicator.classList.remove("active")
        activeIndicator.previousElementSibling.classList.add("active")
    }else{
        activeItem.classList.remove("active")
        allCarouselItems[allCarouselItems.length-1].classList.add("active")
        activeIndicator.classList.remove("active")
        allIndicators[allIndicators.length-1].classList.add("active")
    }
})