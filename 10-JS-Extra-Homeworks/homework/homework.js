// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
    // un par clave-valor en forma de matriz.
    //Ejemplo:
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    var tem = Object.entries(objeto);
    return tem;
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    //Escribe tu código aquí
    var contador = 0;
    var tem = {};
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j])
                contador += 1
        }
        tem[string[i]] = contador
        contador = 0;
    }
    return tem
}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    var temMayus = [];
    var temMinus = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase())
            temMayus += s[i]
        else
            temMinus += s[i]
    }
    return temMayus + temMinus
}

function asAmirror(str) {
    //La función recibe una frase.
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var tem = str.split(" ");
    var tem2 = [];
    for (let i = 0; i < tem.length; i++) {
        for (let j = tem[i].length - 1; j > -1; j--) {
            tem2 += tem[i][j]
        }
        if (i !== tem.length - 1)
            tem2 += " ";
    }
    return tem2
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    var tem = numero.toString();
    var tem1 = tem.split("");
    var tem2 = tem.split("");
    tem1.reverse();
    var tem3 = false;

    for (let i = 0; i < tem1.length; i++) {
        if (tem1[i] === tem2[i]) tem3 = true;
        else break;
    }

    if (tem3) return "Es capicua";
    else return "No es capicua";
}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    var tem = cadena.split("")
    var tem1 = "";
    var tem2 = [];

    for (let i = 0; i < tem.length; i++) {
        if (tem[i] !== "a" && tem[i] !== "b" && tem[i] !== "c")
            tem2.push(tem[i]);
    }
    tem1 = tem2.join("");
    return tem1;
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    var tem = arr.sort(function (a, b) {
        return a.length - b.length;
    });

    return tem;
}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí
    var tem = [];

    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j]) {
                tem.push(arreglo1[i]);
                break;
            }
        }
    }
    return tem;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};

