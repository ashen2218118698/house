<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=UTF-8");
$id = $_REQUEST['id'];
$mysqli = new mysqli("127.0.0.1", "ugeydqpa_lihuan", "150960", "ugeydqpa_test", 3306);
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
$mysqli->set_charset('utf8');
$result = $mysqli->query("select * from house where id = '{$id}'");
$list = array();
while($row = $result->fetch_array(MYSQLI_ASSOC)){
$list[]=$row;
}
echo json_encode($list);
$result->free();
$mysqli->close();

?>