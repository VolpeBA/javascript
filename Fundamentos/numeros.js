const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const nota1 = 9.7222
const nota2 = 3.1551

const nota_final = (nota1 * peso1) + (nota2 * peso2)
const media = nota_final / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString())
console.log(media.toString(2)) // Exibi o numero em binario
console.log(typeof media)
console.log(typeof Number)