// Objeto Literal
const Pessoa = {
    nome: 'José',
    idade: 75,
    cpf: '333.333.333.03',
    sexo: 'M',
    compararSexo: function() {
        if (this.sexo == 'M') {
            console.log(`${this.nome} é MASCULINO`);
        } else {
            console.log(`${this.nome} é FEMININO`);
        }
    }
}

Pessoa.compararSexo();
// Desestruturação do Objeto Literal
const {sexo, cpf, ... resto1} = Pessoa;

console.log(sexo);