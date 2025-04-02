// for of

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

greetings = "helloword"
for (const greet of greetings) {
   // console.log(greetings);
}

//map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Of America")
map.set('FR', "France")

//console.log(map)

for (const[ key ,value]of map) {

   // console.log(key,':-',value);
}

const myObject = {
    game1: 'NFS',
    game2:'spiderman'
}
// for (const key of myObject) {
//     console.log(key,':-',value);
// }

