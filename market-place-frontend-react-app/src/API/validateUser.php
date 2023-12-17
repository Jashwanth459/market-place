<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_name = $data -> User_name;
    $User_password = $data -> User_password;
	$sql = "SELECT * FROM market_place.customer where User_name = '".$User_name."' and User_password = '".$User_password."'";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $customer = $rows;
    $customerType = Json_decode(json_encode($customer[0]['User_type']));
    if ($customerType == 'student') {
        $sql = "SELECT * FROM market_place.student where User_name = '".$User_name."'";
        $q = $conn->prepare($sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($rows);
    } elseif ($customerType == 'bo') {
        $sql = "SELECT * FROM market_place.business_owner where User_name = '".$User_name."'";
        $q = $conn->prepare($sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($rows);
    } elseif ($customerType == 'super_adm') {
        $sql = "SELECT * FROM market_place.super_admin where User_name = '".$User_name."'";
        $q = $conn->prepare($sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($rows);
    } elseif ($customerType == 'sch_adm') {
        $sql = "SELECT * FROM market_place.school_admin where User_name = '".$User_name."'";
        $q = $conn->prepare($sql);
	    $q->execute();
	    $rows = $q->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($rows);
    } else {
        echo 'Failed in fetching User data, Try again after sometime.'
    }
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}