const entrada = require("prompt-sync")()
var nota100 = 3
var nota50 = 2
var nota20 = 4
var nota5 = 4
var total = 500
let nome = entrada("Qual o seu nome? ")
console.log(`Bom dia! ${nome}`)
console.log(`Você tem ${total} reais na conta`)
console.log("[CUIDADO] a máquina só funcioana em notas de 5, 20, 50, 100 reias")
console.log("Portanto certos valoree serão impossibitados de retirar!!")
RETIRADA100(nota100, nota50, nota20, nota5, total, nome)

// quantidade de notas de 100
function RETIRADA100(nota100, nota50, nota20, nota5, total, nome ) {
    let retirada = entrada("digite um valor para retirar: ")
    retirada = Number(retirada)
    var conta = retirada/100
    conta = parseInt(conta)  
    if (retirada > total || retirada % 5 != 0) {
        console.log("[ERRO] houve um erro")
        LOOPING(nome, retirada, total, resultado)
    }
    else if (retirada % 100 == 0 && conta >= 0 && conta  <= 3)  {
        console.log(`serão ${conta} notas de 100`)
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")
    }
    else if (retirada > (100 * nota100)){
        console.log(`serão ${nota100} notas de 100`)
        conta = retirada - (100 * nota100)
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome)
    }  else {
        console.log(`serão ${conta} notas de 100`)
        conta = retirada - (conta*100)
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome )
        
    }
}
// quantidade de notas de 50
function RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome  ) {
    qtd50 = conta
    conta = qtd50/50
    conta = parseInt(conta)
    
    if (qtd50 % 50 == 0 && conta >=0 && conta<=2) {
        console.log(`serão ${conta} notas de 50`)
        var resultado = total-retirada
        console.log("e agora você tem " + (resultado +" reais"))
        if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")
        } else {
            LOOPING(nome, retirada, total, resultado)
        }
    } else if (qtd50 > ( nota50*50)) {
        console.log(`serão ${nota50} notas de 50`)
        conta = qtd50 - (nota50*50)
        RETIRADA20(nota20, nota5, retirada, total, conta, nome )
    } else {
        console.log(`serão ${conta} notas de 50`)
        conta = qtd50 - (conta*50)
        RETIRADA20(nota20, nota5, retirada, total, conta, nome )
    }
}
// quantidade de notas de 20
function RETIRADA20( nota20, nota5, retirada, total, conta , nome ) {
    qtd20 = conta
    conta = qtd20/20
    conta = parseInt(conta)
    
    if (qtd20 % 20 == 0 && conta >=0 && conta<=4) {
        console.log(`serão ${conta} notas de 20`)
        var resultado = total-retirada
        console.log("e agora você tem " + (resultado +" reais"))
        if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")
        } else {
            LOOPING(nome, retirada, total, resultado)
        }
    } else if (qtd20 > ( nota20*20)) {
        console.log(`serão ${nota20} notas de 20`)
        conta = qtd20 - (nota20*20)
        RETIRADA5( nota5, retirada, total, conta, nome )
    } else {
        console.log(`serão ${conta} notas de 20`)
        conta = qtd20 - (conta*20)
        RETIRADA5( nota5, retirada, total, conta, nome )
    }
}
// quantidade de notas de 5
function RETIRADA5( nota5, retirada, total, conta, nome ) {
    qtd5 = conta
    conta = qtd5/5
    conta = parseInt(conta)
    
    if (qtd5 % 5 == 0 && conta >=0 && conta<=4) {
        console.log(`serão ${conta} notas de 5`)
        var resultado = total-retirada
        console.log("e agora você tem " + (resultado +" reais"))
        if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")  
        } else {
            LOOPING(nome, retirada, total, resultado)
        }
     
    } 
}
// função para loopar até o usuario querer ou ter saldo
function LOOPING(nome, retirada, total, resultado) {
    
     let confirm = entrada("Você quer continuar?(sim ou nao) ")
        if (confirm == "nao") {
            console.log("não quer continuar tudo bem!!")
        }
        else if (retirada <= total && confirm == "sim") {
    
        while(retirada <= total) {
            total = resultado
            console.log("-----------------------------------------------------")
            RETIRADA100(nota100, nota50, nota20, nota5, total, nome)      
           
            
    }
    } else {
        console.log("você não pode retirar mais")
        console.log("adeus " + nome )
 }
     } 
        
