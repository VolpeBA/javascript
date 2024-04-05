let isAtive = false
console.log(isAtive)

isAtive = true
console.log(isAtive)

isAtive = 1
console.log(!isAtive)
console.log(!!isAtive)// Duas !! nega a primeira e passa a ser verdadeira

console.log(!!3) // Todos sao verdadeiros
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtive = 0))


console.log('Valores falsos...')
console.log(!!0) // Todos sao falsos
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtive = false))

console.log('Finalizando...')
console.log(!!('' || null || 0 || 'Teste'))

let nome = 'Bruno'
console.log(nome || 'Desconhecido')// Caso o nome seja falso(Vazio) ele ira exibir DESCONHECIDO


