// let a = prompt("Enter first number: ")
// let b = prompt("Enter second number: ")

// let sum = parseInt(a) + parseInt(b)     // parseInt is used to convert a string to integer

// console.log("the sum is: " + sum)



// for example user enters string instead of number then 
// o/p: the sum is NaN                 "NaN" means Not a Number


// it does not showing error but we want to show an error if user enters string or any other 
// so we use throw






// // throw
// if (a === NaN || b === NaN){
//     throw SyntaxError("sorry alphabets are not allowed")
// }
let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")

let sum = parseInt(a) + parseInt(b)     // parseInt is used to convert a string to integer

// if (parseInt(a) != a || parseInt(b) != b){
//     throw SyntaxError("Sorry alphabets are not allowed")
// }


//                 OR
// or we can use isNaN() function also 
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry Alphabets are not Allowed")
}

console.log("the sum is: " + sum)






// how to handle if the error is thrown by javascript
// we can use try and catch 

// if we guess that it can throw an error then we write that in try
// try()

// try {
//     console.log(sum * z)        // z is not defined
// } 
// // catch is used to catch that error and we can write in that as some message or anything 
// // catch() is used to catch the error that occurs in try block
// catch (error) {
//     console.log("error vachindira, see try block")   
// }






// try and catch are synchronous functions 
//  if we add some asynchronous function inside the "try" block then
// "catch" block does not work
// lets use above example inside the async function setTimeout()
// previously we catched the error which came from try block 
// but now we cannot catch that error because of this async function 
// as we know async func always execute at last so thats is the reason


// try {
//     setTimeout(()=>{
//         console.log(sum + x)
//     })   // o/p: script.js:72 Uncaught ReferenceError: x is not defined at script.js:72:27
// }
// // it executes when try block occurs an error because of async 
// // it executes at last, so after catch block it executes, so it cant catch that error 
// catch(error){
//     console.log("error occured using async function in try block")
// }    







// finally 
// is used to run whatever happens in try and catch block it runs finally block
try {
    console.log(sum * z)        // z is not defined
} 
catch (error) {
    console.log("error vachindira, see try block")   
}
// lets use finally
finally{
    console.log(" i am closing all files using finally")
}   // o/p: script.js:101 error vachindira, see try block
    // o/p: i am closing all files 



// Interview Question
// why we use finally instead we can use console directly ?
// example
// we can use console directly instead of using finally but 
try {
    console.log(sum * z)        // z is not defined
} 
catch (error) {
    console.log("error vachindira, see try block")   
}

// we can use like this the output will be same
console.log(" i am closing all files using console.log")
// o/p: script.js:101 error vachindira, see try block
// o/p: i am closing all files 




// Reason: for using finally
// when we are using try, catch inside any function with return 
// then above example wont work 
function main(){
    try {
        console.log(sum * z)        // z is not defined
        return true
    } 
    catch (error) {
        console.log("error vachindira, see try block")   
        return false
    }
    // Now the below code wont work because we used return 
    // console.log(" i am closing all files ")


    // in this case we use finally 
    finally{
        console.log(" i am closing files, using finally with main function")
    }
    
}
main()