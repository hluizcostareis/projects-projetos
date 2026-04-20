<?php
session_start();


$id = $_SESSION['id'] ;
session_write_close();
$conn= new mysqli("localhost", "root","","site_html");
$user=$conn->query("SELECT * FROM usuario WHERE id=$id");
$user=$user->fetch_assoc();

$saldo=$user["id"];

$saida=[
    
    "id"=>$id
];

echo json_encode($saida);