/*window.addEventListener('load', function(){*/
const formTarjet = document.querySelector('form.block')

/* TARJETA DE CREDITO/DEBITO */
formTarjet.addEventListener('submit', function(event){
    event.preventDefault() //previene comportamiento predeterminado del Get

    let errors = 0
    
    let inputName = document.querySelector('#name')
    let errorName = document.getElementById("errorName")
    errors += validar(inputName, errorName)

    let inputCardNum = document.querySelector('#cardNum')
    let errorCardNum = document.getElementById("errorCardNum")
    errors += validar(inputCardNum, errorCardNum)

    let inputMonth = document.querySelector('#month')
    let errorMonth = document.getElementById("errorMonth")
    errors += validar(inputMonth, errorMonth)

    let inputYear = document.querySelector('#year')
    let errorYear = document.getElementById("errorYear")
    errors += validar(inputYear, errorYear)

    let inputCode = document.querySelector('#code')
    let errorCode = document.getElementById("errorCode")
    errors += validar(inputCode, errorCode)

    if(errors == 0){
        this.submit()
    }
})

// Función
function validar(elemento, elementoError){
    let errors = 0
    if (elemento.value == ''){
        elementoError.innerHTML = ''
        elementoError.innerHTML = "Can't be blank"
        elemento.style.borderColor = "red"
        errors += 1
    } else if(elemento.id == 'name'){
        if(elemento.value.length < 4){
            elementoError.innerHTML = ''
            elementoError.innerHTML = "Can't be minor of 4 caracteres"
            elemento.style.borderColor = "red"
            errors += 1
        }
    } else if(elemento.id != 'name'){
        let terminado = false
        let i = 0
        while(i<(elemento.value).length && terminado == false){
            if (typeof elemento.value[i] != 'number'){
                elementoError.innerHTML = ''
                elementoError.innerHTML = "Wrong format, numbers only"
                elemento.style.borderColor = "red"
                errors += 1
                terminado = true
            }
            i++
        }
    } else if(elemento.id == 'cardNum'){
        if(elemento.value.length < 16){
            elementoError.innerHTML = ''
            elementoError.innerHTML = "Can't be minor of 16 caracteres"
            elemento.style.borderColor = "red"
            errors += 1
        }
    } else if(elemento.id == 'month' || elemento.id == "year"){
        if(elemento.value.length < 2){
            elementoError.innerHTML = ''
            elementoError.innerHTML = "Can't be minor of 2 caracteres"
            elemento.style.borderColor = "red"
            errors += 1
        }
    } else if(elemento.id == 'code'){
        if(elemento.value.length < 3){
            elementoError.innerHTML = ''
            elementoError.innerHTML = "Can't be minor of 3 caracteres"
            elemento.style.borderColor = "red"
            errors += 1
        }
    } else {
        errorName.innerHTML = ''
        elemento.style.borderColor = "hsl(270, 3%, 87%)";
    }

    return errors
}