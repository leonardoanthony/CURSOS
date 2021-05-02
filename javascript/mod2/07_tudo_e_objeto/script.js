console.log('--- Script Exercício ---');

//String

// .length;
// .toUpperCase;
// .replace;

//DOM

// .URL
// .location
// .getElementByID
// .querySelector
// .appendChild

function copiarTexto(){
    const inputTest = document.querySelector('#inputTest');
    inputTest.select();
    document.execCommand('copy');
};