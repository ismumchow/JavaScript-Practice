function CreateSuspectObject (name) { 
    return { 
        name : name, 
        color : name.split(' ')[1],
        speak(){log(`my name is ${name}`)}
    }
} 

var suspects = ['miss scarlett','captain indigo', 'mister lime'];
var suspectList = []; 

suspects.forEach(function(name){ //think of name like the i of a for loop, or for each name
    let suspectObject = CreateSuspectObject(name);
    suspectList.push(suspectObject); 
})

//console.log(suspectList)


function CreateGamer(name,game) { 
    return {
        name : name, 
        game : game, 
        speak(){log(`my name is ${name} and I play ${game}`)}
    }
}

const gamers = [{name: 'nicmercs', game : 'fornite'}, {name: 'timthetatman', game : 'warzone'} ,{ name : 'cloakzy', game : 'warzone'}];

const listOfGamers = [];

gamers.forEach(function (gamer) {
    let gamerName = gamer.name; 
    let gamerGame = gamer.game; 

    let gamerObject = CreateGamer (gamerName, gamerGame);
    listOfGamers.push(gamerObject)
    
})


console.log(listOfGamers)


const friendArray = [ 
      {name: 'afnan', 
      height : "5-7"}, 
      { name: 'ishmam', 
      height : "5-5"}, 
      {name: 'rafi', 
      height : "5-8"},
      { name: 'nawal', 
      height : "6-3"}, 
]

friendArray.forEach( function (friend) {
    console.log (friend.name+ ' is ' + friend.height)
})



