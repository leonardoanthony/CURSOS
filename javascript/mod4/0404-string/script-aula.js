const comida = 'Pizza';
const bebida = new String('Refri');

comida.length; // caracteres
comida[0]; //P
comida[comida.lenght - 1]; //a

//str.charAt();

comida.charAt(0); //P

// str.concat()

const frase = comida + ' e '+ bebida;
const fraseConcat = comida.concat(' e ',bebida);

// str.includes();

const fruta =  'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); //True
fruta.includes(listaFrutas); //False

// str.starsWith() | str.endsWith()

fruta.startsWith('Ba'); //true
fruta.endsWith('na');   //true
fruta.endsWith('nas');  //false

// str.slice();

const transcacao1 = 'Deposito';
const transcacao2 = 'Saque';
const transcacao3 = 'Transferencia';

transcacao1.slice(0,3); //Dep
transcacao2.slice(-3);  //que
transcacao3.slice(4); //sferencia

// str.padStart(n,str) | str.padEnd(n,str)

const preco = 'R$ 99';

preco.padEnd(10,'.'); //R$ 99,00..
preco.padStart(10,'.'); //..R$ 99,00

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) =>{
    item = item.padEnd(item.length+3,',00');
    item = item.padStart(20,'.');
    console.log(item);
})

// str.replace(a,b)

let listaRoupas = 'Camisa Bermuda Meia';
listaRoupas = listaRoupas.replace(/[ ]+/g, ', ');
console.log(listaRoupas);

let preco2 = 'R$ 1200,00';
preco2 = preco2.replace(',','.');
console.log(preco2);

// .split()

const arrayLista = listaRoupas.split(', ');
console.log(arrayLista);