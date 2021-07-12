// ADICIONE A CLASSE ATIVO A TODOS OS ITENS DO MENU

const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
    item.classList.add('ativo');
})
console.log(menu);



// REMOVA A CLASSE ATIVO DE TODOS OS ITENS DO MENU E MANTENHA APENAS NO PRIMEIRO
menu.forEach((item) => {
    item.classList.remove('ativo');
})
menu[0].classList.add('ativo');
console.log(menu);

// VERIFIQUE SE AS IMAGENS POSSUEM O ATRIBUTO ALT

const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach((item) => {
    const possuiAlt = item.hasAttribute('alt')
    console.log(item, possuiAlt);
})


// MODIFIQUE O HREF DO LINK EXTERNO NO MENU
const linkExterno = document.querySelector('a[href^="https"]');
console.log(linkExterno);