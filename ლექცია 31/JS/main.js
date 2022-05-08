$(".btn").click(function(){
    let Name = $(this).parent().find(".card-title").text()
    let Price = $(this).parent().find(".card-text").text()
    let Img = $(this).parents(".card").find(".card-img-top").attr("src")
    
    $(".parts").append(`
        <tr>
            <td>
                <img src="${Img}" class="card-img-top" alt="...">
            </td>
            <td class="Name">--------${Name}----</td>
            <td class="Price">----${Price}--------</td>
            <td class="DelBTn"><i class="bi bi-trash3-fill"></i></td>
        </tr>
    `)
    $(".DelBTn").click(function(){
        $(this).parents("tr").remove()
    })
})
$(".DelBTnn").click(function(){
    $("tr").parents(".parts").empty()
})