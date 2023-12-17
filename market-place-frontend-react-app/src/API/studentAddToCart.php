<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $Product_id = $data -> Product_id;
    $sql = "select * from market_place.student_cart where student_user_name = '".$User_name."' and p_id = '".$Product_id."'";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $cnt = count($rows);
    if ($cnt > 0) {
        $Quantity = Json_decode(json_encode($rows[0]['quantity']));
        $Quantity = $Quantity+1;
        $update_quantity_sql = "Update market_place.student_cart set quantity = '".$Quantity."' where student_user_name = '".$User_name."' and p_id = '".$Product_id."'";
        $q = $conn->prepare($update_quantity_sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['status'=> 1]);
    } else {
        $insert_to_cart_sql = "INSERT INTO student_cart values ('".$User_name."', '".$Product_id."', 1)";
        $q = $conn->prepare($insert_to_cart_sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['status'=> 1]);
    }
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}