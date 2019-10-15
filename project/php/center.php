<?php
    include "conn.php";
    $result=$conn->query("select * from head limit 0,4");
    $meizudata=array();
    for($i=0;$i<$result->num_rows;$i++){
        $meizudata[$i]=$result->fetch_assoc();
    }

    echo json_encode($meizudata);