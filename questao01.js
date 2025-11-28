function inserirTitulo() {
    const valorDigitado = document.getElementById('txt-titulo').value;
    document.getElementById('titulo').innerText = valorDigitado;
    document.getElementById('titulo').style.color = 'blue';
}