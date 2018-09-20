/*轮播相关js*/
$(()=>{
    var $ulbanner=$("ul.banner");
    var $thumbs=$("div.banner-thumb");
    var LIWIDTH=1440,moved=0,timer=null,wait=4000,interval=500;
    $.ajax({
        type:"get",
        url:"data/index/getCarousel.php",
        dataType:"json",
        success:function(data){
            var html_lg="";
            var html_thumb="";
            for(var d of data){
                var {img,thumb,title,cid}=d;
                html_lg+=`<li class="lf">
                            <a href="#">
                                <img src="${img}">
                            </a>
                        </li>`;
                html_thumb+=`<a href="#" class="line" data-left="${cid-1}" style="background-image: url(${thumb});">${title}</a>`;
            }
            html_lg+=`<li class="lf">
                            <a href="#">
                                <img src="${data[0].img}">
                            </a>
                        </li>`
            $("ul.banner").html(html_lg).css("width",LIWIDTH*(data.length+1));
            $("div.banner-thumb").html(html_thumb);
            $thumbs.children(":first").addClass("active");
            function move(){
                moved++;
                $thumbs.children(`:eq(${moved})`).addClass("active").siblings().removeClass("active");
                $ulbanner.animate({
                    left:-moved*LIWIDTH
                },interval,function(){
                    if(moved==data.length){
                        $ulbanner.css("left",0);
                        moved=0;
                        $thumbs.children(":first").addClass("active").siblings().removeClass("active");
                    }
                });
            }
            function autoMove(){
                timer=setInterval(move,wait);
            }
            autoMove();
            $thumbs.on("click","a",function(e){
                e.preventDefault();
                clearInterval(timer);
                var $a=$(this);
                moved=$a.data("left");
                $ulbanner.stop(true).animate({
                    left:-moved*LIWIDTH
                },interval,function(){
                    $a.addClass("active").siblings().removeClass("active");
                });
                autoMove();
            });
            $("#banner-carousel").hover(
                function(){
                    var $div=$(this).children(":first");
                    $div.next().next().css("left",0).next().css("right",0);
                },
                function(){
                    var $div=$(this).children(":first");
                    $div.next().next().css("left",-40).next().css("right",-40);
                }
            );
            $(".arrow").click(function(){
                var $arrow=$(this);
                if($arrow.hasClass("left")){
                    if(!$ulbanner.is(":animated")){
                        clearInterval(timer);
                        if(moved==0){
                            moved=data.length;
                            $ulbanner.css("left",-LIWIDTH*moved);
                        }
                        moved--;
                        $ulbanner.animate({
                            left:-moved*LIWIDTH
                        },interval,function(){
                            $thumbs.children("a:eq("+moved+")")
                                .addClass("active")
                                .siblings().removeClass("active")
                        });
                    }
                    autoMove();
                }
                else{
                    if(!$ulbanner.is(":animated")){
                        clearInterval(timer);
                        move();
                        autoMove();
                    }
                }
            });
        }
    });
});
/*panel相关js*/
$(()=>{
    $.ajax({
        type:"get",
        url:"data/index/getPanelpic.php",
        dataType:"json",
        success:function(data){
            var html="";
            var $ulImg=$("div.panel-img>ul")
            for(var {img} of data){
                html+=`<li>
                            <a href="#">
                                <img src="${img}">
                            </a>
                        </li>`;
            }
            $ulImg.html(html).on("mouseenter","li",function(){
                $(this).css("background-position","-135px -408px");
            }).on("mouseleave","li",function(){
                $(this).css("background-position","-135px -442px")
            });
            var moved=0,LIWIDTH=900;
            $("#panel-show").hover(
                function(){
                    $(this).children(".panel-left-arrow").css("left",0)
                        .next().css("right",0);
                },
                function(){
                    $(this).children(".panel-right-arrow").css("right",-40)
                        .prev().css("left",-40);
                }
            );
            $(".panel-circle").on("mouseenter","p",function(){
                $(this).addClass("chose").siblings().removeClass("chose");
                moved=parseInt($(this).data("panel"));
                $ulImg.css("left",-moved*LIWIDTH);
            });
            function move(){
                $ulImg.css("left",-moved*LIWIDTH);
                $(`p[data-panel=${moved}]`).addClass("chose").siblings().removeClass("chose");
            }
            $(".panel-left-arrow").click(function(){
                moved--;
                if(moved<0)
                    moved=3;
                move();
            });
            $(".panel-right-arrow").click(function(){
                moved++;
                if(moved>3)
                    moved=0;
                move();
            });
        }
    });
});
$(()=>{
    $.ajax({
        type:"get",
        url:"data/index/getPlatform.php",
        dataType:"json",
        success:function(data){
            var html="";
            for(var d of data){
                var {img,title,price,sup_price,href}=d;
                html+=`<li>
                        <a href="${href}">
                            <img src="${img}">
                            <p>${title}</p>
                            <p>${price}<sup>${sup_price}</sup></p>
                        </a>
                    </li>`;
            }
            $("ul.platform").html(html);
        }
    });
});
$(()=>{
    $("a").on("click",function(e){
        e.preventDefault();
    })
});