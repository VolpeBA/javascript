//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(10, 3)


// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(10, 2))


// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')