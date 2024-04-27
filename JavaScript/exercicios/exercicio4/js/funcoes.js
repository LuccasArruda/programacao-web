
function calculaCirculo(){
    let raio = prompt('Informe o raio do Círculo: ')
    let area = 3.14 * (raio * raio)
    alert(`A area do círculo é: ${area}`)
}

function calculaTriangulo(){
    let base = prompt('Informe a base do Triângulo: ')
    let altura = prompt('Informe a altura do triângulo: ')
    let area = (base * altura)/2
    alert(`A area do triângulo é: ${area}`)
}

function calculaQuadrado(){
    let lado = prompt('Informe o valor do lado do quadrado: ')
    let area = lado * lado
    alert(`A area do quadrado é: ${area}`)
}

function calculaTrapezio(){
    let base1 = parseFloat(prompt('Informe o valor da base1 do Trapézio: '))
    let base2 = parseFloat(prompt('Informe o valor da base1 do Trapézio: '))
    let altura = parseFloat(prompt('Informe a altura do Trapézio: '))
    let area = ((base1 + base2) * altura)/2
    alert(`A area do trapézio é: ${area}`)
}