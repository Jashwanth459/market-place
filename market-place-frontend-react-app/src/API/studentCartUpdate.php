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
    $Quantity = $data -> Quantity;
    $update_quantity_sql = "Update market_place.student_cart set quantity = '".$Quantity."' where student_user_name = '".$User_name."' and p_id = '".$Product_id."'";
    $q = $conn->prepare($update_quantity_sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql = "select market_place.products.*, market_place.student_cart.quantity as cart_p_quantity from market_place.products, market_place.student_cart where market_place.products.p_id = market_place.student_cart.p_id and market_place.products.p_id in (select p_id from market_place.student_cart where student_user_name = '".$User_name."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rows);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}