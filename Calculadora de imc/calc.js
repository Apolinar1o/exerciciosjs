

function verif_calculo(peso, altura) {
    let conta = Number(peso.value)/ Number(altura.value)**2
    if (peso.value.length == 0 || altura.value.length == 0 || Number(peso.value) <0 || Number(altura.value) <0) {
        alert("[ERRO] Digite os valores corretos")
        location.reload()
    } else if (conta <16) {
        res.innerHTML = "o seu IMC é magreza grave"
    } else if (conta>=16 && conta <17){
        res.innerHTML = " o seu IMC é magreza moderada"
    } else if (conta>=17 && conta <18.5){
        rres.innerHTML = "o seu IMC é agreza leve"
    } else if (conta>=18.5 && conta < 25) {
        res.innerHTML = "o seu IMC é Saudável"
    } else if (conta>=25 && conta <30) {
        res.innerHTML = "o seu IMC é Sobrepeso "
    } else if (conta>=30 && conta<35) {
        res.innerHTML = "o seu IMC é Obesidade grau I"
    } else if (conta>=35 && conta < 40) {
        res.innerHTML = "o seu IMC é Obesidade grau II(severa)"
    } else {
        res.innerHTML = "o seu IMC é Obesidade grau III(mòrbida)"
    }
    img.src = "imagens/tabela.png"
} 
function calculo() {
    var res = document.getElementById("res")
    res.innerHTML = ""
    let altura = document.getElementById("altura")
    img = document.getElementById("imagem")
    let peso = document.getElementById("peso")
    verif_calculo(peso, altura)
}