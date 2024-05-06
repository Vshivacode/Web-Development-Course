function sample(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("i am resolved")
        }, 2000)
    })
}


// console.log("started")


// lets call the sample function
// as we know js is asynchronous it will be executed at last
// so it will show after "ending"
// sample().then((result)=>{
//     console.log(result)
// })

// console.log("ending")






// so if we want javascript to wait until it completes that part
// we can use the async/await 
// Async/Await is used to control the operations of javascript and executes in a sequential manner


// so lets use async/await 
// first we need to create async function created using keyword "async"
async function usingAsync(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("i am async function running...")
        }, 2000)
    })
}


//to use await we need to create async function 
// and inside that function we use await and
//  we use the async function which we want to execute 
async function awaitfunction(){
    console.log("async operation started")

    let awaitresult = await usingAsync()
    
    console.log(awaitresult)    // o/p: it runs this function and next it will execute remaining 

    console.log("async operation ended")

}
awaitfunction()
