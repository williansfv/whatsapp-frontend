async function enviarMensagem(){
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;
  const respostaDiv = document.getElementById('resposta');

  if (!telefone || !mensagem) {
    alert("Digite o telefone e a mensagem.");
    return;
  }

  const response = await fetch('http://localhost:3000/enviar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ telefone, mensagem })
  });

  const resultado = await response.json();

  if (resultado.success) {
    respostaDiv.innerHTML = '✅ Mensagem enviada com sucesso!';
  } else {
    respostaDiv.innerHTML = '❌ Erro ao enviar mensagem. Confira o console.';
    console.error(resultado.error);
  }
}
