const { cons, first, rest, isEmpty, isList } = require('functional-light');
/*
contracto  string --> number
aim: find the size of a string without using .length
function funcion(x) {function body}
exaple sizeString("hola")--> 4
example sizeString(0)--> undefined
example sizeString("ingrid")--> 6
*/


function sizeString(string) {
    if (string === "") {
      return 0;
    }
    return sizeString(string.slice(1)) + 1;
  }

  //hola
  //la funcion esta vacia? no
  //ola +1
  //la funcion esta vacia? no
  //la +1
  //la funcion esta vacia? no
  //a +1
  //la funcion esta vacia? no
  //"" +1
  //la funcion esta vacia? si 
  //0

  //Ahora se resuelve de abajo hacia arriba
  //hola == 5
  //la funcion esta vacia? no
  //3 +1
  //la funcion esta vacia? no
  //2 +1
  //la funcion esta vacia? no
  //1 +1
  //la funcion esta vacia? no
  //0 +1
  //la funcion esta vacia? si 
  //0 
  
  console.log('\nTamaño de un string vacio:', sizeString(''), '\n'); // debe retornar 0
  console.log('\nTamaño del string "Hola Mundo":', sizeString('Hola Mundo'), '\n'); // debe retornar 10


  function sizeFunction(word) {
    if(isEmpty(word)) return 0;
    return sizeFunction(rest(word))+1;
  }
  
    console.log(sizeFunction("hola mundo".split("")));

  console.log([1,2,3,4])