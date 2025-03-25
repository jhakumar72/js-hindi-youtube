// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named iife
    console.log(`DB CONNECTES`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")