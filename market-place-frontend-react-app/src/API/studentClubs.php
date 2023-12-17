<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $sql = "select * from club where club_id in (select club_id from club_students where st_user_name = '".$User_name."')";
	// $sql = "select * from market_place.products where p_id in (select p_id from market_place.student_cart where student_user_name = '".$User_name."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows_clubs = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql = "select * from club where club_id not in (select club_id from club_students where st_user_name = '".$User_name."')";
	// $sql = "select * from market_place.products where p_id in (select p_id from market_place.student_cart where student_user_name = '".$User_name."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows_non_clubs = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode(['status'=> 1, 'clubs' => $rows_clubs, 'non_clubs' => $rows_non_clubs]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}