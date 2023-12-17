<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $BOfirstName = $data -> BOfirstName;
    $BOlastName = $data -> BOlastName;
    $BOmailId = $data -> BOmailId;
    $BOmobile = $data -> BOmobile;
    $BOaddress = $data -> BOaddress;
    $update_quantity_sql = "Update market_place.business_owner set FName = '".$BOfirstName."',LName = '".$BOlastName."',Mobile = '".$BOmobile."',Mail_id = '".$BOmailId."',Address = '".$BOaddress."' where User_name = '".$User_name."'";
    $q = $conn->prepare($update_quantity_sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}