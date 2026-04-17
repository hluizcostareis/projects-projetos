document.addEventListener("DOMContentLoaded", function(e){

   document.getElementById("dados").addEventListener("submit", function(e){
        e.preventDefault();
        let email=document.getElementById("email").value;
        let senha=document.getElementById("senha").value;
        let cpf=document.getElementById("cpf").values
        let nome=document.getElementById("nome")
        
        
       

        

        

        let form=document.getElementById("dados");
        let dados= new FormData(form)

        fetch("criar.php",{
            method: "POST",
            body: dados
        })
        .then(res => res.text())
        .then(texto => {
            document.getElementById("msg").innerText = texto;
            if(texto==="Cadastrado com sucesso!"){
                window.location.href="index.html"
            }
        });
        


    })
})

