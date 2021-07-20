class mamifero{
    constructor(especie, nome, idade){
        this.especie = especie
        this.nome = nome
        this.glandulasMamarias = true
        this.pelo = true
    }
}

class humano extends mamifero{
    constructor(especie, nome, idade, trabalho){
    super(especie,nome,idade)
    this.trabalho = trabalho
    this.bipede = true
    }
    
}

class felino extends mamifero{


}

var funcionario = new humano('Homo sapiens', 'Roberto', 29, 'professor') 

console.log(funcionario)