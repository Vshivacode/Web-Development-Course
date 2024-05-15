// You are tasked with writing a function that doubles each element
//  in an array. However, there's a catch: if the array contains 
//  consecutive duplicate elements, only double one of them.

let sample = [1,2,3,4,5,6,7,8]
// lets duplicate each element of an array

output = []

for (const number of sample) {
    double_number = number * number
    output.push(double_number)    
}

// console.log(output)




// if there is a consecutive duplicate elements then 
// we need to double only one of them

// lets use this array having consecutive of two duplicates
let arr = [1,2,2,2,3,4,5,5,8,8,9,1,23,23,34,677,29]

result = []

for (let num=0; num<arr.length; num++) {
    current_num = arr[num]
    next_num = arr[num + 1]
    // result_next.push(next_num) 
    if (current_num === next_num){
        result.push(current_num*current_num)
    }
    else{
        result.push(current_num)
        // console.log(current_num)
    }
}
console.log(result)
