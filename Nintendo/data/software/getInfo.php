<?php
    require_once("../init.php");
    @$where=$_REQUEST["where"];
    @$pno=$_REQUEST["pno"];
    @$order=$_REQUEST["order"];
    $size=12;
    if($pno==null){
        $pno=1;
    }
    if($where==null||$where==" where "){
        $where=" ";
    }
    $output=[];
    $sql="select count(gid) from soft_game ".$where;
    $result=mysqli_query($conn,$sql);
    $total=mysqli_fetch_row($result)[0];
    $count=ceil($total/$size);
    $start=($pno-1)*$size;
    if($order!=null)
        $sql="select *from soft_game ".$where." order by ".$order.",gid limit $start,$size";
    $result=mysqli_query($conn,$sql);
    $data=mysqli_fetch_all($result,1);
    $output["pno"]=$pno;
    $output["size"]=$size;
    $output["count"]=$count;
    $output["total"]=$total;
    $output["data"]=$data;
    echo json_encode($output);
?>