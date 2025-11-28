function cadastrarUsuario(){
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('dataNasc').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;

    var resultado = `${nome} nasceu no dia ${data} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}`
    document.getElementById('resultado').innerText = resultado;
    document.getElementById('resultado').style.color = 'green';
    document.getElementById('resultado').style.fontSize= '24px';
}