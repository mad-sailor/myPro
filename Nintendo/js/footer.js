(()=>{
    $.ajax({
        type:"get",
        url:"footer.html"
    }).success(function(data){
        $(`<link rel="stylesheet" href="css/footer.css">`).appendTo($("head"));
        $("#footer").html(data);
        $("a").on("click",function(e){
            e.preventDefault();
        })
    });
})();