const games = [
    { title: 'Starcraft', genre: 'RTS' },
    { title: 'Command and Conquer',  genre: 'RTS' },
    { title: 'Heroes of Might and Magic', genre: 'TBS' },
    { title: 'World of Warcraft', genre : 'MMORPG'}
]

function toGameHtml(game){
    return `<div>${game.title}</div>`;
}

const htmlRows = games
    .map(toGameHtml);

console.log(htmlRows);
 //   [ '<div>Starcraft</div>',
 //   '<div>Command and Conquer</div>',
 //   '<div>Heroes of Might and Magic</div>',
 //   '<div>World of Warcraft</div>' ]

 console.log(htmlRows.join(''));
 //"<div>Starcraft</div><div>Command and Conquer</div><div>Heroes of Might and Magic</div><div>World of Warcraft</div>"
