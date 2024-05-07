

// lets create an element that stores this array elements
let addItem = async (item_parameter)=>{
    await randomDelay()
    let div_block = document.createElement("div")
    div_block.innerHTML = item_parameter
    document.body.append(div_block)
}

// to getdelay like each item to be executed after some seconds we create another function 
function randomDelay(){
    // lets give random seconds
    return new Promise((resolve, reject)=>{
        let timeout = Math.floor(Math.random()*6)+1
        setTimeout(()=>{
            resolve()
        }, 1000 * timeout)
    })
}



async function main(){

    // document.querySelectorAll("p")[0]
    let t = setInterval(()=>{
        let last = document.body.getElementsByTagName("div")
        last = last[last.length-1]
        if(last && last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        } 
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 200)

    let text = [
        "Initializing Hacking",
        "Reading Files",
        "Password Files Detected",
        "Sending all files and passwords to server",
        "Cleaning up"
    ]

    
    // this will get all the items from array 
    for (const item of text) {
        await addItem(item)   // calling the function with the items from for loop
    }
    await randomDelay()
    clearInterval(t)
    
}

main()





// get random numbers between two numbers 
function get_random_num_bw_2_num(min, max){
    let rand = Math.floor(Math.random()*(max-min))+min
    console.log(rand)
}
get_random_num_bw_2_num(5,10)   // it will return between two numbers




// async function terminal(selector, index_value){
//     let execution_count = 0

//     // document.querySelectorAll("p")[0]
//     let a = await setInterval(()=>{
//         document.querySelectorAll(selector)[index_value].innerHTML = document.querySelectorAll(selector)[index_value].innerHTML + "."
//         execution_count++
//         if (execution_count === no_of_times){
//             clearInterval(a)
//         }
//     }, 1000)
//     await new Promise(resolve => setTimeout(resolve, (no_of_times + 1) * 1000));
//     // console.log(a)
   
// }

// async function terminal_result(){
//     await terminal("p", 0)
//     await terminal("p", 1)
//     await terminal("p", 2)
// }

// terminal_result()