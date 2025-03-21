const marval_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
const new_heroes = ["akshay","pappu","ritik"]

marval_heroes.push(dc_heroes)

//console.log(marval_heroes);
//console.log(marval_heroes[3][1]);

//const allHeros= marval_heroes.concat(dc_heroes)
//console.log(allHeros);

const all_new_heros =[...marval_heroes,...dc_heroes,...new_heroes]

//console.log(all_new_heros);

const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]

//const real_another_array = another_array.flat(infinity)
//console.log(real_another_array);


console.log(Array.isArray("manish"))
console.log(Array.from("manish"))
console.log(Array.from({name: "manish"})) //intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



