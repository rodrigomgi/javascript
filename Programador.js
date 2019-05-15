const Funcionario = require(`./Funcionario`);
class Programador extends Funcionario {
    constructor(){
        super(salarioBase);
    }

    calcularSalario(){
        super.calcularSalario();
        this.total = this.total
    }
}

const programador = new Programador(500);
programador.calcularSalario();
programador.exibirSalario();