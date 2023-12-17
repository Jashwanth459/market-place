<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $prod_name = $data -> prod_name;
    $prod_description = $data -> prod_desc;
    $quantity = $data -> quant;
    $pricePerUnit = $data -> ppu;
    $imageUrl = $data -> prodImageUrl;
    // $Club_creation_date = $data -> Club_creation_date;
    $sql = "SELECT count(*) as prod_count FROM market_place.products";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    //$user_type = 'student';
    $prod_next_index = "product_".Json_decode(json_encode($rows[0]["prod_count"]))+1;
    //$sql = "INSERT INTO club values ('".$club_next_index."', '".$Club_name."', '".$Club_description."', '".$User_name."', '2022-11-05', '".$Club_img."')";
    $sql = "INSERT INTO products (p_id,p_name,p_description,quantity,price_per_unit,p_img,owner_user_name) values ('".$prod_next_index."', '".$prod_name."', '".$prod_description."', '".$quantity."', '".$pricePerUnit."', '".$imageUrl."', '".$User_name."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}