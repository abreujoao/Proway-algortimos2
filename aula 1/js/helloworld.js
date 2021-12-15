
let nome="João Paulo"     // variavel do tipo string 
let idade= 19            // variavel do tipo number
let distanciaProway=3.7 // variavel do tipo number

console.log("ola meu nome é ", nome, "e tenho ", idade, "anos, e moro a ", distanciaProway,"km de distancia daqui");

//let bairro = prompt("Informe o seu bairro")

//alert(bairro)

if(idade>=18){
     console.log("voce é maior de idade");
}else{
    console.log("voce é de menor");
}

if(idade<15){
    console.log("voce é adolescente");
}else
    console.log("voce é criança");

    console.log("Escolha uma opção");
    console.log("1 primavera");
    console.log("2 outono");
    console.log("3 verao");
    console.log("4 inverno");
    let opcao= 3

    switch(opcao){
    case 1:
        console.log("voce escolheu a primavera"); 
          break
    case 2:
        console.log(" voce escolheu o outono"); 
          break
    case 3: 
        console.log("voce escolheu o verao");
        break 
    case 4: 
        console.log("voce escolheu o inverno");
        break

    default:
        console.log("escolheu nada");
          break
    }


    let quantidade=20

    for(let contador=1; contador<=quantidade ; contador++ ){
        console.log("repetindo pela ",contador,"x");
    }

    for(let variavel=1; variavel<=50; variavel+=10){
       console.log("repetindo de novo pela",variavel,"x");
    }
    
    let resposta    
    do{
       resposta = prompt("tinham 2 dogs, pita e repita, pita morreu quem ficou?")
    
    }while(resposta=="repita");


