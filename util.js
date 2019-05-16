// Util com Sring

const nome = 'Rodrigo da Silva Ferreira'

//split serve para separar conforme perâmetro
console.log(nome.split(' '));

//replace serve para substituir o qu for passado como parâmetro
console.log('usando Replace:' + nome.replace('Rodrigo', 'Catarina'));

// Utilizando REGEX
console.log('usando Replace:' + nome.replace(new RegExp(' ', 'g'), '_'));

// Utilizando REPEAT
const texto = 'abc';
console.log('Utilizando REPEAT: ' + texto.repeat(3));

// Utilizando Substr para pegar parte do texto
// O metodo retorna uma parte da string iniciando no
// indice especificado e estendendo para um detereminado número
// de caracteres 
console.log('Utilizando Substr: ' + nome.substr(7, 10));

// Slice
console.log('Utilizando o Slice: ' + nome.slice(0, 7));

// StartsWith inicia com a determinada palavra
// retorna boolean
console.log('Utilizando StarsWiht: ' + nome.startsWith('Rodrigo'));

// EndsWhit termina com a determinada palavra
// retorna boolean
console.log('Utilizando EndsWiht: ' + nome.endsWith('Ferreira'));

// Length determinada o tamanho da nossa string
console.log('Utilizando Length: ' + nome.length);

//const sobrenome = new String('Ferreira');
//console.log(sobrenome);

// Number

const numeroDecimal = 3.14852415;

// toPrecision limita a aquantidade de casas decimais
// e faz o
console.log('Utilizando toPrecision: ' + numeroDecimal.toPrecision(3));

// toFixed limita demais so ponto (casas decimais) a aquantidade de casas decimais
console.log('Utilizando toFixed: ' + numeroDecimal.toFixed(2));

// isNAN
// Retorna um booleano (False quando é número)
console.log('Utilizando isNAN: ' + isNaN('Rodrigo'))

// Data no javascript

let date = new Date();
console.log('Data completa: ' + date);
console.log('Data : ' + date.getDate());
console.log('Mês: ' + date.getMonth());
console.log('Horas: ' + date.getHours());
console.log('Ano: ' + date.getFullYear());
console.log('Dia da Semana: ' + date.getDay());
console.log('Segundos: ' + date.getSeconds());