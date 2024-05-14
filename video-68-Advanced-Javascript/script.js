// Advanced Javascript 
// 1. IIFE: Immediately Invoke Function Expression
// instead of calling the function seperately we use iife 
async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(23)
        }, 1000);
    })
}

// async function sleep_await(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// }
// sleep_await()


// Using IIFE
// the difference is we are not calling the function seperately that we did in above
// (async function sleep_await(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()    // we simply writing the () after the function







// Destructuring:
let a, b = [1,5]
console.log(a, b)   //o/p: undefined (2) [1, 5]

// here the a is assigned to "undefined" and b is assigned to [1,5]
// so in this case we want a = 1 and b = 5 
// so we use destructuring here

let [c, d] = [2, 4]
console.log(c, d)       // o/p: 2  4   
// now the c = 2 and d = 4 is assigned


// if we have more numbers in array and we want 
// two or some numbers to be taken from array and rest of them 
// to be placed as another array then we use "...variablename"

// ...variablename
let [e, f] = [1,2,3,4,677,689,7,90]
console.log(e, f)   // o/p: 1  2
// but we dont want like this right 
// so we use "...variablename" 
let [g, h, ...rest_of_numbers] = [1,2,3,4,677,689,7,90]
console.log(g, h, rest_of_numbers)     // o/p: 1  2  [3, 4, 677, 689, 7, 90]
console.log(g)     // o/p: 1
console.log(h)     // o/p: 2
console.log(rest_of_numbers)     // o/p: [3, 4, 677, 689, 7, 90]



// 3 dots is important 
// otherwise it treated as another variable
let [i, j, rest_of_them] = [1,2,3,4,677,689,7,90]
console.log(i, j, rest_of_them)     // o/p: 1  2  3




// we can also do with objects
let obj = {
    k: 12,
    l: 22,
    m:3
}
// using the keynames in curly braces 
// and assigning the object which we want to retrieve
// it will give the values according to keynames 
let {k, l} = obj
console.log(k, l)   // o/p: 12  22










// Spread Syntax
// it displays in individual values and it only works those are iterables 
// like arrays, strings 
let arr = [1,3,4,4,5]
let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
console.log(arr)        // o/p: [1,3,4,4,5]
console.log(...arr)     // o/p: 1 3 4 4 5
function sum(a, b, c, d, e){
    return a + b + c + d + e
}

// lets add all the numbers in an array
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])     // o/p: 17
console.log(sum(...arr))    // o/p: 17


// lets use this with the objects, so it converts array to an object taking it index values as keynames 
let obj3 = {...arr}     
console.log(obj3)       // o/p: {0: 1, 1: 3, 2: 4, 3: 4, 4: 5}


// lets do with strings 
let fname = "shiva"
console.log(...fname)   // o/p: s h i v a










// local, global and block scopes
// local scope: means variables that are declared within a function 
// and they can be accessed only within that function only 
// cannot be accessed outside the function
// Local Scope
function f1(){
    let v1 = "shiva"
    console.log(v1 + " i am local scope variable ")     // shiva
}
f1()
// console.log(v1)     // o/p: Error: v1 is not defined


// Global Scope 
// means we declare variables outside the functions and 
// outside the block of codes and this can be accessible 
// anywhere in the code means we can use this variable 
// inside the function and inside the block of code also 
let v2 = "shiva"       
function f2(){
    console.log(v2 + " i am a global scope variable, inside the function")
}
console.log(v2)
{
    console.log(v2 + " i am a global scope variable, inside the block of code")
}



// Block Scope 
// we can access this only inside the block of code and 
// cannot be accessed be outside the block
{
    let v3 = "prasad"
    console.log(v3 + " i am inside the block, i am block scope variable ")
}
// console.log(v3)     // o/p: Error: v3 is not defined









// Hoisting
// in this the variables and functions declarations are moved to the top
// means we declare them before the function and before intializing and assigning the variables
// using "var" we can perform hoisting 

// Note: only declarations are hoisted not the initializations and assignings
let s1 = "shiva"    // here we assigned the "shiva" to a variable s1
console.log(s1 + " using 'let'")     // o/p: shiva


// now we do with var
var s2 = "prasad"
console.log(s2 + " using 'var'")    // o/p: prasad


// now we do hoisting with var 
// we are printing the s3 variable before intializing and declaring
console.log(s3)     // o/p: undefined
var s3;     // here we are just declaring the variable which we did not initialized or assigned 


// but if we do the same with 'let' and 'const'
// console.log(s4)   // o/p: Error: Cannot access 's4' before initialization
let s4;             


// console.log(s5)   // o/p: Error: Cannot access 's5' before initialization
const s5 = 2



// we can do with functions also 
// we can call the function before creating
sayhello()
function sayhello(){
    console.log("hello shiva")
}       // o/p: hello shiva


sayhello()      // o/p: hello shiva