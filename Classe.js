class Classe {
    constructor(nome, idade, cpf = null, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `Sexo: ${this.sexo}`);
    }

    compararSexo() {
        if (this.sexo = 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        } else {
            console.log(` ${this.nome} é FEMININO`);
        }

    }

    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

const rodrigo = new Classe('Rodrigo', 18, '333.333.333-03', 'M');
rodrigo.compararSexo();
if (rodrigo.maiorIdade()) {
    console.log(`${rodrigo.nome} É MAIOR DE IDADE!`);
} else {
    console.log(`${rodrigo.nome}É MENOR DE IDADE!`);
}