let a = Number(prompt("enter a number: "))       // 5 * 4 * 3 * 2 * 1

// so we need to multiply each number to the next iteration number 
result = 1       // result = 1 * 5 * 4 * 3 * 2 * 1    
for (let index = a; index >= 1; index--){
    result *= index
}
console.log(result)



// using reduce() function
// arr = [1,2,3,4,5]
// const arr_func = (a, b)=>{
//     return a * b 
// }
// console.log(arr.reduce(arr_func))