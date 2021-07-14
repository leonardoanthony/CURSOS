// DUPLIQUE O MENU E ADICIONE ELE EM COPY

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);


// SELECIONE O PRIMEIRO DT DA DL DE FAQ

const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');

console.log(primeiroDT);

// SELECIONE O DD REFERENTE AO PRIMEIRO DT

const primeiroDD = primeiroDT.nextElementSibling;
console.log(primeiroDD);

// SUBSTITUA O CONTEÚDO HTML DE .FAQ PELO DE .ANIMAIS

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;