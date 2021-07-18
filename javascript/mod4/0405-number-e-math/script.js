// Retorne um numero aleatório entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);



// Retorne o maior numero da lista abaixo
const numeros = '4, 5, 28, 8, 9';
const numerosLista = numeros.split(', ');
const numeroMaximo = Math.max(...numerosLista);
console.log(numeroMaximo);




// Crie uma função para limpar os preços
// retornar os numeros com centavos arredondados
// e a soma total

const listaPrecos = [
    'R$ 59,00',
    'R$ 100,222',
    'R$ 230  ',
    'r$ 230'
];


let valorTotal = 0;

function limpaPreco(preco){
    preco = +preco.trim().slice(3).replace(',','.');
    preco = +preco.toFixed(2);
    return preco
}

listaPrecos.forEach((preco) =>{
    valorTotal += limpaPreco(preco);
})

console.log(valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))