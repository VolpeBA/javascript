const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)// Mostra o tamanho do array

valores.push({id: 3}, false, null, 'teste') // Inserindo dados no fim do array
console.log(valores)

console.log(valores.pop()) // Funcao pop retira e retorna o ultimo elemento do array
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)

