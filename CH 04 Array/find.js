const games = [
    { title: 'Starcraft 2', genre: 'RTS' },
    { title: 'Desperados 3', genre : 'RTT'},
    { title: 'Candy Crush Saga ', genre : 'Tile-matching'}
];

function isStrategy(game){
    const strategyGenres = ['RTS', 'RTT', 'TBS', 'TBT'];
    return strategyGenres.includes(game.genre);
}

const first = games.find(isStrategy);
console.log(first);
//{ title: 'Starcraft 2', genre: 'RTS' }

const firstIndex = games.findIndex(isStrategy);
console.log(firstIndex);
//0

const areAll = games.every(isStrategy);
console.log(areAll);
//false

const hasOne = games.some(isStrategy);
console.log(hasOne);
//true