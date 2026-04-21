let button = document.getElementById("foto_perfil");
let fileInput = document.getElementById("file");
let chave_pix = document.getElementById("chave_pix");

// 1. Ao clicar no botão da foto, abre a janela de escolher arquivo
button.addEventListener("click", function() {
    fileInput.click();
});

// 2. GATILHO: Assim que você escolher a foto, a função de subir roda sozinha
fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0) {
        subirImagem();
    }
});

// 3. Botão para trocar de página
chave_pix.addEventListener("click", function() {
    window.location.href = "chaves_pix.html";
});

// 4. Função que faz a mágica do upload
async function subirImagem() {
    const arquivo = fileInput.files[0];
    const reader = new FileReader();

    // Mostra no console que o processo começou
    console.log("Iniciando leitura do arquivo...");

    reader.onload = async function() {
        // Transforma a imagem em texto (Base64)
        const base64 = reader.result.split(',')[1];
        
        const payload = {
            base64: base64,
            type: arquivo.type,
            name: arquivo.name
        };

        // Seu URL do Google Apps Script
        const urlScript = '';

        try {
            // Envia para o Google
            await fetch(urlScript, {
                method: 'POST',
                mode: 'no-cors', // Evita o erro de trava do navegador (CORS)
                body: JSON.stringify(payload)
            });

            alert('Imagem enviada com sucesso!');
        } catch (error) {
            console.error("Erro no envio:", error);
            alert("Erro ao conectar com o Google.");
        }
    };

    // Comando que inicia a leitura da imagem
    reader.readAsDataURL(arquivo);
}