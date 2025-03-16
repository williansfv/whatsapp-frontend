const API_URL = "https://whatsapp-api-node-ict7.onrender.com/enviar"; 

async function enviarMensagem(){
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;
  const respostaDiv = document.getElementById('resposta');

  if (!telefone || !mensagem) {
    alert("Digite o telefone e a mensagem.");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ telefone, mensagem })
    });

    const resultado = await response.json();

    if (resultado.success) {
      respostaDiv.innerHTML = '<p class="success">✅ Mensagem enviada com sucesso!</p>';
    } else {
      respostaDiv.innerHTML = '<p class="error">❌ Erro ao enviar mensagem. Confira o console.</p>';
      console.error(resultado.error);
    }
  } catch (error) {
    respostaDiv.innerHTML = '<p class="error">❌ Erro ao conectar ao servidor.</p>';
    console.error("Erro de conexão:", error);
  }
}
