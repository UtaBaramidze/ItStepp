$(".nav-link").click(function(){
    let requestURL = $(this).attr("data-url")
    
    $.ajax({
        type: "GET",
        url: requestURL,
        // data: "data",
        // dataType: "dataType",
        data:{username:"user", password:"pass"},
        success: function (response) {
            $(".content").html(response)
        },
        error: function(response){
            alert("მსგავსი რამ არ არსებობს")
        }
    });
})
$("#Products").click(function(e){
    e.preventDefault();
    
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        // data: "data",
        // dataType: "dataType",
        complete:function(){
            $(".more-Info").click(function(){
                localStorage.setItem("postId",$(this).attr("post-id"))
                window.location.href="moreDetails.html"
            })
        },
        success: function (response) {
            for (let index = 0; index < 51; index++) {
                let post = response[index]
                $(".content").append(`
                
                    <div class="card col-md-4 d-inline-block">
                        <img src="${post.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text text-center">AlbumId: ${post.albumId}</p>
                            <h5 class="card-title text-center">${post.title}</h5>
                            <p class="card-text text-center">Id: ${post.id}</p>
                            <a post-id="${post.id}" href="#" class="btn btn-primary more-Info">ვრცლად ნახვა</a>
                        </div>
                    </div>

                `)
            }
        },
        error: function(response){
            alert("მსგავსი რამ არ არსებობს")
        }
    });
})