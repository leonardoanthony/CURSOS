function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}

const anthony = new Pessoa('Anthony', 23);

Pessoa.prototype.andar = function(){
    return this.nome + ' andou';
}

console.log(Pessoa.prototype);
console.log(anthony.prototype);



const pais = 'Brasil';
const cidade = new String('Recife');

const animais = ['Cachorro', "Gato", 'Peixe'];
const lista = document.querySelectorAll('li')

// Metodo Antigo
const listaArr = Array.prototype.slice.call(lista);

//Metodo Novo
const listaArr2 = Array.from(lista);

console.log(lista);
console.log(listaArr);


const Carro = {
    marca: 'Ford',
    valor: 2000,
    andar(){
        return true;
    }
}

console.log('Carro => ', typeof Carro);
console.log('Marca => ', typeof Carro.marca);
console.log('Valor => ', typeof Carro.valor);
console.log('andar() => ', typeof Carro.andar())
console.log('andar => ', typeof Carro.andar)
 
