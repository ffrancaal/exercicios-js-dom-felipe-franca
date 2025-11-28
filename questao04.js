function validarFormulario(){
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('dataNasc').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const cpfvalido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

   if (nome === "" || cpf === "") {
    var mensagem = `Os campos nome e cpf são obrigatórios`
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('mensagem').style.color='red';
    document.getElementById('mensagem').style.fontSize = '24px';
   }

else if (!cpfvalido.test(cpf)) {
        var mensagem = "CPF inválido! Use o formato 000.000.000-00.";
        document.getElementById('mensagem').innerText = mensagem;
        document.getElementById('mensagem').style.color='red';
        document.getElementById('mensagem').style.fontSize = '24px';
    }
else{ 
    var mensagem = "Cadastro concluído com sucesso!"
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('mensagem').style.color='green';
}
   

}