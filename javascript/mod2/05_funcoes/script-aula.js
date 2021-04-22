console.log('--- Script Aula ---');

// Funções

function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(3));

function pi(){
    return 3.14;
}

var total = 5 * pi();
console.log(total);

function corFavorita(cor){
    if(cor === 'Azul'){
        return 'Você gosta de céu';
    } else if (cor === 'Verde'){
        return 'Você gosta de mato';
    } else{
        return 'Você não tem cor favorita';
    }
}

addEventListener('click',function(){
    console.log('Argumentos podem ser funções');
});

function imc(peso, altura){
    var imc = peso / altura * altura;
    console.log(imc);
    return imc;
}

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe sua idade';
    } else if (idade >= 60){
        return true;
    } else {
        return false;
    }
}

function faltaVisitar(paisesVisitados){
    var totalPaises = 190;;
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises); //Is not defined;

function dados(){
    var nome = 'Leonardo';
    var idade = 21;
    function outrosDados(){
        var endereco = 'Recife-PE';
        var idade = 22;
        var profissao = 'Dev JR';
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());

