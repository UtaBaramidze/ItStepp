$(".searchBtn").click(function(){ 
    $(".center1").animate({
        "opacity" : "0",
    },2000)
    $(".center1").css({
        "display" : "none",
    })
    $("body").removeClass("bg-dark")
    $("body").addClass("bg-info")
    $(".center2").animate({
        "opacity" : "1",
    },2000)
    $(".center2").addClass("d-flex")
});

$(".CSW").click(function(){
    $("img").attr("src",$(this).attr("data-src"))
})