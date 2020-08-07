const games = [
    { title: 'Starcraft', genre: 'RTS' },
    { title: 'Command and Conquer',  genre: 'RTS' },
    { title: 'Heroes of Might and Magic', genre: 'TBS' },
    { title: 'World of Warcraft', genre : 'MMORPG'}
];

function countByGenre(countMap, game){
    const count = countMap[game.genre] || 0;
    return {
        ...countMap,
        [game.genre]: count + 1
    }
}

const gamesByGenreCounts = games
    .reduce(countByGenre, {});

console.log(gamesByGenreCounts);
//{ RTS: 2, TBS: 1, MMORPG: 1 }
