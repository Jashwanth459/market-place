<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
	$sql = 'SELECT * FROM market_place.products';
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($rows);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}