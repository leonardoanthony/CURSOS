const comidas = ['Pizza','Frango','Carne','Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o ultimo valor de comidas e coloque em uma variável
// Adicione 'Arroz' no final da Array
// Adicione 'Peixe' e 'Batata' no inicio

const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
comidas.unshift('Peixe', 'Batata');
comidas.push('Arroz');

console.log(comidas)

///////////////////////////////////////////////////////

const estudantes = ['Marcelo', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabetica
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// verifique se Juliana faz parte dos estudantes

estudantes.sort().reverse();
const hasJoana = estudantes.includes('Joana');
const hasJuliana = estudantes.includes('Juliana');

console.log(estudantes, hasJoana, hasJuliana)

///////////////////////////////////////////////////////

let html = `
            <section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`;

html = html.split('section').join('ul').split('div').join('li');


console.log(html)

// Substitua Section por ul e div por li

///////////////////////////////////////////////////////

const carros = ['Ford', 'Fiat', 'VM', 'Honda'];
const backupCarros = carros.slice();

carros.pop();

console.log(carros);
// Remova o ultimo carro, mas antes de remover 
// salve a array original em outra variavel
