// QUESTAO 1

// TIPO ARRAY

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