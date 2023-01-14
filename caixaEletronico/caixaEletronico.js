function RETIRADA(nota100, nota50, nota20, nota5) {
    if (valor_Retirada > valor_Total) {
        console.log("[ERRO] Operação inválida")
} 
    else  {
    var conta = valor_Retirada / nota100
      if( valor_Retirada % nota100 == 0 ){
        console.log(`Você receberá ${conta} notas de 100`)
     } else {
        conta = parseInt(conta)
        console.log(`serão ${(conta)} notas de 100 reais`)
        conta = valor_Retirada-(conta*nota100)
         if (conta % 50 == 0 ) { 
            console.log(`uma nota de 50 reias`)
        } else {
            conta2 = conta
            conta50 = conta/nota50 
            conta = parseInt(conta50)
            console.log(`${conta} nota de 50 reais`)
            conta = conta2-(conta*nota50)

        } 
        if(conta % 20 == 0){
            conta = conta/nota20
            console.log(`${conta} de 20 reais`)
        } else {
            conta2 = conta
            conta20 = conta/nota20
            conta = parseInt(conta20)
            if (conta ==1) {
                console.log(`${conta} nota de 20 reias`)
                conta = conta2-(conta*nota20)
            } else {
                console.log(`${conta} notas de 20 reias`)
                conta = conta2-(conta*nota20)
            }
           
        } 
         if(conta % 5 == 0) {
            conta = conta/5
            console.log(`${conta} de 5 reais`)
         }
            
            
        }
            
        
     }
     console.log("e agora você tem " + (valor_Total-valor_Retirada +" reais"))
}

let nome = ("Carlos")
let valor_Total = 1000
let valor_Retirada = 555
console.log(`Bom dia! ${nome}`)
console.log(`Você tem ${valor_Total} reais`)
console.log(`Você quer retirar ${valor_Retirada} ` )
RETIRADA(100, 50, 20, 5 )