const game = {}; // creating the game object
game['suspects'] = []; // array is the game object

// const game= { 
//     'suspects' : [] // just another way to re-write
// }

game.suspects.push({ 
    name: 'rusty', 
    color: 'orange'
}); 
game.suspects.push({ 
    name: 'neal', 
    color: 'blue'
}); 
game.suspects.push({ 
    name: 'shobuj', 
    color: 'green'
}); 

for (var i = 0; i < game.suspects.length; i++) {
  //  console.log(game.suspects[i].name);
}


let char1 = ''; 
let char2 = '';

var gameLoop = function () {
    for (var i = 0; i < game.suspects.length; i++) {
        
       
        for (let key in game.suspects[i]) {
            if(game.suspects[i][key] === 'orange') {
               char1 =  game.suspects[i].name 
            }
            else if(game.suspects[i][key] === 'green'){
                char2 = game.suspects[i].name
            } 
            else {
                //console.log (' fuck thats not him')
            }
        }
    }
}

gameLoop();

console.log(char1)
console.log(char2)


