let first_num = Number(prompt("enter first number: "))
let operator = prompt("select an operator: ")
let second_num = Number(prompt("enter second number: "))

function add_num(a, b){
    return a + b
}

function sub_num(a, b){
    return a - b
}

let random_num = Math.floor(Math.random() * 100)
console.log("Random Number is: " + random_num)

if (random_num %10 == 0){
    if (operator === "+"){
        console.log("Result: " + sub_num(first_num, second_num))
    }
    else if(operator === "-"){
        console.log("Result: " + add_num(first_num, second_num))
    }
}
else{
    if(operator === "+"){
        console.log("Result: " + add_num(first_num, second_num))
    }
    else if(operator === "-"){
        console.log("Result: " + sub_num(first_num, second_num))
    }
}