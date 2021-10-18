// Desafio 1
function compareTrue(p1, p2) {
  let boolean = false;
  if (p1 && p2) {
    boolean = true;
  }
  return boolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

// Aqui usei TEMPLATE LITERALS. Usei esse site como referência para aprender a sintaxe: https://eslint.org/docs/rules/prefer-template
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Função extra para encontrar o maio número em um Array
function checkHighest(array) {
  let highestNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  return highestNumber;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = checkHighest(array);
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highestNumber) {
      count += 1;
    }
  }
  
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
