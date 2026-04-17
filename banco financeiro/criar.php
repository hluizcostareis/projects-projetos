<?php

$conn = new mysqli("localhost", "root", "", "site_html");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!empty($_POST["email"]) && !empty($_POST["senha"])) {

        $email = $_POST["email"];
        $senha = $_POST["senha"];
        $cpf=$_POST["cpf"];
        $nome=$_POST["nome"];

        $select ="SELECT * FROM usuario WHERE`email`='$email';";
        if($conn->query($select)->num_rows>0){
            echo"Erro: email já existe";
            return;
        }
        $sql = "INSERT INTO usuario (email, senha, cpf, nome) VALUES ('$email', '$senha', '$cpf', '$nome')";

        if ($conn->query($sql) === TRUE) {
            echo "Cadastrado com sucesso!";
        } 

    } else {
        echo "Preencha todos os campos!";
    }
        
}
