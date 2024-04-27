
function calcularTroco(){
    let nomeProduto = prompt('Qual é o nome do produto?')
    let valorProduto = prompt('Qual é o valor do produto?')
    let valorRecebido = prompt('Qual é o valor recebido no pagamento?')
    let troco = valorRecebido - valorProduto

    alert(`O troco calculado para o produto ${nomeProduto} é R$${troco} pois o valor recebido foi R$${valorRecebido} `)
}