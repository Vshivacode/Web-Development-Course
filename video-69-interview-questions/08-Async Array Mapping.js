// Write an asynchronous function that takes an array of numbers
//  and returns a new array of Promises where each number is 
//  multiplied by 2 after a delay of 500 milliseconds.



async function double(arr){
    console.log("numbers are multiplying by 2...")
    let result = []
    for (let num of arr) {
    await new Promise((resolve)=>{
            setTimeout(() => {
                    mul = num * 2
                    // console.log(mul) 
                    result.push(mul)
                    // result += result 
                    console.log(result)
                    resolve()
                }, 500);
            })
        }
}
    

async function waitforDouble(){
    let arr_list = [1,2,3,4,5,6]
    await double(arr_list)
}

waitforDouble()