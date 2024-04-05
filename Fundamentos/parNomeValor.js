// par nome/valor
const saudacao = 'Opa' // Contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' // Contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Saturno',
        numero: 283
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)