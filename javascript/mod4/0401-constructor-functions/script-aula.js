function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('honda', 2000);

const fiat = new Carro('fiat', 3000);

// const Dom = {
//     seletor: 'li',
//     elemento(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){
//         this.elemento().classList.add('ativo');
//     }
// }

function Dom(seletor) {
    this.elemento = function(){
        return document.querySelector(seletor);
    }
    this.ativar = function(classe){
        this.elemento().classList.add(classe);
    }
}

const li = new Dom('li');
li.ativar('ativo');