const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
                                    //VERDADEIRO      FALSO
console.log(resultado(7.1))
console.log(resultado(6.7))

const status = nota => console.log(nota >= 7 ? 'Aprovado' : 'Reprovado')
status(7.1)