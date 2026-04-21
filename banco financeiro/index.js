document.addEventListener("DOMContentLoaded", function(e){

   document.getElementById("input").addEventListener("submit", function(e){ 
        e.preventDefault(); // Impede a página de recarregar
        let email=document.getElementById("email").value;
        let senha=document.getElementById("senha").value;
        
        
       
        let form=document.getElementById("input");
        let input= new FormData(form)
        fetch("index.php",{
            method: "POST",
            body: input
        })
        .then(res => res.text())
        .then(texto => {
            document.getElementById("msg").innerText = texto;
            if (texto==="sucesso"){
                
                window.location.href="inicio.html"
            }
        });
        
         
        

        
        


    })
})