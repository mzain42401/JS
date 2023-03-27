var hours = document.getElementById("hours")
var mint = document.getElementById("mint")
var sec = document.getElementById("sec")
var amPm = document.getElementById("amPm")




setInterval(function(){
    var newDate=new Date();
    hours.innerText=newDate.getHours();
    mint.innerText=newDate.getMinutes();
    sec.innerText=newDate.getSeconds();
    if(hours.innerText>12){
        hours.innerText-= 12
        amPm.innerHTML="pm"
        
    }
},1000)




