
function VERIFICAR_HORA (hora, nome) {
    if (nome.value.length == 0 || isNaN(nome.value) == false) { 
        alert(" [ERRO] digite um nome corretamente por favor")

    } else if (hora >=18 && hora < 24) { 
        res.innerHTML= "Boa noite!! " + String(nome.value)
        img.src = "imagens/noite.png"
    } else if (hora >= 8 && hora <12) {
        res.innerHTML ="Boa dia!! " + String(nome.value)
        img.src = "imagens/dia.png"
    } else if (hora >= 12 && hora <18) {
        img.src = "imagens/tarde.png"
        res.innerHTML = "Boa tarde!! " + String(nome.value)
}    else {
         img.src = "imagens/madrugada.png"
        res.innerHTML = "Boa madrugada!! " + String(nome.value)
      
} 
res.innerHTML += `<br> Agora são ${hora} horas`

return hora
}
function HORA() {
    let agora = new Date()
    res = document.getElementById("res")
    res.innerHTML = ""
    nome = document.getElementById("nome")
    img = document.getElementById("imagem") 
    VERIFICAR_HORA(agora.getHours(), nome)

}
    



