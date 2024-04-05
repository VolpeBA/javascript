function soBoaNoticia(nota) {
    if (nota >= 6 ) {
        console.log('Aprovado com ' + nota + ", Parabens!")
    }else {
        console.log('Reprovado com ' + nota + ", estude mais na proxima.")
    }
}

soBoaNoticia(8)
soBoaNoticia(4)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('E verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
