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
  let highestNumber = array[0];
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let result = 'os gatos trombam e o rato foge';

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    result = 'cat2';
  }
  return result;
}

// Criei uma função auxiliar para o requisito 08 para diminuir a complexidade
function checkDivision(num) {
  let value = 0;
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      value = 8;
    } else {
      value = 3;
    }
  } else if (num % 5 === 0) {
    value = 5;
  }
  return value;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    switch (checkDivision(number)) {
    case 0:
      result.push('bug!');
      break;
    case 3:
      result.push('fizz');
      break;
    case 5:
      result.push('buzz');
      break;
    default:
      result.push('fizzBuzz');
      break;
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let code = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case 'a':
      code[i] = '1';
      break;

    case 'e':
      code[i] = '2';
      break;

    case 'i':
      code[i] = '3';
      break;

    case 'o':
      code[i] = '4';
      break;

    case 'u':
      code[i] = '5';
      break;

    default:
      break;
    }
  }
  return code.join('');
}

function decode(string) {
  let code = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case '1':
      code[i] = 'a';
      break;

    case '2':
      code[i] = 'e';
      break;

    case '3':
      code[i] = 'i';
      break;

    case '4':
      code[i] = 'o';
      break;

    case '5':
      code[i] = 'u';
      break;

    default:
      break;
    }
  }
  return code.join('');
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
