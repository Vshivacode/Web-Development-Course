// Imagine you have a string, and you need to create a new string 
// that is a mirror image of the original. Write a function that 
// appends the reversed version of the original string to itself.

// let str = "shiva"
// splitted_str = str.split('')    // o/p: [ 's', 'h', 'i', 'v', 'a' ]

// reversed_str = splitted_str.reverse()    // o/p: [ 'a', 'v', 'i', 'h', 's' ]

// converted_str = reversed_str.join('')    // o/p: avihs

// console.log(str+converted_str)   // o/p: shivaavihs


// now we create the function that reverse the str
function reverseStr(str){
    return str + str.split('').reverse().join('')
}

let result = reverseStr("shiva")
console.log(result)     



// we can reverse a string using for loop also
function reverseString(str){
    reversedstr = ''
    for (i=str.length-1; i>=0; i--){
        reversedstr += str[i]
    }
    return str + reversedstr
}
let new_result = reverseString("dinesh")
console.log(new_result)