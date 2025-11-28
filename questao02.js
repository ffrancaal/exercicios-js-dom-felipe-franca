function mudarForma() {
    const forma = document.getElementById('forma'); 

    if (forma.style.borderRadius === '0%' || forma.style.borderRadius === '0px') {
        forma.style.borderRadius = '50%';
        var msg = `Mudar forma`
        document.getElementById('btn-forma').innerText = msg;
    } 
    
    else {
        forma.style.borderRadius = '0%';
        var msg = `Retornar forma original`
        document.getElementById('btn-forma').innerText = msg;
    }

}