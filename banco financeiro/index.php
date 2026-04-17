<?php
session_start();
$conn = new mysqli("localhost", "root", "", "site_html");
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (!empty($_POST["email"]) && !empty($_POST["senha"])) {
            $email = $_POST["email"];
            $senha = $_POST["senha"];

            $result = $conn->query("SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'");
            if($result->num_rows<=0){
                echo "ususario ou senha incorretos";
                
            }
            else{
                $dados=$result->fetch_assoc();

                $_SESSION["id"]=$dados["id"];
                
                

                echo "sucesso";

            }
        } else {
            echo "preencha todos os campos";
        }
    }
?>