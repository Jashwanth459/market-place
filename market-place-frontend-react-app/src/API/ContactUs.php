<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $First_name = $data -> First_name;
    $Last_name = $data -> Last_name;
    $Phno = $data -> Phno;
    $Email = $data -> Email;
    $Query = $data -> Query;
    $sql = "SELECT count(*) as query_count FROM market_place.customer_queries";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $query_next_index = "query_".Json_decode(json_encode($rows[0]["query_count"]))+1;
    $sql = "INSERT INTO customer_queries values ('".$query_next_index."', '".$Email."', '".$First_name."', '".$Last_name."', '".$Email."', '".$Phno."', '".$Query."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo 'success';
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}