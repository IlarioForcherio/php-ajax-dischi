<?php 

include_once __DIR__ . '/../db/index.php';


// $arrayDischi = [];

$arrayGeneri = [];


if( !empty($_GET) && !empty($_GET['genre'])){
   
    foreach($database as $elem){
    
    if($elem['genre'] == $_GET['genre']){
        $arrayGeneri[] = $elem;
    }
   }

}else{
    $arrayGeneri =  $database;
};






header('Content-type: application/json');

echo json_encode( $arrayGeneri );


?>