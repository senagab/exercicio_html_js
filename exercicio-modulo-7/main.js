const form = document.getElementById('form-contas');
// form é a varival referente ao elemento <form> de id 'form-contas'

let numeroA = document.getElementById('numero-a');
// numeroA quando declarado antes do código o torna uma variavel global

let numeroB = document.getElementById('numero-b');
// numeroB quando declarado antes do código o torna uma variavel global


function validaNumero() {
    // Parse the values to floats
    const valueA = parseFloat(numeroA.value);
    const valueB = parseFloat(numeroB.value);

    if (valueA < valueB) {
        console.log("métrica atendida, formulário elegível!");
        formValido = true;
    } else {
        formValido = false;
        console.log("não atendido");
    }
}

form.addEventListener('submit', function(e){

    // let formValido = false;

    e.preventDefault();

    const msgSucesso = `Métricas atendidas! Valor <b>${numeroA.value}</b> é inferior ao valor ${numeroB.value}</b>.`; 

    // formValido = validaNumero(numeroA.value, numeroB.value)

    if (formValido) {
        // console.log("deu certo")
        const containerMsgSucesso = document.querySelector('.success-message');
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        numeroB.style.border = "1px solid red"
        document.querySelector('.error-message').style.display = 'block';
    }

    console.log(e.target.value)

    formValido = validaNumero(e.target.value);
})


numeroA.addEventListener('keyup', function(e){
    console.log(e.target.value)

    // formValido = validaNumero(numeroA.value, numeroB.value);
    validaNumero(numeroA, numeroB) 

    if (!formValido) {
        numeroA.classList.add('error');

        document.querySelector('.error-message').style.display = 'block';
        
    } else {
        numeroA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});


numeroB.addEventListener('keyup', function(e){
    console.log(e.target.value)

    // formValido = validaNumero(numeroA.value, numeroB.value);
    validaNumero(numeroA, numeroB) 

    if (!formValido) {
        numeroA.classList.add('error');

        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});