console.log('This is Promises');


// lets create promise 
// so promise contains two arguments resolve and reject 
// we can create with single arguments also like resolve or reject if we want only that 
// lets try resolve
// const coffeePromise1 = new Promise((resolve) =>{
//     console.log("coffee making started")
//     setTimeout(()=>{
//         resolve("coffee is ready")
//     }, 2000)

// })

// coffeePromise1.then((resolve)=>{
//     console.log(resolve)
// })



// now lets try the reject using promises
// const coffeePromiseReject = new Promise((reject)=>{
//     console.log("coffee making started")
//     setTimeout(()=>{
//         reject("sorry out of milk")
//     }, 2000)
// })

// coffeePromiseReject.catch((reject)=>{
//     console.log(reject)
// })





// lets combine both with an example
// if the number is <0.5 then it shows the out of milk else coffee is ready 
// const coffeePromise = new Promise((resolve, reject)=>{
//     let num = Math.random()
//     if (num < 0.5){
//         console.log("coffee making started - rej")
//         setTimeout(()=>{
//             reject("sorry out of milk")
//         }, 1000)
//     }
//     else{
//         console.log("coffee making started - res")
//         setTimeout(()=>{
//             resolve("coffee is ready, Enjoy!")
//         }, 1000)
//     }
// }) 




// Consuming Promises: 
// it means what to do if something happens like resolve or error
// if success then it runs this means if a num is > 0.5 
// coffeePromise.then((success)=>{
//     console.log(success)
// })

// if it gets an error then it runs this if a num is < 0.5
// coffeePromise.catch((error)=>{
//     console.log(error)
// })  // o/p: error: Uncaught (in promise) sorry out of milk



// Without Error in console
// if we do like this it gives us an error it gives and error so we add this catch to the then
// coffeePromise.then((success)=>{
//     console.log(success)
// }).catch((error)=>{
//     console.log(error)
// })      // now we dont get any error 




// Alert using promises
// lets add an alert instead of printing this in a console
// it popup when showing that coffee is ready or not 


// with error in console 
// coffeePromise.then((succ)=>{
//     alert(succ)
// })
// coffeePromise.catch((err)=>{
//     alert(err)
// })


// without error in console
// coffeePromise.then((success)=>{
//     alert(success)
// }).catch((error)=>{
//     alert(error)
// })







// Chaining Promises
// means we can add another function to the .then() and we can add in similar way like a chaining process
// lets take previous example coffee
// coffeePromise.then((result1)=>{
//     alert(result1)
// }).then((result2)=>{
//     alert(result2)
// }).then((result3)=>{
//     alert(result3)
// }) // upto so on




// assigning multiple handlers to the same promise
// coffeePromise.then(handler1)
// coffeePromise.then(handler2)
// coffeePromise.then(handler3) // these all will run independently 






// promise APIs 
// .all():   it waits for all promises to settle and then it returns the result in a array 
// .all()  gives an array of promises if all the promises are resolved successfully
// if any promises are not resolved then it does not gives the promises in an array
const promise1 = new Promise((resolve, reject)=>{
    let num = Math.random()
    if (num < 0.5){
        // console.log("coffee making started - promise - 1 - rej")
        setTimeout(()=>{
            reject("sorry out of milk")
        }, 0)
    }
    else{
        console.log("coffee making started - promise - 1 - res")
        setTimeout(()=>{
            resolve("coffee is ready, Enjoy!")
        }, 0)
    }
}) 
const promise2 = new Promise((resolve, reject)=>{
    let num = Math.random()
    if (num < 0.5){
        // console.log("coffee making started - promise - 2 - rej")
        setTimeout(()=>{
            reject("sorry out of milk")
        }, 0)
    }
    else{
        console.log("coffee making started - promise - 2 - res")
        setTimeout(()=>{
            resolve("coffee is ready, Enjoy!")
        }, 0)
    }
}) 


// lets use .all() now lets store this in a variable promise3
let promise3 = Promise.all([promise1, promise2])
promise3.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})  // any one from these o/p: sorry out of milk   or  ['coffee is ready, Enjoy!', 'coffee is ready, Enjoy!']








// promises.allSettled()
// the promises are resolved or rejected what ever 
// it gives us in dictionary format with status and value keypairs
// if it is rejected it gives status and then inplace of value it gives reason 
// if it is resolved it gives status and the value keypairs
let promise4 = Promise.allSettled([promise1, promise2])
promise4.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})





// promise.race():  it returns the shortest time taken promise among all the promises
// example:  i have 5 links to download an image i click on all the links 
// and a link with good network will download first so in this case we can use promise.race() to return the shortest promise 
let promise5 = Promise.race([promise1, promise2])
promise5.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})      // o.p: shortest will be returned





// promise.any()  waits for the first promise to resolve and it returns the s output
// if all the promises are rejected it throws an aggregate error 


// promise.resolve(value):  if you want to make a resolved promise

// promise.reject(error):  if you want to make a reject promise 


