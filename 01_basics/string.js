const name = 'manish'
const repoCount = 40
// console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("manishjha")
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,4)
console.log(newString);
  
const anotherString = gameName.slice(-4,3);
console.log(anotherString);

const newStringOne = " manish "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://manish.com/manish%50kumarjha"
console.log(url.replace("%50","-"))

console.log(url.includes("handsome"))
console.log(gameName.split("%"));