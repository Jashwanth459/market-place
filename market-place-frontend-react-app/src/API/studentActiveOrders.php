<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
	$data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
	$sql = "select * from market_place.products where p_id in (select product_id from student_order_products where order_id in (select order_id from student_orders
	where order_id in (select order_id from student_order_products where student_user_name  = '".$User_name."' group by order_id)
	and status = 'success'));";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rows);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}