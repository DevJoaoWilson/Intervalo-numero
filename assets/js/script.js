function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        res.innerHTML = 'Comando Invalido,observe o que é pedido e tente novamente!!!'
    } else {
        res.innerHTML = 'CONTANDO... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p < 0){
            alert('Passo Invalido. Passo redefinido para 1!')
            p = 1
        }

        /*Contagem Crescente*/ 
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        /* Contagem Regressiva*/
        if(i > f){
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F449}` 
    }
}
