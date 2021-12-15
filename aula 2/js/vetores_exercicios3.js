//criar um vetor para solicitar do usuario frases aleatorias
//repetir essa captura ate que o usuario digite ""
//para cada repeticao escrever em tela a frase aleatoria capturada

console.log("deu certo");

let frases
let frase

do{
    frase= prompt("informe uma frase")

    document.write("<br>" + frase)
}while(frase !="")