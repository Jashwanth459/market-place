<?php
require_once 'dbconfig.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $data = json_decode(file_get_contents("php://input"));
    $User_id = $data -> userId;
    $First_name = $data -> firstName;
    $Last_name = $data -> lastName;
    $Phno = $data -> Phno;
    $Email = $data -> email;
    $Address = $data -> address;
    $Password = $data -> password;
    $sql = "SELECT count(*) as customer_count FROM market_place.customer";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $user_type = 'student';
    $customer_next_index = "user_".Json_decode(json_encode($rows[0]["customer_count"]))+1;
    $sql = "INSERT INTO market_place.customer values ('".$customer_next_index."', '".$User_id."', '".$user_type."', '".$Password."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $sql = "SELECT count(*) as student_count FROM market_place.student";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    $student_next_index = "st_".Json_decode(json_encode($rows[0]["student_count"]))+1;
    $Major = 'Computer Science';
    $SUA_user_name = 'sa@mavs.uta.edu';
    $S_user_name = 'scha@mavs.uta.edu';
    $sql = "INSERT INTO market_place.student values ('".$student_next_index."', '".$User_id."', '".$First_name."', '".$Last_name."', '".$Major."', '".$Phno."', '".$Email."', '".$Address."', '".$SUA_user_name."', '".$S_user_name."')";
    $q = $conn->prepare($sql);
	$q->execute();
	$rows = $q->fetchAll(PDO::FETCH_ASSOC);
    echo 'success';
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}