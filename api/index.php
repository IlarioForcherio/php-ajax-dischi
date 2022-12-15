<?php 

include_once __DIR__ . '/../db/index.php';


$arrayDischi = [];



header('Content-type: application/json');

echo json_encode( $arrayDischi );


?>