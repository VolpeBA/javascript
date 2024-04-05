{
    { 
        { 
            { 
                var sera = 'Sera???' 
            } 
        } 
    } 
}
console.log(sera)
// A variavel var dentro de blocos pode ser acessada, ja dentro de uma funcao como esta abaixo, nao e possivel acessa-la de fora, somente de dentro
// da funcao.

function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) nao e possivel acessar a variavel local de fora da funcao
