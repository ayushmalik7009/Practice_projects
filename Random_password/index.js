const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";

const symbolset = "~!@$%^&*()_+/";

const passBox = document.getElementById("passBox")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

// console.log("passbox", passBox)
// console.log("totalChar", totalChar)
// console.log("upperInput", upperInput)
// console.log("lowerInput", lowerInput)
// console.log("numberInput", numberInput)
// console.log("symbolInput", symbolInput)


const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)]; 
}


// console.log(Math.random()* lowerset.length)
// var password=""; 
const generatePassword =(password=" ")=>{
    
    if (upperInput.checked) {
        password += getRandomData(upperset)
        console.log(getRandomData(upperset));
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerset)
        console.log(getRandomData(lowerset));
    }
    if (numberInput.checked) {
        password += getRandomData(numberset)
        console.log(getRandomData(numberset));
    }
    if (symbolInput.checked) {
        password += getRandomData( symbolset)
        console.log(getRandomData(symbolset));
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value+1);
    // passBox.innerText = password;   

}

// generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
        console.log("click")
    }
    
    
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}