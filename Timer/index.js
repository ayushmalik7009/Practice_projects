
const btn = document.getElementById('start-btn')
const bt = document.getElementById('stop-btn')
const display = document.getElementById('countdown-display')

const audio  = new Audio('1.mp3');




const code = function(){
    const targetDateInput = document.getElementById('target-date')
    const targetDate = new Date(targetDateInput.value).getTime();

    const currentDate = new Date().getTime();  // Current date and time
    
    // Calculate the time difference in milliseconds
    const timeDifference = (targetDate - currentDate)/1000;
    
    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference /3600 /24);
    const hourDifference = Math.floor(timeDifference /3600) %24;
    const minDifference = Math.floor(timeDifference /60) %60;
    const SecDifference = Math.floor(timeDifference) %60;

    if(hourDifference==0 && daysDifference==0 && minDifference==0 && SecDifference==0){
        audio.play();
        clearInterval(func)
    }
    
display.textContent=`${daysDifference}d, ${hourDifference}h : ${minDifference}m : ${SecDifference}`
}


let func;

btn.addEventListener('click',function(){
    console.log("start")
     func = setInterval(code,1000);
});
bt.addEventListener('click',function(){
    clearInterval(func)
    console.log("stop")
    audio.pause();
 })