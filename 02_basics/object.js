// singleton

//object literals 



const JsUser = {
    name: "manish",
    age:20,
    location: "Bihar",
    email: "jha7474@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["monday","saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])

JsUser.email = "manish7236@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "kumar2662@gamil.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user")

}


JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());