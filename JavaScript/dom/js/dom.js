
function alteraParagrafo(){
    var paragrafo = document.querySelector('#p1')
    alert(paragrafo)
}

function mudaCorParagrafo(){
    var paragrafo = document.querySelector('#p1')
    paragrafo.style.color = "red"
    paragrafo.style.fontSize = "60px"
    paragrafo.innerHTML = ":)"
}


function saudacao(){
    var input = document.querySelector('#nome')
    var paragrafo = document.querySelector('#p1')
    paragrafo.innerHTML = input.value
}
