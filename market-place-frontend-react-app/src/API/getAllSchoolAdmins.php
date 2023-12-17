<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: *');

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    //$sql = "select market_place.products.*, market_place.student_cart.quantity as cart_p_quantity from market_place.products, market_place.student_cart where market_place.products.p_id = market_place.student_cart.p_id and market_place.products.p_id in (select p_id from market_place.student_cart where student_user_name = '".$User_name."')";
	$sql = "select * from market_place.school_admin";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rows);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}