var hours=document.getElementById("hours")
var mintue=document.getElementById("mint")
var second=document.getElementById("sec")
var milisec=document.getElementById("milisec")


var mili=0;
var sec=0;
var mint=0;
var hr=0;

const start=()=>{
setInterval(()=>{
    mili++
    milisec.innerText=mili
    if(mili>=100){
        sec++

    }
},10)

}
