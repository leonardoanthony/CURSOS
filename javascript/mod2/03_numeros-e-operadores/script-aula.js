// Declaração de variaveis com numeros

var idade = 23;
var gols = 1000;
var pi = 3.14;   // Ponto para decimais
var exp = 2e10;  // 20.000.000.000

// Operadores Aritméticos

var soma = 5 + 5;           // 10
var subtracao = 5 - 5;      // 1
var multiplicacao = 5 * 5;  // 25
var divisao = 5 / 5;        // 1
var expoente = 5 ** 5;      // 3125
var modulo = 5 % 6;         // resto da divisão: 1

// Operadores Aritméticos (String)

var somaString = '100' + 50;        // 10050
var subtracaoString = '100' - 50;   // 50
var frase = 'Comprei 100' - 50;     // NaN ( Not a Number)

// A ordem importa

var total1 = 20 + 5 * 2;            // 30
var total2 = (20 + 5) * 2;          // 50
var total3 = 20 / 5 * 2;            // 50
var total4 = 10 + 10 * 2 + 20 / 2;  // 40


// Operadores Aritméticos Unários

var x = 1;
x++; //1
// console.log(x); //2

++x; //2
// console.log(x); //2;

var numero = '22';
+numero; //+20 (Number)
-numero; //-20 (Number)