console.log('--- Script Exercício ---');

function verificaVerdadeiro(v){
    if(!!v === true){
        return true;
    } else {
        return false;
    }
}

function perimetro(lado){
    return lado * 4;
}

function nomeCompleto(nome, sobrenome){
    return `Seu nome completo é ${nome} ${sobrenome}`;
}

function verificaPar(valor){
    if(valor % 2 === 0){
        return 'Par';
    } else {
        return 'Impar';
    }
}

function tipoDado(dado){
    return typeof dado;
}

addEventListener('scroll',function(){
    console.log('Leonardo');
})