<?php
    require_once("../init.php");
    $sql="select *from index_carousel";
    $result=mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($result,1));
?>