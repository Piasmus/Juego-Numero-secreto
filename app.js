let numeroSecreto = 0; 
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//función asignar texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}
//declaración de función en botón intento
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroSecreto === numeroDeUsuario); */ //esta linea de console sirve para revisar si la función de verificación recibe ambos números, typeof sirve para saber que tipo de dato se está manejando 
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertase el número en ${intentos} ${(intentos === 1) ? 'intento!' : 'intentos!'}`) // se pueden llamar funciones dentro de otras, el lenguaje JS lo permite. 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', '¡El número secreto es menor!')
        } else {
            asignarTextoElemento ('p', '¡El número secreto es mayor!')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}
//función número secreto 
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);    
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        }else{
            // Si el numero generado está incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto();
            }else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    
}

//función condiciones iniciales iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//función de reinicio
function reiniciarJuego(){
    //limpiar la caja
        limpiarCaja();
    //indicar condición de inicio
        condicionesIniciales();
    //deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();