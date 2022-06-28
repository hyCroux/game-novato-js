
// Función que genera números aleatorios 

function getRandonNumber(size) {                        //Math es una biblioteca de funciones matemáticas..   (Math.floor se encarga de convertir un numero decimal en entero.)
    return Math.floor(Math.random() * size);                //Math.random genera un num aleatorio del 0 al 1 pero en decimales osea 0.1, 0.2, etc. Y Multiplicando por (size)   
}                                                                                                                                              //genera desde 0 hasta el que tú elijas luego.
 


// Función que se encarga de medir la distancia donde se hace el click(e) y el objetivo (se utiliza el teorema de pitagoras para calcular el eje x y el eje y)

function getDistance(e, objetivo) {
    let difejeX = e.offsetX - objetivo.x;
    let difejeY = e.offsetY - objetivo.y;
    return Math.sqrt((difejeX * difejeX) + (difejeY + difejeY));       // Math.sqrt raiz cuadrada
}


// Función que le da una pista al usuario de que tan cerca se encuentra

function getPista(distancia) {
    if (distancia <= 5) {
        return "¡¡¡Lo has logrado!!!";
    } else if (distancia < 25) {
        return "Te estás quemando!!!";
    } else if (distancia < 50) {
        return "Muy Caliente!";
    } else if (distancia < 75) {
        return "Caliente!";
    } else if (distancia < 100) {
        return "Cálido!";
    } else if (distancia < 125) {
        return "Te estas acercando!!";
    } else if (distancia < 150) {
        return "Falta poco!!!";
    } else if (distancia < 175) {
        return "Cerca!!";
    } else if (distancia < 200) {
        return "No muy lejos!!";
    } else if (distancia < 225) {
        return "Frío!!";
    } else if (distancia < 250) {
        return "Muy Frío!";
    } else if (distancia < 275) {
        return "Helado!";
    } else if (distancia < 360) {
        return "-50° bajo cero!";
    }
}