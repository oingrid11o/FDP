// Esto es una función recursiva que retorna el tamaño de un string
// Una función recursiva es la que se llama a si misma.
function sizeString(string) {
    // lo primero que debemos hacer siempre es validar si la cadena esta vacia o no.
    // si lacadena esta vacia, significa que el tamaño es 0,
    // por lo tanto retornamos 0
    // Esto sirve como una condición de parada
    
    if (string === "") {
      return 0;
    }
    // Si la cadena no esta vacia, volvemos a llamar a la función sizeString()
    // pero esta ves se llama con el resto de la cadena, osea sin el primer elemento
    // la funcion que nos permite hacer esto es es slice(1)
    // ejemplo: Tenemos el string "hola mundo" si le aplicamos slice(1)
    // esto nos retorna "ola mundo".
    // esto quiere decir que si 
    // y le sumamos uno al resultado de la función, para llevar la cuenta.
    return sizeString(string.slice(1)) + 1;
  }
  
  console.log('\nTamaño de un string vacio:', sizeString(''), '\n'); // debe retornar 0
  console.log('\nTamaño del string "Hola Mundo":', sizeString('Hola Mundo'), '\n'); // debe retornar 10