// // const tinderUser = new object()
// // // const tinderUser = {}

// // tinderUser.id = "123abc"
// // tinderUser.name = "manish"
// // tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "kk126@gmail.com",
//     fullname:{
//         userfullname:{
//         firstname:"manish",
//         lastname:"jha"
//         }
//     }
// }
// // console.log(regularUser.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1,obj2}
// // console.log(obj3);

// // const obj3 = Object.assign({},obj1,obj2)
// // console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = [
//     {
//         id:1,
//         email:"m62gmail.com"
//     },
    
//     {
//         id:1,
//         email:"m62gmail.com"
//     },
    
//     {
//         id:1,
//         email:"m62gmail.com"
//     },
// ]
// // console.log(users)
// console.log(users[1].email)

// console.log(regularUser);

//  console.log(object.keys(regularUser));
// // console.log(object.values(tinderUser));

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}
    
//course.constructor

const {courseInstructor : instructor} = course

console.log (instructor)
  