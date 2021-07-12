console.log('1_Todas as imagens');
const images = document.getElementsByTagName('img');
console.log(images)

console.log('2_Todas as imagens que comecem com Imagem');
const imagensNome = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensNome);

console.log('3_Todos os links internos');
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

console.log('4_Primeiro H2 dentro de Animais Descrição');
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao);

console.log('5_O último P do site');
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);