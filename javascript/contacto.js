const name = document.querySelector("#nombre__completo");
const email = document.querySelector("#correo__electronico");
const message = document.querySelector("#mensaje");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e)=>{

    e.preventDefault();

    if(name.value.length === 0 || email.value.length === 0 || message.value.length === 0){
        Swal.fire({
            title: '¡Error!',
            text: 'Los campos nombre, correo electrónico y mensaje no pueden estar vacíos.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    };
    
    const data = {
        name: name.value, 
        email: email.value, 
        message: message.value
    };

    fetch('https://utngonzaloperez.herokuapp.com/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(res =>{
        if(res.status === 200){
            Swal.fire({
                title: '¡Mensaje Enviado!',
                text: 'Su mensaje se ha enviado correctamente. A la brevedad un miembro del equipo se contactará con usted.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            name.value = "";
            email.value = "";
            message.value = "";
        }
        else{
            Swal.fire({
                title: '¡Error!',
                text: 'Se ha producido un error en el envío. Por favor inténtelo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    })
    .catch((error)=>{
        Swal.fire({
            title: '¡Error!',
            text: 'Se ha producido un error en el envío. Por favor inténtelo nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    })

});