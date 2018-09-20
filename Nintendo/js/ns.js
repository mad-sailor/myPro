/*顶层轮播*/
$(()=>{
    var $img=$("div.hero-img>img");
    var i=0;
    function task(){
        if(i<5){
            $(".hero-img>.active").removeClass("active");
            $(".hero-img>.next").removeClass("next");
            i++;
            if(i==5){
                $("div.hero-img>img:eq(0)").addClass("next");
            }else{
                $(`div.hero-img>img:eq(${i+1})`).addClass("next");
            }
            $(`div.hero-img>img:eq(${i})`).addClass("active");
            
        }else{
            $(".hero-img>.active").removeClass("active");
            i=0;
            $("div.hero-img>img:eq(1)").addClass("next");
            $("div.hero-img>img:eq(0)").removeClass("next").addClass("active");
        }
    }
    setInterval(task,5000);
    $("#hero>.logo").click(function(){
        location.href="index.html";
    })
});
/*楼层导航*/
$(()=>{
    var $navMenu=$("#nav-menu");
    var $pMode=$("#play-mode");
    var $multi=$("#multiplay");
    var $joy=$("#joy-con");
    var $cont=$("#container");
    var $scrRight=$("#scroll-right");
    var $floors=$("[data-toggle=floor]");
    var $soft=$("#bot-intr");
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        /*导航栏*/
        var nav_offsetTop=$navMenu.next().offset().top;
        if(nav_offsetTop<=scrollTop+56){
            $navMenu.css({
                position:"fixed",
                top:0,
                zIndex:100,
                overflow:"hidden",
                opacity:".8"
            });
            $("#gallery").css("marginTop",56);
        }
        else{
            $navMenu.css({
                position:"relative",
                opacity:1
            });
            $("#gallery").css("marginTop",0);
        }
        /*playmode*/
        var mode_offsetTop=$pMode.offset().top;
        if(mode_offsetTop<scrollTop+innerHeight/2)
            $pMode.find("[data-trigger=move]").css("top",-195);
        else
            $pMode.find("[data-trigger=move]").css("top",0);
        var img_offsetTop=$pMode.children("div.bottom").offset().top;
        if(img_offsetTop<scrollTop+innerHeight/2)
            $pMode.find("div.mode-img").css("width","100%");
        else
            $pMode.find("div.mode-img").css("width","0%");
        /*multiplay*/
        var multi_offsetTop=$multi.offset().top;
        if(multi_offsetTop<scrollTop+innerHeight/2)
            $multi.css("opacity",1);
        else
            $multi.css("opacity",0);
        /*joy-con*/
        var joy_offsetTop=$joy.offset().top;
        if(joy_offsetTop<scrollTop+innerHeight/2)
            $joy.children("div.mask").css({top:670,height:0});
        else
            $joy.children("div.mask").css({top:0,height:670});
        /*瀑布流布局相关*/
        var con_offsetTop=$cont.offset().top;
        if(con_offsetTop<scrollTop+innerHeight/2){
            $("[data-num=1]").show("blind",1000);
        }
        if(con_offsetTop<scrollTop+367-100){
            $("[data-num=2]").show("fold",1000);
        }
        if(con_offsetTop<scrollTop+367-268){
            $("[data-num=3]").show("clip",1000);
        }
        if(con_offsetTop<scrollTop+367-300){
            $("[data-num=4]").show("fold",1000);
        }
        if(con_offsetTop<scrollTop+367-541){
            $("[data-num=5]").show("fold",1000);
        }
        if(con_offsetTop<scrollTop+367-641){
            $("[data-num=6]").show("fold",1000);
        }
        if(con_offsetTop<scrollTop+367-771){
            $("[data-num=7]").show("fold",1000);
        }
        if(con_offsetTop<scrollTop+367-871){
            $("[data-num=8]").show("slide",1000);
        }
        if(con_offsetTop<scrollTop+367-981){
            $("[data-num=9]").show("slide",1000);
        }
        /*右侧楼层相关*/
        $floors.each(function(i){
            var $f=$(this);
            var f_offsetTop=$f.offset().top;
            if(f_offsetTop<scrollTop+innerHeight/2){
                $scrRight.children(`:eq(${i})`).addClass("chose").siblings().removeClass("chose");
            }
        });
        /*底层相关*/
        var bot_offsetTop=$soft.offset().top;
        if(bot_offsetTop<=scrollTop+innerHeight/2){
            $navMenu.css({
                position:"relative",
                opacity:1
            });
            $("#gallery").css("marginTop",0);
            $scrRight.children().removeClass("chose");
        }
    });
    $scrRight.on("click","[data-njs]",function(){
        var $njs=$(this);
        var i=$njs.index();
        var $f=$($floors[i]);
        var top=$f.offset().top;
        $("html,body").stop(true).animate({
            scrollTop:top
        },1500);
    });
});
/*底层软件展示*/
$(()=>{
    var $ulImg=$(".game-pic>ul");
    setInterval(function(){
        $ulImg.animate({
            left:-380
        },5000,function(){
            $ulImg.children(":first").clone(true).appendTo($ulImg);
            $ulImg.children(":first").remove();
            $ulImg.css("left",0);
        });
    },1000);
});
/*加载play mode*/
$(()=>{
    $.ajax({
        type:"get",
        url:"data/ns/getPlaymode.php",
        dataType:"json",
        success:function(data){
            var html="";
            for(var d of data){
                var {img,mode,mode_en,title,title_sec,sub_title}=d;
                html+=`<div class="mode-item">
                            <div class="mode-img">
                                <img src="${img}">
                            </div>
                            <div class="mode-headline">
                                <p>${mode}</p>
                                <p>${mode_en}</p>
                            </div>
                            <p>${title}
                                <span>${title_sec}</span>
                            </p>
                            <p>${sub_title}</p>
                        </div>`;
            }
            $("#play-mode>div.bottom").html(html);
        }
    });
});
/*跳转页面*/
$("a[data-link=soft]").click(function(){
    location.href="soft.html";
});