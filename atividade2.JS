//QUESTAO 1
// TIPO ARRAY

let alfabeto = [];
alfabeto[1] = 'A';
alfabeto[2] = 'B';
alfabeto[3] = 'C';
alfabeto[4] = 'D';
alfabeto[5] = 'E';
alfabeto[6] = 'F';
alfabeto[7] = 'G';
alfabeto[8] = 'H';
alfabeto[9] = 'I';
alfabeto[10] = 'J';
alfabeto[11] = 'K';
alfabeto[12] = 'L';
alfabeto[13] = 'M';
alfabeto[14] = 'N';
alfabeto[15] = 'O';
alfabeto[16] = 'P';
alfabeto[17] = 'Q';
alfabeto[18] = 'R';
alfabeto[19] = 'S';
alfabeto[20] = 'T';
alfabeto[21] = 'U';
alfabeto[22] = 'V';
alfabeto[23] = 'W';
alfabeto[24] = 'X';
alfabeto[25] = 'Y';
alfabeto[26] = 'Z';

console.log(`${alfabeto[10]}, ${alfabeto[1]}, ${alfabeto[22]}, ${alfabeto[1]}, ${alfabeto[19]}, ${alfabeto[3]}, ${alfabeto[18]}, ${alfabeto[9]}, ${alfabeto[16]}, ${alfabeto[20]},`)


// QUESTAO 2

class Classe {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`);
    }

    crianca() {
        if (this.idade <= 0 || this.idade <= 15) {
            return true;
        } else {
            return false;
        }
    }


    joven() {
        if (this.idade >= 15 || this.idde < 30) {
            return true;
        } else {
            return false;
        }
    }

    adulto() {
        if (this.idade >= 30 || this.idade < 60) {
            return true;
        } else {
            return false;
        }
    }

    idoso() {
        if (this.idade >= 60) {
            return true;
        } else {
            return false;
        }
    }
}

const catarina = new Classe('catarina', 15);

if (catarina.crianca()) {
    console.log(`${catarina.nome} É CRIANÇA`);
} else {
    console.log(`${catarina.nome} É CRIANCA`);
}

const julio = new Classe('julio', 18);
if (julio.crianca()) {
    console.log(`${julio.nome} É JOVEM`);
} else {
    console.log(`${julio.nome} É JOVEM`)
}

const zeze = new Classe('zeze', 30);
if (zeze.crianca()) {
    console.log(`${zeze.nome} É ADULTO`)
} else {
    console.log(`${zeze.nome} É ADULTO`)
}
const wanderlau = new Classe('wnaderlau', 60);
if (wanderlau.crianca()) {
    console.log(`${wanderlau.nome} É IDOSO`)
} else {
    console.log(`${wanderlau.nome} É IDOSO`)
}


// QUESTAO 3

const nome = 'Rodrigo'
let altura = 170;
let peso = 80;

altura = parseFloat(altura);
peso = parseFloat(peso);

// conserve para metros
altura = altura / 100;

let imc = peso / Math.pow(altura, 2);
let classificacao = '';
if (imc < 16) {
    classificacao = 'Baixo peso muito grave'
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave';
} else if (imc >= 17 && imc <= 18.99) {
    classificacao = ' Baixo peso';
} else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = 'Obesidade grau I';
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = 'Obesidae grau II';
} else {
    classificacao = 'Obesidade grau III';
}

console.log(`${nome}, peso ${peso}, e classificação ${classificacao}`);


// QUESTAO 4

class Conta {
    constructor(){
        this.saldo = 0;
    }
    saque(valorSaque){
        this.saldo = this.saldo - valorSaque;
    }

    deposito(valorDeposito){
        this.saldo= this.saldo + valorDeposito;
    }
    exibirSaldo(){
        console.log(`Saldo atual: ${this.saldo}`)
    }
}

let conta = new Conta();
conta.deposito(100);
conta.saque(50);
conta.exibirSaldo();

// QUESTAO 5

class Calculadora{
    constructor(){
        
    }

    static Somar(numero1, numero2) {
        const resultado = numero1 + numero2;
        console.log(`Resultado: ${resultado}`);
    }
}

Calculadora.Somar(10,20);


// QUESTAO 6

class Funcionario {
    constructor(salarioBase) {
        this.salario = salarioBase;
        this,total = 0;
    }

    calcularSalario() {
        this.total = this.salario + 100;
    }

    exibirSalario(){
        console.log(`Saçario Base:${this.total}`);
    }
}
module.exports = funsionario;
