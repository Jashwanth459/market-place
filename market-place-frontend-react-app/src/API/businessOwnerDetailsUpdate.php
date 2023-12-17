<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> SAuserName;
    $SCHAfirstName = $data -> SAfirstName;
    $SCHAlastName = $data -> SAlastName;
    $SCHAmailId = $data -> SAmailId;
    $SCHAmobile = $data -> SAmobile;
    $SCHAaddress = $data -> SAaddress;
    $update_quantity_sql = "Update market_place.business_owner set FName = '".$SCHAfirstName."',LName = '".$SCHAlastName."',Mobile = '".$SCHAmobile."',Mail_id = '".$SCHAmailId."',Address = '".$SCHAaddress."' where User_name = '".$User_name."'";
    $q = $conn->prepare($update_quantity_sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}