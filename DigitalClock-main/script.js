// Get elements for hours, minutes, and seconds
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Update time every second
setInterval(()=>{

    let currentTime = new Date(); // Get current time

     // Set time with leading 0 if less than 10
    hrs.innerHTML = (currentTime.getHours()<10?"0":"")  + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
