<?php
    require_once("../init.php");
    @$uname=$_REQUEST["uname"];
    @$upwd=$_REQUEST["upwd"];
    $reg='/^[a-zA-Z][a-zA-Z0-9]{2,8}$/';
    $res=preg_match($reg,$uname);
    if(!$res){
        die('{"code":-1,"msg":"用户名格式错误"}');
    }
    $reg='/^[a-zA-Z0-9]{6,16}$/';
    $res=preg_match($reg,$upwd);
    if(!$res){
        die('{"code":-1,"msg":"密码格式错误"}');
    }
    $sql="select uid from users where binary uname='$uname' and upwd=md5('$upwd')";
    $result=mysqli_query($conn,$sql);
    $uid=mysqli_fetch_row($result)[0];
    if($uid!=null){
        session_start();
        $_SESSION["uid"]=$uid;
        echo '{"code":1,"msg":"登录成功!"}';
    }else{
        echo '{"code":-1,"msg":"登录失败!用户名或密码错误"}';
    }
    
?>