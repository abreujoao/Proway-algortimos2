//a classe Pessoa agrega tudo que foi identificado como COMUM entres as classes Aluno,Professor...
class Pessoa{
    //esses atributos não precisam mais ser declarados em cada classe que herde de Pessoa
    nome
    idade 
    //basta repassar os parametros que vem no NEW para o construtor da SUPER CLASSE
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
}

//o comando extends + nome da classe, garante a herança de atributos e metodos da SUPER CLASSE
class Diretor extends Pessoa{ 
    //esse atributo só exite na classe Diretor
    //não preciso informar nome e idade novamente aqui
    qtdProfessores

    //o construtor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
    //por isso preciso informar nome e idade no NEW porém devo repassar esses valores para o construtor
    //da super classe ou CLASSE PAI
    constructor(nome,idade,qtdProfessores){
        //os atributos herdados repasso para o construtor da SUPER CLASSE
        super(nome,idade)
        this.qtdProfessores=qtdProfessores
        
        

    }

}



class Aluno extends Pessoa{
    //atributos da classe Aluno
    matricula

    //Construtor utilizado no new que recebe os parametros para inicializar
    //os atributos no novo objeto do tipo Aluno
    constructor(nome, idade, matricula) {
        //para cada parametro inicializo respectivamente o atributo do objeto
        //o (this.) é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }

    meApresentar() {
        return "Olá meu nome é " + this.nome + " tenho " + this.idade + " anos e minha matricula é " + this.matricula
    }

}

class Professor extends Pessoa{
    qtdAlunos 
    constructor(nome,idade,qtdAlunos,altura,salario){
        // o super deve ser chamado primeiro para garantir que a SUPER CLASSE faça o seu construtor primeiro 
        this.qtdAlunos=qtdAlunos
        super(nome,idade)
        //depois inicializo meus atributos especificos da classe Professor
        this.qtdAlunos= qtdAlunos
    }
    meApresentar(){
        return "Olá meu nome é "+this.nome+" tenho "+this.idade+" anos, e tenho "+this.qtdAlunos+" alunos"
    } 
}

let prof1= new Professor("Oliota",32,15,1.2,0)
console.log(prof1);
console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.qtdAlunos);

let paulo = new Diretor("Paulo Y Kano",80,30)

console.log(paulo);

paulo.altura = 1.20
paulo.salario = 25.000
console.log(paulo);

//professor
//nome,idade,qtdAlunos
//meApresentar()
































