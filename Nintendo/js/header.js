$(()=>{
    $.ajax({
        type:"get",
        url:"header.html",
        success:function(data){
                    $(`<link rel="stylesheet" href="css/header.css">`).appendTo($("head"));
                    $("#header").html(data);
                    (function(){
                        $("#search>div.search-input>.frame").click(function(){
                            $div=$(this);
                            $div.css("display","none")
                                .next().addClass("hide")
                                .next().attr("src","img/index/search2.png")
                                .parent().prev().removeClass("hide")
                                .children("ul").addClass("show")
                                .prev().focus();
                            $("#mask").removeClass("hide").addClass("show").click(function(){
                                    $("#search>.search-container>input").next().removeClass("show").addClass("hide")
                                    .parent().addClass("hide")
                                    .next().children(":first-child").css("display","block")
                                    .next().removeClass("hide")
                                    .next().attr("src","img/index/search1.png");
                                    $(this).removeClass("show").addClass("hide");
                            });
                        });
                    })();
                    
                    (function(){
                        $("#main>div.bottom-nav").on("mouseenter","a",function(){
                            var $a=$(this);
                            var i=$("#main>div.bottom-nav>a").index($a);
                            $a.addClass($a.data("color"));
                            $("#expended").addClass("navShow")
                            .children(`:nth-child(${i+1})`).addClass("gameShow");
                        })
                        .on("mouseleave","a",function(){
                            var $a=$(this);
                            var i=$("#main>div.bottom-nav>a").index($a);
                            $a.removeClass($a.data("color"));
                            $("#expended").removeClass("navShow")
                            .children(`:nth-child(${i+1})`).removeClass("gameShow");
                        });
                        $("#expended").on("mouseenter",".gameHide",function(){
                            $div=$(this);
                            var i=$("#expended>div").index($div);
                            var cs=$div.addClass("gameShow")
                                .parent().addClass("navShow")
                                .prev().children(`:nth-child(${i+1})`).data("color");
                            $(".bottom-nav").children(`:nth-child(${i+1})`).addClass(cs);
                        }).on("mouseleave",".gameShow",function(){
                            $div=$(this);
                            $div.removeClass("gameShow")
                                .parent().removeClass("navShow")
                                .prev().children().removeClass();
                        });
                    })();

                    (function(){
                        $("#search>.search-container>input.search").keyup(function(e){
                            var $input=$(this);
                            var key = $input.val();
                            if(e.keyCode==13){
                                location.href="soft.html?key="+key;
                            }
                        });
                        $(window).scroll(function(){
                            var scrollTop=document.body.scrollTop||  document.documentElement.scrollTop;
                            var $header=$("#header");
                            if(scrollTop>0){
                                $header.css({
                                    position:"fixed",
                                    top:0,
                                    zIndex:100,
                                    background:"#fff"
                                });
                                $header.next().css("marginTop",72);
                            }
                            else{
                                $header.css({
                                    position:"relative"
                                });
                                $header.next().css("marginTop",0);
                            }
                        });
                        $("img[data-link=soft]").click(function(){
                            var key=$("#search>.search-container>input.search").val();
                            location.href="soft.html?key="+key;
                        });
                    })();

                    (function(){
                        $("#search>.user>span.log").click(function(e){
                            e.preventDefault();
                            location.href="login.html?back="+location.href;
                        });
                    })();

                    function isLog(){
                        $.ajax({
                            type:"get",
                            url:"data/sign/islogin.php",
                            success:function(res){
                                var {code,uname}=res;
                                console.log(res);
                                if(code==1){
                                    $("#search>.user>.log").hide().next().show().children("[data-uname]").html(uname);
                                }else{
                                    $("#search>.user>.log").show().next().hide();
                                }
                            }
                        });
                    }
                    isLog();
                    $("[data-out]").click(function(){
                        $.ajax({
                            type:"get",
                            url:"data/sign/signout.php",
                            success:isLog
                        });
                    })
                }
    });
});