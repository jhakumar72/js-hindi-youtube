// Primitive 

// 7 types : string,number,boolean,null,undefined,symbol,bigint

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 6476827642727n

// Refrenve (Non primitive)
// array, object,Function

const heros = [ " shaktiman", "naagraj","doga"];
let myObj = {
    name:"manish",
    age:20,
}
const myFunction=function(){
    console.log("helloworld");
}
console.log(typeof outsideTemp);



//++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (primitive), Heap(Non-primitive)

let mynameis = "manish"

let anothername = mynameis
anothername = "kumarjha"
 console.log(mynameis);
 console.log(anothername);
 

 let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
 }

 let userTwo = userOne

 userTwo.email ="manish@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);

 
