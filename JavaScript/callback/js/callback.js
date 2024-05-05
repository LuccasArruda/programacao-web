function operacaoAssincrona(){
    setTimeout(exemplo, 5000)
}

function exemplo(callback){
    alert("Terminou!")
    callback()

}

function minhaCallback(){
    window.alert("minhaCallBack executada")
}

function operacaoAssincrona(callback){
    setTimeout(exemplo(callback), 5000)
}

//é assíncrono, não espera uma função terminar para chamar a próxima

