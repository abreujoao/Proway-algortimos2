console.log("Olá, seja bem-vindo!");

 meApresentar () //chamada de funcao

let nome = capturaTexto("Informe o seu nome") // usando a função captura texto passando o parametro "frase"
let idade =  capturaNumeroEspecial("Informe sua idade")
let anoAtual =  capturaNumeroEspecial("informe o ano atual")
let cidade = capturaTexto("Informe a sua cdade")

console.log("Oi meu nome é " + nome + " idade " + idade + " anos, estamos no ano de "+anoAtual + " e estou em "+cidade);

console.log("Quero saber o retorno dessa função "+retorneInteiro() );
retorneInteiro()

//iria aparecer tudo no site quando ta dentro da function

//declaração da função
//tem nome da função 
//tem palavra reservada function
//() gaveta de parametros
//{} escopo tudo que sera executado
//conteudo que eu quero executar
function meApresentar() {
    let nome = "João Paulo"
    let idade = 19

    console.log("Oi meu nome é " + nome + " tenho " + idade + " anos");

}

function retornoSimples(){
    return "ta aqui o que voce precisa"
}

function retorneInteiro(){
    return 10
}


//quando chamo essa função devo informar um valor para esse parametro
function capturaTexto(texto){
    let temporario = prompt(texto)
    return temporario
}

//nao preciso passar parametros pois nao tem 
function capturaNumero(){
    let temporario = Number (prompt("informe uma numero"))
    
    return temporario
}


// essa função recebe parametro onde a funçao capturaNumero nao recebia
//dessa forma a funcao numero se torna dinamica pois é parametrizavel
function capturaNumeroEspecial(frase){
    let temporario= Number( prompt(frase))
    return temporario
}
