const nome = 'Rebeca'
const concatenacao = 'Hello ' + nome + '!'

const template = `
    Hello
    ${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Hey... ${up('cuidado')}!`)