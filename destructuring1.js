const pessoa = {
    nome: 'Ana',
    idade : 5,
    endereco: {
        logradouro: 'Rua 123',
        numero: 10
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { agencia, num } } = pessoa
//console.log(agencia, num)