const prod1 = {}
prod1.nome = 'Celular MotoG4'
prod1.preco = 1999.99
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 59.90,
    obj: {
        teste: 1,
        obg: {
            teste2: 2
        }
    }
}

// Objeto criado no formato de JSON textual
// '{ "nome": "Camisa polo", "preco": 59.90 }'

console.log(prod2)