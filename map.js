

var array  = [1,2,3,4,5];

var transformed = array.map(function (num) {
    return num+1 // function will be applied to every single item in that array
});


const weapons = ['AK','KRIG','M4']; 

const friends = ['Afnan','Nawal','Rafi']; 

const makeBroken = function (item) {
    if(item === 'AK') {
    return {name : item , status:  " is broken"}
        }
    else return {name : item, status : " is viable"}
};

// function makeRecord (name) { 
//     return {id : uniqID(), name }; 
// }

// friends.map(makeRecord);
var modifiedWeapons = weapons.map(makeBroken)

console.log(modifiedWeapons);



