//precisamos catalogar todos os veiculos e seus valores 
//para isso precisamos de 2 vetores um para os nomes e outro para os valores
//a quantidade de carros é indefinida ate q informe q nao deseja continuar com o cadastro 
//apos o cadastro exibir o nome e valor do primeir veiculo e do ultimo 

//primeiro é lista [0]
//ultimo lista[lista.length-1]


let nomes=[]
let valores=[]
let resposta
let valor
let nome
do{
   nome=prompt("Informe o nome do veiculo")
   nomes.push(nome)

valor= Number(prompt("Informe o valor do veiculo"+ nome))
valores.push(valor)

resposta=prompt("deseja continuar S/N?")
} while (resposta == "S" ||  resposta == "s")

alert("o primeiro veiculo foi" +nomes[0] + "custando R$ " + valores[0])
alert("o primeiro veiculo foi "+nomes[nomes.length-1] + "custando R$" +valores.length-1])
