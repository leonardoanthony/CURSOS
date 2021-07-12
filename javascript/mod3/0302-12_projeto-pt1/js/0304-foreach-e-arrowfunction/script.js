console.log('1. Mostre no console cada parágrafo do site');
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => console.log(item));

console.log('2. Mostre o texto de cada parágrafo do site');
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item,index) => {
    console.log(item,index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);