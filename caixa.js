const entrada = require("prompt-sync")()
var nota100 = 4
var nota50 = 5
var nota20 = 8
var nota5 = 10
INICIAR(nota100, nota50, nota20, nota5)
function INICIAR(nota100, nota50, nota20, nota5){
var total = 500
let nome = entrada("Qual o seu nome? ")
console.log(`Bom dia! ${nome}`)
console.log(`Você tem ${total} reais na conta`)
console.log("[CUIDADO] a máquina só funcioana em notas de 5, 20, 50 e 100 reias")
console.log(`atualemnte a máquina tem ${nota100} notas de 100, ${nota50} notas de 50, ${nota20} notas de 20 e ${nota5} notas de 5 reais`)
RETIRADA100(nota100, nota50, nota20, nota5, total, nome,)
}

// quantidade de notas de 100
function RETIRADA100(nota100, nota50, nota20, nota5, total, nome ) {
    let retirada = entrada("digite um valor para retirar: ")
    retirada = Number(retirada)
    var conta = retirada/100
    conta = parseInt(conta)  
    var resultado = total-retirada
    if (retirada > total || retirada % 5 != 0 || retirada < 0) {
        console.log("[ERRO] DIgite um valor correto")
        LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada)
    }  else if (retirada % 100 == 0 && conta >= 0 && conta <= nota100)  {
        console.log(`serão ${conta} notas de 100`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota100 = nota100-conta
        conta = retirada - (conta*100)
                if(resultado == 0 ) {
                    console.log("você não pode retirar mais")
                    console.log("REINICIANDO...")
                    console.log("-------------------------------------------------")
                    INICIAR()
            
                } else {
                    LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada) 
                }
    } else if (retirada > (100 * nota100) ){
        console.log(`serão ${nota100} notas de 100`)
        conta = retirada - (100 * nota100)
        nota100 = 0
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado, entrada, nota100)
    }  else if (nota100<conta) {
        console.log("notas de 100 insuficientes")
        conta = retirada
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado, entrada, nota100)

    } else {
        console.log(`serão ${conta} notas de 100`)
        nota100 = nota100-conta
        conta = retirada - (conta*100)
        RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado , entrada, nota100)
        
    }
}
// quantidade de notas de 50
function RETIRADA50(nota50, nota20, nota5, retirada, total, conta, nome, resultado , entrada, nota100 ) {
    qtd50 = conta
    conta = qtd50/50
    conta = parseInt(conta)
    if (qtd50 % 50 == 0 && conta >=0 && conta<=nota50) {
        console.log(`serão ${conta} notas de 50`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota50 = nota50-conta
            if(resultado == 0 ) {
                console.log("você não pode retirar mais")
                console.log("REINICIANDO...")
                console.log("-------------------------------------------------")
                INICIAR()
            
            } else {
                LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada) 
            }   
    
     } else if (qtd50 > ( nota50*50)) {
            if (conta == 0) {
                console.log(`serão ${nota50} notas de 50`)
                conta = qtd50 - (nota50*50)
                nota50 = 0
                LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada)     
            } else {
                console.log(`serão ${nota50} notas de 50`)
                conta = qtd50 - (nota50*50)
                nota50 = 0
                RETIRADA20(nota20, nota5, retirada, total, conta, nome , resultado, entrada, nota100, nota50)
        }

     }  else if (nota50 < conta) {
        console.log("2")

        console.log("notas de 50 insuficientes")
        RETIRADA20(nota20, nota5, retirada, total, conta, nome , resultado, entrada, nota100, nota50)
   
    } else {
            console.log(`serão ${conta} notas de 50`)
            nota50 = nota50-conta
            conta = qtd50 - (conta*50)
            RETIRADA20(nota20, nota5, retirada, total, conta, nome , resultado, entrada, nota100, nota50)
    
     
        
       
    }
   
}

// quantidade de notas de 20
function RETIRADA20( nota20, nota5, retirada, total, conta , nome , resultado, entrada, nota100, nota50) {
    qtd20 = conta
    conta = qtd20/20
    conta = parseInt(conta)
    if  (qtd20 % 20 == 0 && conta >=0 && conta<=nota20) {
        console.log(`serão ${conta} notas de 20`)
        resultado = total-retirada
        console.log("e agora você tem " + (resultado +" reais"))
        nota20 = nota20 - conta
        if (resultado == 0) {
            console.log("você não pode retirar mais")
            console.log("REINICIANDO...")
            INICIAR()
        } else {
            RETIRADA5( nota5, retirada, total, conta, nome, resultado , entrada, nota100, nota50, nota20)
        }

    } else if (qtd20 > ( nota20*20)) {
        console.log(`serão ${nota20} notas de 20`)
        conta = qtd20 - (nota20*20)
        nota20 = 0
        RETIRADA5( nota5, retirada, total, conta, nome, resultado , entrada, nota100, nota50, nota20)

    } else if  (nota20< conta) {
        console.log("notas de 20 insuficientes")
        RETIRADA5( nota5, retirada, total, conta, nome, resultado , entrada, nota100, nota50, nota20)

    } else {
        console.log(`serão ${conta} notas de 20`)
        nota20 = nota20 - conta
        conta = qtd20 - (conta*20)
        RETIRADA5( nota5, retirada, total, conta, nome, resultado , entrada, nota100, nota50, nota20)
    }
}
// quantidade de notas de 5
function RETIRADA5( nota5, retirada, total, conta, nome , resultado, entrada, nota100, nota50, nota20) {
    qtd5 = conta
    conta = qtd5/5
    conta = parseInt(conta)
    
        if (qtd5 % 5 == 0 && conta >= 0 && conta <= nota5) {
            console.log(`serão ${conta} notas de 5`)
            console.log("e agora você tem " + (resultado +" reais"))
            nota5 = nota5 -conta
                if(resultado == 0 ) {
                    console.log("você não pode retirar mais")
                    console.log("REINICIANDO...")
                    console.log("-------------------------------------------------")
                    INICIAR()

                } else {
                    LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada)
                } 
        } 

        else if  (nota5 < conta) {
            console.log("notas de 5 insufiencientes")
            LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada)

        } else {
           LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada)

        }
     
    
}
// função para loopar até o usuario querer ou ter saldo
function LOOPING(nome, retirada, total, resultado, nota100, nota50, nota20, nota5, entrada) {
    
     var confirm = entrada("Você quer continuar?(sim ou nao) ")
        if (confirm != "sim") {
            console.log("não quer continuar tudo bem!!")
            console.log("REINICIANDO...")
             console.log("-------------------------------------------------")
            INICIAR(nota100, nota50, nota20, nota5)
                
        } else if (retirada <= total && confirm == "sim") {
    
        while(retirada <= total) {
            total = resultado
            console.log("-------------------------------------------------")
            RETIRADA100(nota100, nota50, nota20, nota5, total, nome)  
            break    
        }

        }  else {
        console.log("você não pode retirar mais")
        console.log("adeus " + nome )
 }
     } 
        
