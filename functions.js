

function actualizarTextoNumeroTarjeta() {
    let textoNumeroTarjeta = document.getElementById('cardNum').value;
    let numeroTarjeta = document.getElementById('number-card');
    numeroTarjeta.textContent = textoNumeroTarjeta;
}

function actualizarTextoNombre(){
    let textoNombreTarjeta = document.getElementById('name').value;
    let nombreTarjeta = document.getElementById('name-card');
    nombreTarjeta.textContent = textoNombreTarjeta;
}

function actualizarTextoMes(){
    let textoNumeroTarjeta = document.getElementById('month').value;
    let numeroTarjeta = document.getElementById('number-card');
    numeroTarjeta.textContent = textoNumeroTarjeta;
}

function actualizarTextoAnio(){
    let textoNumeroTarjeta = document.getElementById('year').value;
    let numeroTarjeta = document.getElementById('number-card');
    numeroTarjeta.textContent = textoNumeroTarjeta;
}

function actualizarTextoCodigo(){
    let textoCodigoTarjeta = document.getElementById('code').value;
    let codigoTarjeta = document.getElementById('code-card');
    codigoTarjeta.textContent = textoCodigoTarjeta;
}

function separar_por_cantidad(){
    let inputTarjeta = document.getElementById('cardNum');
    let numeros = [ 4, 8, 12, 16];
    for(let i = 0; i < inputTarjeta.value.lenght; i++){
        if(inputTarjeta.value.lenght == numeros[i]){
            inputTarjeta.value = inputTarjeta.value + " ";
        } else if(inputTarjeta.value.lenght == (numeros[i]+2)){
            inputTarjeta.value = inputTarjeta.value + " ";
        }
    }
    
}