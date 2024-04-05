const notas = [6.7, 9.8, 7.7, 5.6, 7.6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Bruno',
    Sobrenome: 'Volpe',
    idade: 23,
    peso: 90
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
