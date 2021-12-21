console.log("oi");

//aluno
//atributos = variaveis 5
//nota = number 5
//nome string1
// idade number 2 
// matricula 3
// senha 4


// metodos = funcoes sem o comando function
// conversar (ouviu) --> return resposta
// responderChamada(professor) ---> "professor", MEU_NOME presente"
// meApresentar () -------> "oi meu nome é nome tenho xx anos e minha matricula é xxxxx"



class Aluno {
    nome
    idade
    matricula
    senha
    nota

    // declaração do construtor que será chamado de forma externa
    //para criar um OBJETO da classe aluno
    constructor(nome, idade, matricula, senha, nota) {
    //passando os valores dos parametros para os meus atributos diferenciando com (this)
    this.nome = nome
    this.idade = idade
    this.matricula = matricula
    this.senha = senha
    this.nota = nota

    }

    conversar(ouviu){
        return ouviu+", que interessante..."
    }
    chamarProfessor(mensagem){
        return "ja resolveu era isso ("+mensagem+")"
    }

    meApresentar(){
        return "olá meu nome é "+this.nome+" tenho "+this.idade+" anos,minha matricula é "+this.matricula+" e prefiro nao dizer minha senha"
    }
}


let nome="João Paulo"

let aluno1 = new Aluno ("joao paulo",19,"71514","71514,",8)
 let alunoX= new Aluno ("miranha",22,"miranha3","12345",10)


 console.log(aluno1);
 console.log(aluno1.matricula);
 console.log(aluno1.nome);

 console.log(alunoX.senha);

 aluno1.nome="JP"
 console.log(aluno1);

alunoX.nome="batman"
alunoX.idade= 13
alunoX.matricula="002"
alunoX.senha="951"
alunoX.nota=9

console.log(alunoX);


let colega = new Aluno ("Nathália Reinert",21,"71437","nathaliainsuportavel",-15)
console.log(colega);
colega.matricula="nathaliainsuportavel"
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));

document.write(aluno1.conversar("sobre o filme do miranha"))

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("nada a declarar"));

// como eu crio um objeto da classe aluno?
// instanciando um objeto da classe aluno com os valores dos atributos passados no construtor 
let aluno10 = new Aluno("derik",20,"7415","2020",9)

//como eu acesso cadaa atributo do objeto? (atualizar 3 atributos)
aluno10.nome= "joao"
aluno10.idade=18
aluno10.matricula= "5555"
aluno10.senha="123"
aluno10.nota= "8"

//executando metodos de um objeto da classe Alunos

console.log(aluno10.conversar("aprendi a orientação a objetos"));

console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar());

console.log(aluno10.meApresentar());











