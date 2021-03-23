function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex') 
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
            genero = 'homem'
            if (idade >=0 && idade <2){
                //criança
                img.setAttribute('src', 'bebe-menino.png')
            }
            if (idade >=2 && idade <4){
            //jovem
                img.setAttribute('src', 'menino.png')
            }
            else if (idade >=4 && idade <14){
                //adulto
                img.setAttribute('src', 'crianca-menino.png')
            }   
            else if (idade >=14 && idade <25){
                img.setAttribute('src', 'jovem-homem.png')
            }
            else if (idade >=25 && idade <45){
                img.setAttribute('src', 'homem-adulto.png')
            }
            else if (idade > 46){
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex [1].checked){
            genero = 'mulher'
            if (idade >=0 && idade <2){
                //bebê
                img.setAttribute('src', 'bebe-menina.png')
            }
            else if (idade >=2 && idade < 4){
                //criança
                img.setAttribute('src', 'menina.png')
            }
            else if(idade >=4 && idade <14){
                //Jovem
                img.setAttribute('src', 'crianca-menina.png')
            }
            else if(idade >=14 && idade <25){
                //adulta
                img.setAttribute('src', 'jovem-mulher.png')
            }
            else if(idade >=25 && idade <45){
                img.setAttribute('src', 'mulher-adulta.png')
            }
            else if (idade > 46){
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.texAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}