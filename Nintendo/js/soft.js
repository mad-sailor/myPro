$(()=>{
    $(".middle>.left>ul").on("click","li.theme>h1",function(){
        var $h1=$(this);
        if($h1.next().css("height")=="0px"){
            var LHEIGHT=25;
            var num=$h1.next().children().length;
            $h1.next().animate({height:`${num*LHEIGHT}`},500).parent().addClass("chose");
        }else{
            $h1.next().animate({height:0},500).parent().removeClass("chose");
        }
    });
    function load_box(pno,order,where){
        $.ajax({
            type:"get",
            url:"data/software/getInfo.php",
            data:{pno,order,where},
            dataType:"json",
            success:function(output){
                var datas=output.data;
                var html="";
                for(var d of datas){
                    var {gid,img,title,timer,platform}=d;
                    html+=`<div class="game-box">
                    <div>
                        <img src="${img}">
                    </div>
                    <p>${title}</p>
                    <p>Release ${timer}</p>
                    <p>${platform}</p>
                </div>`;
                }
                $(`${html}`).appendTo("#res>.middle>.pro");
                $("#res>.middle>.pro").attr("data-count",`${output.count}`);
                if(output.pno==output.count){
                    $("[data-load]").html("No more games");
                }
            }
        });
    }
    function load_row(pno,order,where){
        $.ajax({
            type:"get",
            url:"data/software/getInfo.php",
            data:{pno,order,where},
            dataType:"json",
            success:function(output){
                var datas=output.data;
                var html="";
                for(var d of datas){
                    var {gid,img,title,timer,platform,price,genre,players}=d;
                    html+=`<div class="game-row">
                    <div class="pic">
                        <img src="${img}">
                    </div>
                    <div class="desc">
                        <p>${title}</p>
                        <p>Release ${timer}</p>
                        <p>No. of Players ${players}</p>
                        <p>Genre ${genre}</p>
                        <p>${platform}</p>
                    </div>`;
                    if(price!=null){
                        if(price==0)
                            price="FREE";
                        else
                            price="$"+parseFloat(price).toFixed(2);
                        html+=`<div class="price">
                            <p>${price}</p>
                            <p>Bug digital</p>
                            <p>Buy physical &gt;</p>
                            </div>`;
                    }
                    html+=`</div>`;
                }
                $(`${html}`).appendTo("#res>.middle>.pro");
                $("#res>.middle>.pro").attr("data-count",`${output.count}`);
                if(output.pno==output.count){
                    $("[data-load]").html("No more games");
                }
            }
        });
    }
    function load(pno,val){
        /*顺序*/
        var order;
        switch (val){
            case "gid":
                order="gid";
                break;
            case "timer-asc":
                order="timer";
                break;
            case "timer-desc":
                order="timer desc";
                break;
            case "title-a":
                order="title";
                break;
            case "title-z":
                order="title desc";
                break;
            case "price-l":
                order="price";
                break;
            case "price-h":
                order="price desc";
                break;
        }
        /*查询条件*/
        var $lis=$("span.icon-gouxuan");
        var arr=[];
        $lis.each(function(i){
            var $span=$(this);
            var title=$span.parent().parent().prev().html();
            var kw=$span.next().html();
            if(title=="Character"){
                arr[i]=` title like "%${kw}%" `;
            }else if(title=="Category"){
                arr[i]=` genre like "%${kw}%" `;
            }else{
                kw=kw;
                arr[i]=` platform like "%${kw}%" `;
            }
        });
        var where=" where "+arr.join(" and ");
        var key=location.search.split("=")[1];
        if(key!=undefined&&key!=""){
            key = decodeURI(key);
            key = ` (title like "%${key}%" or platform like "%${key}%" or genre like "%${key}%") `;
            if( where==" where ")
                where+= key;
            else
                where+=" and "+key;
        }
        if(where==" where "){
            $("#res>.middle>.pro").attr("data-count",7);
        }
        /*显示方式*/
        if($("a[data-type].chose").attr("data-type")=="row"){
            load_row(pno,order,where);
        }else{
            load_box(pno,order,where);
        }
    }
    load(1,"gid");
    /*加载更多*/
    $("[data-load]").click(function(){
        var $btn=$(this);
        var pno=parseInt($btn.attr("data-load"))+1;
        $btn.attr("data-load",pno);
        var count=parseInt($("#res>.middle>.pro").attr("data-count"));
        var val=$("#order").val();
        if(pno<=count){
            load(pno,val);
        }
    });
    /*修改排列方式*/
    $("a[data-type]").click(function(){
        var $a=$(this);
        $a.addClass("chose").siblings("a").removeClass("chose");
        $("button[data-load]").attr("data-load","1").html("Load More Games");
        var val=$("#order").val();
        $("#res>.middle>.pro").html("");
        load(1,val);
    });
    /*排序*/
    $("#order").change(function(){
        var val=$(this).val();
        $("#res>.middle>.pro").html("");
        $("button[data-load]").attr("data-load","1").html("Load More Games");
        load(1,val);
    });
    /*模糊条件*/
    $(".middle>.left>ul").on("click","li.theme>ul>li",function(e){
        var $li=$(this);
        $li.children("span.iconfont").toggleClass("icon-gouxuan");
        $("#res>.middle>.pro").html("");
        var val=$("#order").val();
        $("button[data-load]").attr("data-load","1").html("Load More Games");
        load(1,val);
    });
    /*清除所有*/
    $("button[data-triggle=refresh]").click(function(){
        location.href="soft.html";
    });
});