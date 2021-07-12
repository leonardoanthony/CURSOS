// VERIFIQUE A DISTANCIA DA PRIMEIRA IMAGEM AO TOPO DA PAGINA

const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);

// RETORNE A SOMA DA LARGURA DE TODAS AS IMAGENS

const imagens = document.querySelectorAll('img');
let somaLargura = 0;
imagens.forEach((imagem, index) => {
    const larguraImagem = imagem.offsetWidth;
    somaLargura = somaLargura + larguraImagem;
});
console.log(somaLargura);

// VERIFIQUE SE OS LINKS DA PAGINA POSSUEM O MINIMO RECOMENDADO
// PARA TELAS UTILIZADAS COM O DEDO (48X48)


const links = document.querySelectorAll('.menu a');
links.forEach((link, index) => {
    const linkLargura = link.offsetWidth;
    const linkAltura = link.offsetHeight;
    console.log(index, linkLargura, linkAltura)
});



console.log(links);


// SE O BROWSER FOR MENOR QUE 720PX ADICIONE A CLASS MENU-MOBILE AO MENU

const menu = document.querySelector('.menu');
const small = window.matchMedia('(max-width:720px)').matches;

if(small){
    menu.classList.add('menu-mobile');
}
console.log(small);