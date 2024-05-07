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
// awaitfunction()








// fetch API
// is used to get , post requests http requests from networks with "fetch()"
// it is promise based API 
// we use a sample url to get some json data 
// and fetch api is used in asynchronous function and with await we use 

async function usingfetch(){
    console.log("fetching data...")


    // if we use without await it gives the o/p: promise()
    // because we are not waiting for the promise to settle 
    // "settle" means resolve or reject
    // resolve means it completed successfully 
    // reject means it has not completed successfully or error 
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x)  // o/p: Promise {<pending>}


    // to wait for the promise to settle we use await and fetch is used in async func so we use await 
    let y = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(y)  //o/p: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}
    
    
    // lets print this in a json() format with await
    let json_data = await y.json()  
    console.log(json_data)  // o/p: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}
// usingfetch()








// lets use the post method with fetch api
async function fetchwithpost(){
    let a = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: "POST",
        body: JSON.stringify({  // "JSON.stringify" is used to convert js value to a json string 
            name: "sample",
            roll: 20,
            userId: 1,
        }),

        // this is used we are saying that it is in json format and with uft-8 characters 
        // without this it does not understand 
        // "headers" is an http requests
        // "content-type" helps the server to understand how to parse the incoming data 
        // "application/json" indicates that the content is in request body is in json format
        // "UTF-8" is a character encoding that supports a wide range of characters 
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
    })
    let result = await a.json()
    console.log(result)     // o/p: {name: 'sample', roll: 20, userId: 1, id: 101}
}
fetchwithpost()