let numeroSecreto = 0; // se crea una variable numeroSecreto y se le asigna el valor de la función obtenerNumeroAleatorio
let intentos = 0; // se crea una variable intentos y se le asigna el valor de 0
let listaNumerosSorteados =[]; // se crea una variable numerosSorteados y se le asigna un array vacio
let numeroMax = 10; // se crea una variable numeroMax y se le asigna el valor de 10

function asignarTextoElementos(elemento, texto) { // se crea una función asignarTextoElementos (con los parametros para hcer lasignacion de texto a un elemento)
    let elementoHTLM = document.querySelector(elemento); 
    elementoHTLM.innerHTML = texto;   
    return; // se retorna
}
function verificarIntento() { // se crea una función intntoDeUsuario

    intentos++; // se incrementa la variable intentos       
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // se crea una variable numeroUsuario y se le asigna el valor del input
    
    if (numeroUsuario === numeroSecreto) // si el numeroUsuario es igual al numeroSecreto
        { 
        asignarTextoElementos('p', `Felicitaciones! Has adivinado el número secreto en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`); // se llama a la función asignarTextoElementos con el texto de felicitaciones
       document.getElementById('reiniciar').removeAttribute('disabled'); // se activa el boton de reiniciar al ganar
    } 
    else {
        if (numeroUsuario > numeroSecreto) // si el numeroUsuario es mayor al numeroSecreto
        { 
        asignarTextoElementos('p', 'El número secreto es menor'); // se llama a la función asignarTextoElementos con el texto de el numero secreto es menor
        } 
        else // si no
        { 
        asignarTextoElementos('p', 'El número secreto es mayor'); // se llama a la función asignarTextoElementos con el texto de el numero secreto es mayor
        }
    limpiarInput(); // se llama a la función limpiarInput
    }
    return; // se retorna
}

function limpiarInput() { // se crea una función limpiarInput
    document.getElementById('valorUsuario').value = ''; // se limpia el input
    return; // se retorna
}

function generarNumeroSecreto() { // se crea una función obtenerNumeroAleatorio
    
    let numeroGenerado= Math.floor(Math.random() * numeroMax) + 1; // se retorna un número aleatorio / Se retorna un número aleatorio entre 1 y 10
    //Si el numero generado ya fue sorteado, se vuelve a generar un número

    //Si ya solteamos todos los numero

    if (listaNumerosSorteados.length === numeroMax) 
        {
            asignarTextoElementos('p', `ya se sortearon todos los números posibles`); // se llama a la función asignarTextoElementos texto
            listaNumerosSorteados = [];
    }
        else
        {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // ------ recursividad al llamar a la misma función ------
        }
        else
        {
            
            listaNumerosSorteados.push(numeroGenerado);
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado; // se retorna
        }
}

}

function reiniciarJuego() { // se crea una función reiniciarJuego
    limpiarInput(); // se llama a la función limpiarInput
    condicionesIniciales(); // se llama a la función asignarTextoElementos con el texto de indica un numero del 1 al 10
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // se desactiva el boton de reiniciar
    return; // se retorna
}

function condicionesIniciales() { // se crea una función mensajesIniciales

    asignarTextoElementos('h1', 'Juego del número secreto!'); // se llama a la función asignarTextoElementos titulo
    asignarTextoElementos('p', `Indica un número del 1 al ${numeroMax}`); // se llama a la función asignarTextoElementos texto
    numeroSecreto = generarNumeroSecreto(); // se llama a la función obtenerNumeroAleatorio
    intentos = 0; // se reinicia la variable intentos

}

condicionesIniciales(); // se llama a la función mensajesIniciales