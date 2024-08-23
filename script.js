function LoginMandatory(){


    let nombre = document.getElementById('name').value;

    let apellido = document.getElementById('lastName').value;

    let usuario = document.getElementById('username').value;

    let correo = document.getElementById('email').value;

    let contrasena = document.getElementById('password').value;

    document.getElementById('fin').innerText = `
    Informacion Ingresada: \n
    Nombre Completo: ${nombre}  ${apellido} \n
    Nombre De Usuario: ${usuario} \n
    Correo: ${correo} \n
    Contraseña: ${contrasena}`;
}

function modoOscuro(){
    document.body.classList.toggle('oscuro')
}