function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");

 }
// sayMyName()

function addTwoNumber(number1,number2){
// let result = number1 + number2
//return result
return number1 + number2

}
const result = addTwoNumber(3,5)
console.log("Result",result);

function loginUserMessage(username = "pappu"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return ` ${username} just logged in`

}
// console.log(loginUserMessage("manish"))
console.log(loginUserMessage())

function calculateCartPrice (val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400))

const user = {
    username: "manish",
    price:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price ${anyobject.price}`);

}

//handleObject(user)
// handleObject({
//     handleObject({
//         username: "pappu",
//         price:499
//     })
// })

 const myNewArray = [200,3,,700,100]
function returnSecondValue (getArray){
    return
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100]));