let nota5 = 4 
let nota20 = 2
const entrada = require("prompt-sync")()
verificar20(nota20)


function verificar20 (nota20) {
    let retirada = entrada("digite um valor para retirar: ")
    retirada = Number(retirada)
    var conta = retirada/20
    conta = parseInt(conta)  
    var resultado = 20-retirada
    if(retirada % 20 == 0 ) {
        console.log(`serão ${conta} notas de 50`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota5 = nota5-conta
        looping()
    } else {
        console.log(`serão ${conta} notas de 50`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota5 = nota5-conta
    }
}
function verificar(nota5) {
    var conta = retirada/5
    conta = parseInt(conta)  
    var resultado = 20-retirada
    if(retirada % 5 == 0 ) {
        console.log(`serão ${conta} notas de 50`)
        console.log("e agora você tem " + (resultado +" reais"))
        nota5 = nota5-conta
        looping()
    }
}
function looping(){
    while(retirada <= total) {
        total = resultado
        console.log("-------------------------------------------------")
        verificar(nota5)  
        break    
    }
}