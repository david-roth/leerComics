<?php
// Create connection
$con=mysqli_connect("localhost:3306","root","","comic");

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//set charset to utf8
if (!$con->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $con->error);
} else {
    //get the comics
    $result = mysqli_query($con,"SELECT * FROM comic");
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    //transform to json
    print json_encode($rows);
}

//close connection
mysqli_close($con);