// Asynchronous function
// javascript is asynchronous in nature means 
// first all synchronous functions will be executed and after that aynchronous functions will be executed 

// synchronous functions: 
// console.log, 
// Math Functions like .random(), .ceil(), .floor(), etc,
// String Methods like str.length, .indexOf(), substring(), etc,
// Array Methods like .reverse(), .slice(), .join(), etc,
// Date Methods like .now(), .getMonth(), etc,
// Regular Expressions like .test(), .exec(), etc,
// Object Methods like .keys(), .values(), etc 


// Asynchronous functions:
// Regular Functions like creating function with keyword function
// Arrow functions
// anonymous functions like creating a function assigning it to variable
// Built in Functions like setTimeout(), fetch() 


// for example 
// console.log("i am shiva ")
// console.log("i am a developer")

// setTimeout(() => {
//     console.log("i am inside the setTimeout - 1")
// }, 1000);   // this will print after 1sec


// lets add one more setTimeout
// setTimeout(() => {
//     console.log("i am inside the setTimeout - 2")
// }, 1000);   // this will print after 1sec


// console.log("the end")


// so here the output will be 
// o/p: 
// i am shiva 
// i am a developer
// the end
// i am inside the setTimeout
// if we setTimeout = 0 also it will be executed at last 






// Callback functions
// Callback functions are functions that are passed as arguments to other functions 
const oneFunction = ()=>{
    console.log('first callback first console');
}

const twoFunction = (ab, oneFunction)=>{
    console.log(ab)
    oneFunction()
}

twoFunction("first callback second console", oneFunction)





// lets do addition of two numbers using callback functions
const firstFunction = (a, b)=>{
    // console.log('i am first function');
    return a + b;
}

const secondFunction = (c, firstFunction)=>{
    console.log(c)
    console.log(firstFunction(2, 5))
}

secondFunction("shiva", firstFunction)




// Callback Hell
// like this if we use multiple callbacks then it will be in a callback hell 
// and difficult in managing the code 


// promises:   to manage the callback hell we use this 
