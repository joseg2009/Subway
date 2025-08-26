// vamos montar um lanhche 
let lanche = Number(prompt("1 - Churrasco ou 2 - Carne Seca "))

//partes do lanche,
let pao 
let Proteina
let queijo
let legumes
let molhos
let meuLanche
// testando qual o lanche
if(lanche === 1){
    pao = Number(prompt('1( tradicional )\n 2( parmesão ) \n 3( baguete )'))
    switch (pao) {
        case 1:
            meuLanche =  " pão tradicional"
            break;
        case 2:
            meuLanche =  " pão parmesão"
            break;
        case 3:
            meuLanche =   " pão Baguete"
            break;
    
        default:
            alert("Codigo do pão invalido")
            break;
    }
    Proteina = Number(prompt('1(Alcatra)\n 2(Picanha) \n 3(Cupim)'))
    switch (Proteina) {
        case 1:
            meuLanche += " + Carne Alcatra"
            break;
        case 2:
            meuLanche +=  " + Carne Picanha"
            break;
        case 3:
            meuLanche +=  " + Carne Cupim"
            break;
    
        default:
            alert("Codigo da Proteina invalido")
            break;
    }
    queijo = Number(prompt('1(Muçarela)\n 2(Gorgonzola) \n 3(Cheddar)'))
    switch (queijo) {
        case 1:
            meuLanche += " + Muçarela"
            break;
        case 2:
            meuLanche +=  " + Gorgonzola"
            break;
        case 3:
            meuLanche +=  " + Cheddar"
            break;
    
        default:
            alert("Codigo do queijo invalido")
            break;
    }
    legumes = Number(prompt('1(tomate)\n 2(cebola) \n 3(alface)'))
    switch (legumes) {
        case 1:
            meuLanche += " + tomate"
            break;
        case 2:
            meuLanche +=  " + cebola"
            break;
        case 3:
            meuLanche +=  " + Alface"
            break;
    
        default:
            alert("Codigo de legumes invalido")
            break;
    }
    molhos = Number(prompt('1(Molho branco)\n 2(ketchup) \n 3(mostarda)'))
    switch (molhos) {
        case 1:
            meuLanche += " + molho branco"
            break;
        case 2:
            meuLanche +=  " + ketchup"
            break;
        case 3:
            meuLanche +=  " + mostarda"
            break;
    
        default:
            alert("Codigo de molho invalido")
            break;
    }

}else if(lanche === 2){

}




alert("Seu lanche: " + meuLanche )
