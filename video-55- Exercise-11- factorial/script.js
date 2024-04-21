// let a = Number(prompt("enter a number: "))       // 5 * 4 * 3 * 2 * 1

// // so we need to multiply each number to the next iteration number 
// result = 1       // result = 1 * 5 * 4 * 3 * 2 * 1    
// for (let index = a; index >= 1; index--){
//     result *= index
// }
// console.log(result)


// result = 1       // result = 1 * 5 * 4 * 3 * 2 * 1    
// for (let index = 1; index <= a; index++){
//     result *= index
// }
// console.log(result)



// using reduce() function
// arr = [1,2,3,4,5]
// const arr_func = (a, b)=>{
//     return a * b 
// }
// console.log(arr.reduce(arr_func))



// now we create an array according to the number
// means if we enter 5 then it will create an array of [1,2,3,4,5]
let number = 5
// console.log(Array.from(number))          // this will create an empty array
// console.log(Array.from(Array(number).keys()))   // this will print the keys from 0 to 4 
let arr = Array.from(Array(number + 1).keys())   // this will print the keys from 1
let arr_final = arr.slice(1)   // it will start from 1st index 


// now we have the array that is created as we enter some number 
// now we use the reduce()
const result = (a, b)=>{
    return a * b
}
console.log(arr_final.reduce(result))

