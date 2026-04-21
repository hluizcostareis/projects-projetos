<?php
session_start();


$id = $_SESSION['id'] ;
session_write_close();
$conn= new mysqli("localhost", "root","","site_html");
$user=$conn->query("SELECT * FROM usuario WHERE id=$id");
$user=$user->fetch_assoc();

$nome=$user["nome"];
$saldo=$user["saldo"];

$nome=explode(" ", $nome)[0];

$saida=[
    "nome" => $nome,
    "saldo"=>$saldo
];
echo json_encode($saida);