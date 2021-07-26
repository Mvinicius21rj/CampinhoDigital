class animal {
    #tamanho
    #peso
    #idade
    constructor(tamanho, peso, idade){
        this.#tamanho = tamanho
        this.peso = peso
        this.#idade = idade
    }

get tamanho(){
    return this.#tamanho
}
set tamanho(valor){
    this.#tamanho = valor
}

get peso(){
    return this.#peso
}
set peso(valor){
    this.#peso = valor
}
get idade(){
    return this.#idade
}
set idade(valor){
    this.#idade = valor
}

fazerBarulho(){
    console.log("estou fazendo barulho") 
}

dormir(){
console.log("estou dormindo")
}

comer(){
("estou comendo")
}
}


class felino extends animal {
    #nome
    constructor(nome, tamanho, peso, idade){
        super(tamanho, peso, idade)
        this.#nome = nome
    }
    get nome(){
        return this.#nome
    }
    set nome(valor){
        this.#nome = valor
    }
    vaguear(){
        console.log("estou vagando")
    }
}

class canino extends animal{
    #nome
    constructor(nome,tamanho, peso, idade){
        super(tamanho, peso, idade)
        this.#nome = nome
    }
    get nome(){
        return this.#nome
    }
    set nome(valor){
        this.#nome = valor
    }
    vaguear(){
        console.log("estou vagando!")
    }
}

const leao = new felino("Simba", 1.95, 310, 19)
const gato = new felino("GatoDeBotas", 1.20, 16)


const cachorro = new canino("Scooby-Doo", 1.80, 90, 23)
const lobo = new canino("wolverine", 1.70, 75, 62) 

console.log(cachorro.vaguear())
console.log(gato.vaguear())

console.log(gato.nome)
console.log(cachorro.nome)
console.log(leao.nome)
console.log(lobo.nome)