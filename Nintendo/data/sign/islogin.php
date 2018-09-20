<?php
    session_start();
    @$uid=$_SESSION["uid"];
    if($uid==null){
        echo '{"code":-1}';
    }else{
        require_once("../init.php");
        $sql="select uname from users where uid=$uid";
        $result=mysqli_query($conn,$sql);
        $uname=mysqli_fetch_row($result)[0];
        echo '{"code":1,"uname":"'.$uname.'"}';
    }
?>