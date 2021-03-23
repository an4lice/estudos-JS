function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('imagens')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    // BOM DIA
    document.body.style.background = 'rgb(242, 219, 203)'
    img.src = './imagens/manhã.png'
}else if (hora >=12 && hora <18){
    // BOA TARDE
    img.src = './imagens/tarde.png'
    document.body.style.background = 'rgb(123, 72, 69)'
}else {
    img.src = './imagens/noite.png'
    document.body.style.background = 'rgb(42, 54, 68)'
    //BOA NOITE
}
}