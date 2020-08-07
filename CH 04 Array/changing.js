const games = [
    {id: 1, title: 'WarCraft'},
    {id: 2, title: 'X-COM: UFO Defense' }
]

//adding
const newValue = {id: 3, title: 'The Settlers'};
const newGames = games.concat([newValue]);
console.log(newGames);
//[ { id: 1, title: 'WarCraft' },
//  { id: 2, title: 'X-COM: UFO Defense' },
//  { id: 3, title: 'The Settlers' } ]

//editing
const id = 1;
const newValue2 = {id, title: 'WarCraft 2'};

const newGames2 = games.map(game =>
    (game.id === id) 
        ? newValue2
        : game
);
console.log(newGames2);
//[ { id: 1, title: 'WarCraft 2' },
//  { id: 2, title: 'X-COM: UFO Defense' } ]

//deleting
const newGames3 = games.filter(game => game.id !== id);
console.log(newGames3);
//[ { id: 2, title: 'X-COM: UFO Defense' } ]