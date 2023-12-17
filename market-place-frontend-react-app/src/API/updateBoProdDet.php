<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $pid = $data -> pid;
    $pname = $data -> pname;
    $pdesc = $data -> pdesc;
    $pricePerProd = $data -> ppu;
    $quant = $data -> quant;
    $update_quantity_sql = "Update market_place.products set p_name = '".$pname."',p_description = '".$pdesc."',price_per_unit = '".$pricePerProd."',quantity = '".$quant."' where p_id = '".$pid."'";
    $q = $conn->prepare($update_quantity_sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}