<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> StuserName;
    $StfirstName = $data -> StfirstName;
    $StlastName = $data -> StlastName;
    $StmailId = $data -> StmailId;
    $Stmobile = $data -> Stmobile;
    $Staddress = $data -> Staddress;
    $update_quantity_sql = "Update market_place.student set FName = '".$StfirstName."',LName = '".$StlastName."',Mobile = '".$Stmobile."',Mail_id = '".$StmailId."',Address = '".$Staddress."' where User_name = '".$User_name."'";
    $q = $conn->prepare($update_quantity_sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}