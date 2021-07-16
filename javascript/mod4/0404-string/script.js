// Utilizando foreach no array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao:'Taxa do pão',
        valor: 'R$ 39',
    },
    {
        descricao:'Taxa do mercado',
        valor: 'R$ 129',
    },
    {
        descricao:'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao:'Taxa do Banco',
        valor: 'R$ 139',
    },
    {
        descricao:'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];


let taxatotal = 0;
transacoes.forEach((item)=>{
    if(item.descricao.startsWith('Tax')){
        let numLimpo = +item.valor.slice(3)
        taxatotal += numLimpo;
    }
})
console.log(`Total em taxa: R$ ${taxatotal},00`);

let recebimentoTotal = 0;
transacoes.forEach((item)=>{
    if(item.descricao.startsWith('Rec')){
        let numLimpo = +item.valor.slice(3)
        recebimentoTotal += numLimpo;
    }
})
console.log(`Total em Recebimento: R$ ${recebimentoTotal},00`)

// Retorne um array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'));


// Substitua Todos os span's por a's

let html = `<ul>
                <li><span>ACB</span></li>
                <li><span>ABC</span></li>
                <li><span>BCA</span></li>
              </ul>`;

html = html.split('span').join('a');

console.log(html)

// Retorne o Ultimo caracter da Frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(--frase.length))

// Retorne o total de Taxas
const trasncacoes2 = ['Taxa do banco', 'TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0
trasncacoes2.forEach((item) =>{
    item = item.toLowerCase();
    item = item.trim();
    if(item.startsWith('taxa')){
        totalTaxas++;
    }
});
console.log(totalTaxas)


