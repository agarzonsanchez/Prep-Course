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
  let array = [];
  for (let item in objeto) {
    array.push([item, objeto[item]]);
  }
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let letra1 = "";
  let letra2 = "";
  let count = 0;
  const matrix = {};
  const arreglo = [];
  for (let x = 0; x < string.length; x++) {
    arreglo.push(string[x]);
  }

  for (let i = 0; i < arreglo.length; i++) {
    letra1 = arreglo[i];
    if (letra1 === 0) {
      continue;
    }
    for (let j = 0; j < arreglo.length; j++) {
      letra2 = arreglo[j];
      if (letra1 === letra2) {
        arreglo[j] = 0;
        count++;
        letra2 = "";
      }
    }
    matrix[letra1] = count;
    string[i] = 0;
    letra1 = "";
    count = 0;
  }
  return matrix;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayus = mayus + s[i];
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] !== s[j].toUpperCase()) {
      minus = minus + s[j];
    }
  }
  return mayus + minus;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let word = "";
  let matrix = [];
  let inver = "";
  let matrixInver = [];
  let palabra = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      matrix.push(word);
      word = "";
    } else {
      word = word + str[i];
    }
  }
  matrix.push(word);
  console.log(matrix)
  for(let m=0; m<matrix.length;m++){
    for(let n=matrix[m].length-1 ; n>=0;n--){
      inver=inver+matrix[m][n];
      console.log(inver);
    }
    matrixInver.push(inver);
    inver="";
  }
  console.log(matrixInver) ;
 
  for(let s=0; s<matrixInver.length;s++){
    if(matrixInver.length-1 ===s){
      palabra=palabra+matrixInver[s]
    }else{
      palabra=palabra + matrixInver[s] +" ";
    }
    
  }
  return palabra;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let string = numero.toString();
  let count = string.length - 1;
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[count]) {
      word = word + string[i];
      console.log(word);
      count = count - 1;
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let word = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {
      continue;
    } else {
      word = word + cadena[i];
    }
  }
  return word;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let newNum = [];
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    newNum.push(arr[i].length);
  }
  newNum.sort(function (a, b) {
    return a - b;
  });
  console.log(newNum);
  for (let j = 0; j < newNum.length; j++) {
    for (let t = 0; t < arr.length; t++) {
      if (arr[t].length === newNum[j]) {
        finalArr.push(arr[t]);
        arr[t] = 1;
      }
    }
  }



  return finalArr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo = [];
  var eleOne;
  var eleTwo;
  for (let i = 0; i < arreglo1.length; i++) {
    eleOne = arreglo1[i];
    for (let j = 0; j < arreglo2.length; j++) {
      eleTwo = arreglo2[j];
      if (eleOne === eleTwo) {
        arreglo.push(eleOne);
      }
    }
  }
  return arreglo;
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
