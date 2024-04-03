let valor // nao inicializada
console.log(valor)

valor = null

console.log(valor) // Ausencia de valor
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Deletar um atributo
console.log(produto)

produto.preco = null // sem preco 
console.log(!!produto.preco)
console.log(produto)