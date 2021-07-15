// Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(`${this.nome} andou`);
    }
}

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou');
//     }
// }


// Crie 3 pessoas:
// João - 20 anos
// Maria - 25 anos
// Bruno - 15 anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// crie uma constructor function (dom) para manipulação
// de listas de elementos do dom.
// deve contar as seguintes propriedades e metodos:

// elements, retorna nodelist com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elemento = elementList;
    this.ativar = function(classe){
        elementList.forEach((item) =>{
            item.classList.add(classe);
        })
    }
    this.remover = function(classe){
        elementList.forEach((item) =>{
            item.classList.remove(classe);
        })
    }
}

const li = new Dom('li');
li.remover('ativo');
