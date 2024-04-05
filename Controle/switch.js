const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log(nota)
            break
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
            console.log(nota)
            break
        case 7:
            console.log(nota)
            break
        case 6:
            console.log(nota)
            break
        case 5:
            console.log(nota)
            break
        case 4: case 3:
            console.log(nota)
            break
        default:
            console.log(nota + ' default')
            break
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
