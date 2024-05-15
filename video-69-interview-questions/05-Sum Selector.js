// You are working on a function that should sum all numbers 
// in an array until it encounters a negative number. 
// Write a function that performs this summation.



function sumUsingWhileloop(arr){
    let result = 0

    let num = 0
    while(num < arr.length){
        if (arr[num] < 0){
            break
        }
        else{
            result += arr[num] 
        }
        num ++
    }   
    return result
}


function sumUsingForloop(arr){
    let result = 0
    for (const num of arr) {
        if (num < 0){
            break
        }
        else{
            result += num 
        }  
    }
    return result
}



let arr_numbers = [1,2,3,4,5,6,7,-1,9,356,7,8,29]
console.log(sumUsingForloop(arr_numbers))
console.log(sumUsingWhileloop(arr_numbers))


// for (const num of arr_numbers) {
//     console.log(num)
// }