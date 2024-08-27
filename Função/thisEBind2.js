function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) - A funcao bind amarra o this a funcao pessoa, assim rodando o codigo corretamente*/, 1000)
}

new Pessoa