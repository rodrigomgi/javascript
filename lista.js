// Tipo Array Vazio 
let listaVazia = [];

// Tipo Array Vazio
let listaValor = [1,2,3,'Rodrigo',4,5,6,7,8,9,10];

// buscar valor dentro do array
//retornar o valor
let item = listaValor.find(f => f == 'Rodrigo' );
console.log(item);

// retorna uma nova lista
let itemFilter = listaValor.filter(i => i =='Rodrigo');
console.log(itemFilter);

// Me informa o tamanho 
console.log(listaValor.length);

// Adicionar itens na fila 
listaValor.push('Ana');
console.log(listaValor);

// Excluir itens da lista <- ultimo
//listaValor.pop();
//console.log(listaValor);

// Excluir determinada posição 
listaValor = listaValor.filter(f =>( f< 4 || f >8) );
console.log(listaValor);
