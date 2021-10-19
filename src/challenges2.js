// Função que compara os nomes das tecnologias para usar de parâmetro no método sort();
// Usei como referência esse site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Para saber obter mais detalhes sobre o método sort

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

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Rolwane');

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
