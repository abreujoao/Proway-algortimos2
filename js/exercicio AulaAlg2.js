/* 

solicite uma quantidade definida de numeros a serem capturados
para cada captura deve verificar qual o maior numero e o menor numero 

apos a captura dos numeros exibir o maior, o menor e a media geral desses numeros



*/
let menor
let soma
let media
let maior
let numero
let quantidade = Number(prompt('INFORME A QUANTIDADE DE NUMEROS QUE VOCE DESEJA CAPTURAR'))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("informe o " + contador + " numero "))
    soma+=numero
    if (contador == 1) {
        menor = numero
        maior = numero
    } else {

        if (numero<menor) {
            menor = numero
        }

        if (numero>maior) {
            maior = numero
        }
    }

}

media = (soma) / quantidade
alert("MENOR" + menor)
alert("MAIOR" + maior)
alert("MEDIA" + media)


// 

let

