$(function(){
    $("#user").on("click","b",function(){
        var $b = $(this);
        $b.addClass("chose").siblings("b").removeClass("chose");
        if($b.html()=="登录"){
            $(".login").removeClass("hide").siblings(".register").addClass("hide");
        }else{
            $(".register").removeClass("hide").siblings(".login").addClass("hide");
        }
    });
    $(".login>form>button:last").click(function(e){
        e.preventDefault();
        $("#user>b.chose").removeClass("chose").next().addClass("chose");
        $(this).parent().parent().addClass("hide").next().removeClass("hide");
    });
    $(":checkbox").click(function(){
        var $ckb = $(this);
        if($ckb.is(":checked")){
            $ckb.siblings(".chose").removeClass("disable").prop("disabled",false);
        }else{
            $ckb.siblings(".chose").addClass("disable").prop("disabled",true);
        }
    });
    $("#reg>.chose").click(function(e){
        e.preventDefault();
        var $btn=$(this);
        var uname=$btn.parent().children().first().val();
        var upwd=$btn.parent().children(":nth-child(2)").val();
        var cpwd=$btn.parent().children(":nth-child(3)").val();
        var email=$btn.parent().children(":nth-child(4)").val();
        var reg=/^[a-zA-Z][a-zA-Z0-9]{2,8}$/;
        if(!reg.test(uname)){
            alert("用户名格式错误!");
            return;
        }
        var reg=/^[a-zA-Z0-9]{6,16}$/;
        if(!reg.test(upwd)){
            alert("密码格式错误!");
            return;
        }
        if(upwd!==cpwd){
            alert("两次密码不一致!");
            return;
        }
        var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if(!reg.test(email)){
            alert("邮箱格式错误!");
            return;
        }
        $.ajax({
            type:"post",
            url:"data/sign/register.php",
            data:{uname,upwd,email},
            success:function(res){
                var {code,msg}=res;
                if(code==1){
                    confirm(msg);
                    location.href="index.html";
                }else{
                    alert(msg);
                }
            }
        });
    });
    $("#log>.chose").click(function(e){
        e.preventDefault();
        var $btn=$(this);
        var uname=$btn.parent().children().first().val();
        var upwd=$btn.parent().children(":password").val();
        var reg=/^[a-zA-Z][a-zA-Z0-9]{2,8}$/;
        if(!reg.test(uname)){
            alert("用户名格式错误!");
            return;
        }
        var reg=/^[a-zA-Z0-9]{6,16}$/;
        if(!reg.test(upwd)){
            alert("密码格式错误!");
            return;
        }
        $.ajax({
            type:"post",
            url:"data/sign/signin.php",
            data:{uname,upwd},
            success:function(res){
                var {code,msg}=res;
                console.log(res);
                if(code==1){
                    alert(msg);
                    location.href=location.search.slice(6);
                }else{
                    alert(msg);
                }
            }
        });
    })
});