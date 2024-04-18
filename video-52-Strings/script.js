let str = 'i am shiva a developer'
console.log(str[0])

console.log(str.length)


let fname = "shiva"
let lname = "vatnala"
console.log("my first name is " + fname + " and my lastname is " + lname)


// we can use template literals instead of above line 
// we use back ticks that will be seen above tab button on keyboard 
console.log(`my first name is ${fname} and my last name is ${lname}`)






// escape sequences are \n, \", \t
console.log("i am shiva vatnala\n and a developer")



console.log(str.toUpperCase())


// to display only particular characters within range
// we use slice() function but the end is not included
//it starts from 2nd index and prints upto 9 index but does not print the 10th index
console.log(str.slice(2, 10)) 

// if we give only one number it starts from that number and prints to end 
console.log(str.slice(2))




// "replace" is used to replace only first occurrence 
let fullname = "shiva shiva prasad"
console.log(fullname.replace("shiva", "vatnala"))

console.log(fullname.replace("s", 12345))




// concat 
let role = "                     developer"
console.log(role.concat(" shiva "))


role = role.concat(" shiva vatnala")
console.log(role)
console.log("without using trim length is: " + role.length)




// remove whitespaces
console.log(role.trim())
console.log("using trim() length is: " + role.trim().length)




// strings are immutable 
let a = "shiva"
console.log(a)

// a = "prasad"
// console.log(a)

a[0] = "z"
console.log(a)





// find the character using index value using charAt
console.log(fullname.charAt(10))   //it displays the character at 10th index 



// we can find the index of a character using indexof 
console.log(fullname.indexOf("a"))  // it will find the index of a character 
// we can give multiple characters also 
console.log(`"prasad" string is starting from at index: ${fullname.indexOf("prasad")}`)   //it gives the starting index value of the string


console.log(fullname.startsWith("shiprasva"))   // returns true or false

console.log(fullname.endsWith("ad"))    // returns true or false