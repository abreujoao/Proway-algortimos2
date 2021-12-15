console.log("deu certo execicio 2");


document.write("Que legal")
document.write("<br> Criar um vetor de numeros e solicitar o usuario uma quantidade de numeros")
document.write("<br> conforme a quantidade repetir a captura numero a numero ate acabar o laço ")
document.write("<br> depois que o laço acabar, percorrer a lista para determinar qual o maior numero e menor")


let numeros = []
let quantidade

quantidade = Number(prompt("Informe quantos numeros deseja capturar"))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("INFORME O " + contador + "numero"))
    numeros.push(numero)
}

console.log(numeros);
return
let maior
let menor

for (let contador = 0; contador < numeros.length; contador++) {
    if (contador = 0) {
         menor = numeros[contador]
         maior = numeros[contador]
    } else {

        if (numeros[contador] < menor) {
            menor = numeros[contador]
        }
        if (numeros[contador] < menor) {
            maior = numeros[contador]
        }

    }
}   

document.write("<br>o menor numero é " +menor)
document.write("<br>o maior numero é " +maior)