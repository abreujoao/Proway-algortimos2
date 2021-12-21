//criar uma classe calculadora com os atributos numero A e numero B
//criar os metodos somar, subtrair, multiplicar, dividir
// capturarNumeros e ele recebe por parametro o valor de A e de B

//esses metodos sarao chamados por botoes no html usando onclick="nomeDaFuncao()"

class Calculadora {
    numeroA
    numeroB
    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB
    }
    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB

        switch (operacao) {
            case "somar":
               return this.somar()
                break;
            case "subtrair":
               return this.subtrair()
                break;
    
                
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }
}

let calculadora = new Calculadora (1, 2)
console.log("a soma é"  + calculadora.somar());
console.log("a subtração é" + calculadora.subtrair());
console.log("a operacao da soma é" + calculadora.capturarNumeros(5,3,"somar"));
console.log("a operação de subtrair é " + calculadora.capturarNumeros(5,3,"subtrair"));