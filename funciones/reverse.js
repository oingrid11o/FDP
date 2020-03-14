//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co

const {cons, first, rest, isEmpty, isList, length, append} = require('functional-light');


/* Contract: numbers --> number
Aim: reverse the order of a number list
function invertir(x){body function}
invertir([0,1,2])--> [2,1,0]
invertir(["hola"])--> ['hola']
invertir(0,0)--> [0,0]
*/

function inverse(x){
  return inverseAux(x, []);
}

function inverseAux(list, acc){
  if(isEmpty(list)) return acc;
  return inverseAux(rest(list), cons(first(list), acc))
}

// invertir([1 ,2]);
//  1- invertirAux([1, 2], []);
//    isEmpty([1,2]) -> no
//    cons(1, []) -> [1] -> esto seria el nuevo acc   
//    2- invertirAux([2], [1])
//      isEmpty([2]) -> no 
//      cons(2, [1]) -> [2,1] -> esto seria el nuevo acc 
//        3- invertirAux([], [2,1])
//            isEmpty([]) -> si, return [2,1] -> esto es el acumulador


console.log(inverse([]))
console.log(inverse([3]))
console.log(inverse([4,1,2,7,4,1]))
console.log(inverse([1,2,1]))