// Imagine you are building an online shopping application.
// Write an asynchronous function called placeOrder that simulates
// placing an order and returns a promise. The promise should 
// resolve with an order confirmation message after a random delay.


// let placeOrder = document.getElementById("order")
// placeOrder.addEventListener("click", ()=>{
//     let additem = prompt("please add your favourite item")
//     console.log(additem)
//     document.querySelector(".container").innerHTML = "Confirming your Order..."
//     alert("Order Confirmed Successfully")
// })



// lets create async function and await
async function placeOrder(){
    let orderFood = document.getElementById("order")

    orderFood.addEventListener("click", ()=>{
        let additem = prompt("please add your favourite item")
        console.log(additem)
        document.querySelector(".container").innerHTML = "Confirming your Order..."
        // alert("Order Confirmed Successfully")
        resultawait()
    })
}
placeOrder()

async function randomDelay(){
    return new Promise((resolve, reject)=>{
        let random = Math.floor(Math.random()*10 + 1)       // prints random numbers from 1 to 10
        setTimeout(() => {
            resolve(random)
            console.log(random)      // to see what is random number
            document.querySelector(".container").innerHTML = "Order Confirmed Successfully."
            alert("Order Confirmed Successfully")
        }, random * 1000);
    })   
}
// randomDelay()

// lets wait for the async function to complete by using await
async function resultawait(){
    let result = await randomDelay()
    console.log(result)
}
// // resultawait()