fetch('inicio.php')
        .then(res => res.json())
        .then(texto => {
            document.getElementById("nome").innerText = "ola "+texto.nome+"!";
            document.getElementById("dinheiro").innerText="R$:"+texto.saldo
            
                
                
            
        });
let pix=document.getElementById("pix")

pix.addEventListener("click", function() {
    window.location.href="pix.html"
})

document.getElementById("perfil").addEventListener("click", function(){
    window.location.href="perfil.html"
})
