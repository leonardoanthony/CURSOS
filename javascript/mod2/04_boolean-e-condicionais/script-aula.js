console.log('--- Script Aula ---');


// Boolean
var possuiTecnico = false;
var possuiGraduacao = true;

// Condicionais
if (possuiTecnico){
    console.log('Possui Técnico');
} else if(possuiGraduacao){
    console.log('Possui Graduação');
} else{
    console.log('Não possui nada');
};

// Truthy e Falsy
var nome = 'a10' - 10;

if(nome){
    console.log(nome);
} else{
    console.log('Nome não existe!')
}

/*
FALSY

if(false)
if(0)
if(Nan)
if(null)
if(undefined)
if('')

Todo o resto é TRUTHY 
*/

// Operador de negação !

var possuiDouturado = true;
console.log(!possuiDouturado); //false

// Operador de comparação

10 > 5;         // maior que. true;
10 < 5;         // menor que. false;
10 >= 5;        // maior ou igual a. true;
10 <= 5;        // menor ou igual a. false;
10 == '10';     // true
10 == 10;       // true
10 === '10';    // false
10 === 10;      // true
10 != 15;       // true
10 !== '10';    // true
10 !== 10;      // false


// Operador && ( e )

true && true;           // true
true && false;          // false
false && true;          // false
'Gato' && 'Cão';        // 'Cão'
(5 - 5) && (5 + 5);     // 0
'Gato' && false;        // false
(5 >= 5) && (3 < 6);    // true 


// Operador || ( ou )

true || true;
true || false;
false || true;
'Gato' || 'Cão';
(5 - 5) || (5 + 5);     // 0
'Gato' || false;        // false
(5 >= 5) || (3 < 6);    // true 

// Switch

var corFavorita = 'Preto';

switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu');
    break;

    case 'Vermelho':
        console.log('Olhe para as rosas');
    break;

    case 'Amarelo':
        console.log('Olhe para o sol');
    break;
    
    default:
        console.log('feche os olhos');
}