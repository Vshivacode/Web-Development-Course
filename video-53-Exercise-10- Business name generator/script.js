// Business Name Generator
let adjectives = {
    0: "crazy",
    1: "amazing",
    2: "fire"
}
// random_num = Math.floor(Math.random()*10) + 1   // prints from 0 to 10
// console.log(random_num)

// console.log(adjectives.charAt(0))


let shopname = {
    0: "Foods",
    1: "clothing",
    2: "company"
}

let another_word = {
    0: "pvt.ltd",
    1: "com",
    2: "org"
}


random_num_first = Math.floor(Math.random() * 3)    // gives random number from 0 to 2
random_first_word = adjectives[random_num_first]

random_num_shop = Math.floor(Math.random() * 3)     // gives random number from 0 to 2
random_shopname = shopname[random_num_shop]

random_num_third = Math.floor(Math.random() * 3)    // gives random number from 0 to 2
random_another_word = another_word[random_num_third]

console.log(`${random_first_word} ${random_shopname} ${random_another_word}`)