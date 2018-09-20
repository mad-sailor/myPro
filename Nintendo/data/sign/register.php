<?php
    @$uname=$_REQUEST["uname"];
    @$upwd=$_REQUEST["upwd"];
    @$email=$_REQUEST['email'];
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
    $reg='/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/';
    $res=preg_match($reg,$email);
    if(!$res){
        die('{"code":-1,"msg":"邮箱格式错误"}');
    }
    require_once("../init.php");
    $sql="select uid from users where binary uname='$uname'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if(mysqli_error($conn)){
        echo mysqli_error($conn);
    }
    if($row!=null){
        die('{"code":-1,"msg":"用户名已存在"}');
    }else{
        $sql="insert into users values(null,'$uname',md5('$upwd'),'$email')";
        mysqli_query($conn,$sql);
        $sql="select uid from users where uname='$uname'";
        $result=mysqli_query($conn,$sql);
        $uid=mysqli_fetch_row($result)[0];
        session_start();
        $_SESSION["uid"]=$uid;
        echo '{"code":1,"msg":"注册成功,点击确认返回首页"}';
    }
?>