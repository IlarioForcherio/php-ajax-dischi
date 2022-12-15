<?php 

include_once __DIR__ . '/../db/index.php';


$arrayDischi = [];


foreach ($database as $object ) {
    $arrayDischi[] = $object;
}




header('Content-type: application/json');

echo json_encode( $arrayDischi );


?>