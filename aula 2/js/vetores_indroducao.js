console.log("deu certo");


let nomes=[] // criando um vetor sem itens
console.log(nomes);


//criando um vetor ja com itens
let cursos=[
    "Algoritmos 1",
    "Algoritmos 2",
    "Java Fundamentos",
    "Fundamentos em html5",
    "Javascript avançado",
    "MySql",
    "Typescript",
    "Fundamentos em CSS"



]

console.log(cursos);

console.log(cursos[5]);// acessando o valor 5 no index, lembrando que começa com 0
console.log(cursos.indexOf("Fundamentos em html5"));

console.log(cursos.indexOf("Java Fundamentos"));

cursos.splice(4,3)
//para deletar um item na lista é necessario informar a posicao 
//e a quandtidade de itens para deletar

console.log(cursos);


cursos.push("Python") // inserindo item no final da lista
cursos.push("angular") // inserindo item no final da lista



console.log(cursos);

for(let contador=0;contador<cursos.length;contador++){
   console.log("na posicao "+contador+" tem o valor = "+cursos[contador]);
}
//iniciando o contador com 1 pq é mais intuitivo fazer a contagem com 1 
//mas tenho de que ir ate o tamanho da lista
//incremento de 1 em 1
console.log("========================");
    for(let contador = 1; contador <= cursos.length; contador++){
        //ajustando o acesso ao valor para localizar o indice correto, pois
        //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que nao existe
        console.log("na posicão "+ contador +"tem o valor = " + cursos[contador-1]);

    }

   
