const nome = 'Rodrigo Magione';
const idade = 18;

if(nome == 'Rodrigo Magione'){ 
    console.log('Operador: ==');
}

if(idade === '18'){
    console.log('Operador: ==');
}

if(idade != 18){
    console.log('Operador: ==');
}

if(idade !== '18'){
    console.log('Operadpr: ==');
}

if(nome !== '18'){
    console.log('Operador: !== 18 inteiro')
}

if( '18' !== '18'){
    console.log('Operador: !== 18 texto');
}

if(idade !== '18'){
    console.log('Operadpr: ==');
}

if(idade !== '18'){
    console.log('Operadpr: ==');
}

if(idade !== '18'){
    console.log('Operadpr: ==');
}

if(idade !== '18'){
    console.log('Operadpr: ==');
}


// Operador lógicos

if(idade == 18 || nome == 'Aline') {
    console.log('OU -> Entrou');
}
if(idade == 18 && nome == 'Aline'){
    console.log('E -> Não entrou');
}
if(!idade == 18) {
    console.log('! -> Não');
}
if(idade == 18 && nome == 'Rodrigo'){
    console.log('! -> Entrou Rodrigo');
}