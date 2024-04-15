console.log("code is running...")

var a = 23;
var b = 10;


// we can directly assign the values also without using var 
// by default it uses it as "var"
c = "shiva";


// "var" can be updated and re-declared within its scope and it is globally scope
a = 50

// console.log(a + b + c)

// concatenating the string and number
// console.log(a + " b " + c)


// to see the type of a variable we use "typeof" 
// console.log(typeof a, typeof(b), typeof c)



// using "let" for creating variables 
// and using let we cannot re-declare the variables and it is block scope
let x = 100;
y = 200;
z = x + y

// console.log(z)

// lets try to re-declare the variable x, it gives error 
// let x = "shiva"


// we can update the variable let x value by without using the "let",  value updated  
x = "shiva"

// console.log(z)





// lets see the "const" variable 
// "const" variable neither updated nor re-declared and it is block scope
const p = 10;
const q = " shiva ";



// lets try to re-declare the varible,  gives error
// const p = "shiva";


// lets try to update this variable,   it gives error
// in vs code it wont show the red underline at console it gives error
// p = 300;

// console.log(p + q)




// we use "let" instead of "var" because 
// var is a global scope so the value will be used entire code and within the block of code AudioScheduledSourceNode
// so when we want to use some variable that is only used within block of code then we use let in that case 

// let a1 = "shiva"

// {
//     let a1 = "prasad"
//     console.log(a1)
// }

// console.log(a1)

// final output: prasad shiva



// lets use var

// var b1 = "shiva"

// {
//     var b1 = "prasad"
//     console.log(b1)
// }

// console.log(b1)

// final output: prasad prasad 





let p1 = "shiva"
let p2 = 234
let p3 = null
let p4 = true
let p5 = undefined
let p6 = 2.9

console.log(p1, p2, p3, p4, p5, p6)
console.log(typeof p1, typeof p2, typeof p3, typeof p4, typeof p5, typeof p6)






// how to create an object 

let obj = {
    "name": "shiva",
    "job role": "developer",
    "age": 234,
}


console.log(obj)


// adding one more key-value pair to an Object

obj.salary = "100cr";
console.log(obj)



// changing the value of a key 
obj.salary = "500cr";
console.log(obj)
