<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
	$sql_trending_products = 'SELECT * FROM market_place.products where category= "trending"';
    $q = $conn->prepare($sql_trending_products);
	$q->execute();
	$trending_products = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql_latest_products = 'SELECT * FROM market_place.products where category= "latest"';
    $q = $conn->prepare($sql_latest_products);
	$q->execute();
	$latest_products = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql_general_products = 'SELECT * FROM market_place.products where category not in ("trending", "latest")';
    $q = $conn->prepare($sql_general_products);
	$q->execute();
	$general_products = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql_promotion = 'SELECT * FROM market_place.promotions limit 1';
    $q = $conn->prepare($sql_promotion);
	$q->execute();
	$promotion = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['trending_products'=> $trending_products, 'latest_products' => $latest_products, 'general_products' => $general_products, 'promotion' => $promotion]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}