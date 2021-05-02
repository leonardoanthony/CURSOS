console.log('--- Script Exercício ---');

var copaBrasil = [1959, 1962, 1970, 1994, 2002];

for(let i = 0; i < copaBrasil.length;i++){
    console.log(`O Brasil ganhou a copa de ${copaBrasil[i]}`);
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for(let i = 0; i<frutas.length;i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

var ultimaFruta = frutas[frutas.length-1];

console.log(ultimaFruta);
