console.log('--- Script Aula ---');

var videoGames = ['Switch', 'PS4', 'Xbox'];

console.log(videoGames[2]);

// videoGames.pop();
videoGames.push('WiiU');

for (let i = 0; i <= 10;i++){
    console.log(i);
}

var n = 0;
while(n <= 10){
    console.log(n);
    n++;
}

for( let i = 0;  i< videoGames.length; i++){
    console.log(videoGames[i]);
}

videoGames.forEach(function(jogo){
    console.log(jogo)
})