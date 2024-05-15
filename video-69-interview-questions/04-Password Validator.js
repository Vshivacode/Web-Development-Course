// You are building a password validation feature. Create a function
//  that checks if a given password meets the following criteria: 
//  at least 8 characters long, contains both uppercase and lowercase 
//  letters, and includes at least one digit.


function passwordValidator(password){
    symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "/", "<", ">", "?", ",", ".", ";", ":"]


    if (password.length < 8){
        return "please enter minimum 8 characters "
    }
    else {
        islowercase = false
        isuppercase = false
        isnumber = false
        issymbol = false
        for (let pw of password){
            if (pw >= 'a' && pw <= 'z'){
                islowercase = true
            }
            else if (pw >= 'A' && pw <= 'Z'){
                isuppercase = true 
            }
            else if (symbols.includes(pw)){
                issymbol = true
            }
            else if (pw >= '0' && pw <= '9'){
                isnumber = true 
            }
        }

        if (!islowercase){
            return "please add atleast one Lowercase Alphabet"
        }
        if(!isuppercase){
            return "please add atleast one Uppercase Alphabet"
        }
        if(!issymbol){
            return "please add atleast one symbols or special character"
        }
        if(!isnumber){
            return "please add atleast one number"
        }

        if (islowercase && isuppercase && issymbol && isnumber){
            return password
        }
    }
}

let user = passwordValidator("Shiva@prasad1")
console.log(user)