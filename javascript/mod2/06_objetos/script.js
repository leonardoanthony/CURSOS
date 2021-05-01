console.log('--- Script Exercício ---');

var dados = {
    nome: 'Leonardo',
    sobrenome: 'Anthony',
    exibirNome(){
        return `${this.nome} ${this.sobrenome}`;
    },
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

var cachorro = {
    especie: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'Latir';
        } else {
            return 'Nada';
        }
    },
}