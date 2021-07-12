// Quando o usuário clicar nos links internos do site,
// adicione a classe "ativo" ao item clicado e 
// remova dos demais itens caso possua
// Previna o comportamento padrão

const linksInternos = document.querySelectorAll('a[href^="#"]');

function classeAtivo(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', classeAtivo);
});

// selecione todos os elementos do site, começado a partir do body
// ao clique mostre quais elementos estão sendo clicados

const elementos = document.querySelectorAll('*');

function identificaElemento(event){
    event.preventDefault();
    // console.log(event.target);
    // event.target.remove();
}


elementos.forEach((elemento) =>{
    elemento.addEventListener('click', identificaElemento)
})

// console.log(elementos);


// utilizando o codigo anterior, ao inves de mostrar no console
// remova o elemento com o metodo remove()


// Se o usuario clicar na tecla T, aumente todo o texto do site

function identificaTecla(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textoMaior');
    }
}

window.addEventListener('keydown', identificaTecla)