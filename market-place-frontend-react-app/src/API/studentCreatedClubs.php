<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
	$sql = "SELECT * FROM market_place.club where owner_user_name = '".$User_name."'";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rows);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}