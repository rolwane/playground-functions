// Usei como referência esse site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Para saber obter mais detalhes sobre o método sort

// Função que compara os nomes das tecnologias para usar de parâmetro no método sort();
function comparaTech(a, b) {
  if (a.tech > b.tech) {
    return 1;
  }
  if (a.tech < b.tech) {
    return -1;
  }
  return 0;
}

// Desafio 10
function techList(techs, nome) {
  if (techs[0] !== undefined) {
    let arrTech = [];
    for (let i = 0; i < techs.length; i += 1) {
      arrTech.push({
        tech: techs[i],
        name: nome,
      });
    }
    return arrTech.sort(comparaTech);
  }
  return 'Vazio!';
}

// função que verifica se um número ESPECÍFICO se repete mais se 3 vezes em um dado array
function repeatMoreThree(n, array) {
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (n === array[i]) {
      cont += 1;
    }
  }
  if (cont >= 3) {
    return true;
  }
  return false;
}

// função que verifica se um número em um array se repete pelo menos 3 vezes
function checkRepeat(array) {
  for (const n of array) {
    if (repeatMoreThree(n, array)) {
      return true;
    }
  }
  return false;
}

// função que verifica se existe algum número no array que é maior que 9 ou menor que 0
function checkNineZero(array) {
  for (const n of array) {
    if (n < 0 || n > 9) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length === 11) {
    if (checkRepeat(numbers) || checkNineZero(numbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let phoneNumber = `(${numbers[0]}${numbers[1]})`;
    phoneNumber += ` ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
    phoneNumber += `-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
    return phoneNumber;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(a, b, c) {
  let absAB = Math.abs(a - b);
  let absBC = Math.abs(b - c);
  let absAC = Math.abs(a - c);
  if (absBC && b > absAC && c > absAB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
