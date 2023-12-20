console.log("hola soy jorselly")
function sumaNumeros(numero1, numero2) {
    return numero1 + numero2;
}


// Ejercicio 1
const resultado = sumaNumeros(8, 8);
console.log(resultado);

// Ejercicio 2
function restaNumeros(numero1, numero2) {
    return numero1 - numero2;
}
const resultadoResta = restaNumeros(8, 3);
console.log(resultadoResta);

//Ejercicio 3
function multiplicaNumeros(numero1, numero2) {
    return numero1 * numero2;
}
const resultadoMultiplicacion = multiplicaNumeros(8, 8);
console.log(resultadoMultiplicacion);

//Ejercicio 4
function divideNumeros(numero1, numero2) {
    return numero1 / numero2;
}
const resultadoDivision = divideNumeros(35, 5);
console.log(resultadoDivision);

//Ejercicio 5
function elevarPotencia(base, exponente) {
    return Math.pow(base, exponente);
}
const resultadoPotencia = elevarPotencia(5, 3);
console.log(resultadoPotencia);

//Ejercicio 6
function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}
const resultadoConcatenacion = concatenarCadenas("Hola, ", "mundo javaScript");
console.log(resultadoConcatenacion);

//Ejercicio 7
function obtenerLongitudCadena(cadena) {
    return cadena.length;
}
const longitud = obtenerLongitudCadena("Hola, mundo!");
console.log(longitud);

// Ejercicio 8
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}
const cadenaMayusculas = convertirAMayusculas("Hola, mundo!");
console.log(cadenaMayusculas);

//Ejercicio 9
function convertirAMinusculas(cadena) {
    return cadena.toLowerCase();
}
const cadenaMinusculas = convertirAMinusculas("Hola, Mundo!");
console.log(cadenaMinusculas);

//Ejercicio 10
function obtenerCaracterEnPosicion(cadena, indice) {

    if (indice >= 0 && indice < cadena.length) {
        return cadena.charAt(indice);
    } else {
        return "Índice fuera de los límites de la cadena.";
    }
}
const caracterEnPosicion = obtenerCaracterEnPosicion("Hola, mundo!", 3);
console.log(caracterEnPosicion); 







