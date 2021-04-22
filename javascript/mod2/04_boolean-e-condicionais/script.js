console.log('--- Script Exercício ---');

var minhaIdade = 24;
var idadeParente = 24;

if(minhaIdade < idadeParente){
    console.log('Sou mais novo');
} else if(minhaIdade === idadeParente){
    console.log('Temos a mesma idade');
} else{
    console.log('Sou mais velho');
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(!!expressao);

var nome = 'Leonardo';
var idade = 22;
var possuiDouturado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDouturado, !!empregoFuturo, !dinheiroNaConta);

var brasil = 207;
var china = 1340;

console.log( brasil < china );

if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
} else{
    console.log('Falso');
}