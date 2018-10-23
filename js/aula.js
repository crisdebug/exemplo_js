document.getElementById('mudar').onclick = function mudarCor() {
    const body = document.getElementById('corpo');

    let random = Math.random() * 8;
    let cores = ["green", "blue", "red", "gray", "pink", "white", "black"];
    let cor = cores[parseInt(random)];

    body.style.background = cor;
}

document.getElementById('qtd').oninput = function calculaTotal() {
    const qtd = document.getElementById('qtd');
    if (qtd.value > 0) {
        document.getElementById('comprar').disabled = false;
        let value = qtd.value;
        const total = document.getElementById('total');
        const mult = document.getElementById('valor');
        total.innerHTML = value * parseInt(mult.textContent);
    }else{
        document.getElementById('comprar').disabled = true;
    }

}

document.getElementById('comprar').onclick = function comprar(){
    const msg = document.getElementById('msg');
    msg.classList.add('alert-success')
    msg.innerHTML = "Obrigado por comprar!!";
}
