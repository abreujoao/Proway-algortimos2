


function capturarNumeros(acao) {
    let nA = promptNumero("Informe o primeiro numero")
    let nB = promptNumero("Informe o segundo numero")

    //escoher uma switch as operações
    switch (acao) {
        case "somar":
            somar(nA, nB)
            break

        case "subtrair":
            subtrair(nA, nB)
            break

        case "multiplicar":
            multiplicar(nA, nB)
            break

        case "dividir":
            dividir(nA, nB)
            break

        default:
            console.log("fazer nada pq nao tem uma opção cera aqui");
            break;
    }
    console.log(acao);

}


function promptNumero(frase) {
    let temporario = Number(prompt(frase))
    return temporario
}

function somar(numeroA, numeroB) {
    alert(numeroA + numeroB);

}

function subtrair(numeroA, numeroB) {
    alert(numeroA - numeroB)
}

function multiplicar(numeroA, numeroB) {
    alert(numeroA * numeroB)
}

function dividir(numeroA, numeroB){
    alert(numeroA / numeroB)
}


