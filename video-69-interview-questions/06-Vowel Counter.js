// You need to create a function that counts the number of vowels 
// in a given string. Consider both uppercase and lowercase vowels.

let str = "shiva prasad"
let charCount = {}
for (const char of str) {
    if(charCount[char]){
        charCount[char]++
    }
    else{
        charCount[char] = 1
    }
}
console.log(charCount)





// lets count only the vowels 
let str1 = "hello world";
let vowelCount = {'a':0, 'e':0, 'i':0, 'o':0, 'u':0}

for (const char of str1) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        vowelCount[char]++
    }
}
console.log(vowelCount)