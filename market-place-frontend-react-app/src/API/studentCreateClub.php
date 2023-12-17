<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $Club_name = $data -> Club_name;
    $Club_description = $data -> Club_name;
    // $Club_creation_date = $data -> Club_creation_date;
    $Club_img = $data -> Club_img;
    $sql = "SELECT count(*) as club_count FROM market_place.club";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $user_type = 'student';
    $club_next_index = "club_".Json_decode(json_encode($rows[0]["club_count"]))+1;
    $sql = "INSERT INTO club values ('".$club_next_index."', '".$Club_name."', '".$Club_description."', '".$User_name."', '2022-11-05', '".$Club_img."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status'=> 1]);
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}