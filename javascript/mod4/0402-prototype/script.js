// Cria uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um Metodo no prototipo que retorne o nome completo

function Pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function(){
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
}

const anthony = new Pessoas('Leonardo', 'Anthony', 23);


// liste os metodos acessados por dados criados com 
// NodeList, HTMLCollection, Document

const nodeListMetodos = Object.getOwnPropertyNames(NodeList.prototype);
const htmlCollectionMetodos = Object.getOwnPropertyNames(HTMLCollection.prototype);
const documentMetodos = Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// dado.constructor.name;

li;             //HTMLCollection
li.click;       //Function
li.innerText;   //String
li.value;       //Number
li.hidden;      //Boolean
li.offsetLeft;  //Number
li.click();     // Depende do retorno da função