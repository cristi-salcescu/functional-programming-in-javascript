const games = [
    { title: 'Starcraft', genre: 'RTS' },
    { title: 'Command and Conquer',  genre: 'RTS' },
    { title: 'Heroes of Might and Magic', genre: 'TBS' },
    { title: 'World of Warcraft', genre : 'MMORPG'}
]

function isStrategy(game){
    const strategyGenres = ['RTS', 'RTT', 'TBS', 'TBT'];
    return strategyGenres.includes(game.genre);
}

const strategyGames = games
    .filter(isStrategy);

console.log(strategyGames);
//[ { title: 'Starcraft', genre: 'RTS' },
//  { title: 'Command and Conquer', genre: 'RTS' },
//  { title: 'Heroes of Might and Magic', genre: 'TBS' } ]