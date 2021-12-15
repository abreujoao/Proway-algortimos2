console.log("Criar um vetor de gostos pessoais");
console.log("pode criar o vetor ja com valores ou não");
console.log("se nao tiver valores usar o push para incluir item a item");

console.log("exibir a lista toda com log");
console.log("percorrer a lista para apresentar cada valor com uma frase");

// criei um vetor de gostos
let gostos = [
    "jogar",
    "jogar futebol",
    "viajar",
    "ir para festas"
]
//usando o push inclui um item na lista
gostos.push("lecionar")

//exibi em log como esta ate o tamanho da lista
console.log(gostos);

//percorrendo o vetor de 0 ate o tamanho de lista -1
//de 1 em 1 
for (let contador = 0; contador < gostos.length; contador++) {
   //acessando o valorque esta na poscao [contador]
    console.log("gosto muito de " + gostos[contador]);
}

console.log(gostos[0]);
console.log("o que eu mais gosto é "+ gostos[0]);