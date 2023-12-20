//Ejercicio 10
function obtenerCaracterEnPosicion(cadena, indice) {
    // Verificar si el índice está dentro de los límites de la cadena
    if (indice >= 0 && indice < cadena.length) {
        return cadena.charAt(indice);
    } else {
        return "Índice fuera de los límites de la cadena.";
    }
}
