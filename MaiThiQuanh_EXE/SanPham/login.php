<?php 

 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

// check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = $obj['username'];
$password = md5($obj['password']);

    $Sql_Query = "SELECT * FROM account WHERE username='$username' AND password ='$password'";
    
    if(mysqli_query($con,$Sql_Query)){
     $MSG = 'ok';
     $json = json_encode($MSG);
     echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);

?>
