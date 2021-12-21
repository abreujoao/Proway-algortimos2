//criar uma classe professor com os tributos
// nome string
// idade number 
//qtdAlunos number

//metodos
// fazerChamada que recebe por parametro o nome do aluno e retorna (presena verificada)
//calculaMedia recebe 3 notas e devovle a media 

//apos criar a classe instanticar 1 objeto da classe professor para atribuir os valores 
// atualizar algum valor de atributo do professor 
//utilizar os metodos do professor 

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idadae = idade
        this.qtdAlunos = qtdAlunos
    }
    fazerChamada(nome_aluno) {
        return (nome_aluno + " presença verificada")
    }
    calcularMedia(nota1,nota2,nota3) {
    return (nota1+nota2+nota3)/3
    }
}

let professor1 = new Professor("joao paulo",60,30)
professor1.qtdAlunos=20

console.log(professor1.fazerChamada(" Ciclaninho "));

let media = professor1.calcularMedia(7,8,6)

console.log(media);

//instanciem outro professor e utilizem seus atributos e metodos
//ler valores separadamente 
//atualizar valores e ver o antes e depois 
//fazer mais e uma chamada
// calcular mais de uma media

let professor2 = new Professor ("João Henrique",45,25)
console.log(professor2.nome);
console.log(professor2.nome);
console.log(professor2.nome);
professor2.qtdAlunos = 25


console.log(professor2.fazerChamada("FULANINHO"));
console.log(professor2.fazerChamada("rubem"));
console.log(professor2.fazerChamada("joao paulinho"));
console.log(professor2.fazerChamada("cicleno"));

console.log(professor2.calcularMedia(7,9,9));
console.log(professor2.calcularMedia(2,8,9));




































































