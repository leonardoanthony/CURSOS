console.log('--- Script Exercício ---');

var scroll = 1000;
scroll += 500;


var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Liberar Crédito' : 'Negar Crédito';
console.log(darCredito)