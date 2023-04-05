// ---------------------wellcome for children


let userAge=+prompt("enter your age")
if(userAge<=10){
    console.log("wellcome");
}
else{
    console.log("sorry your age is more than requirment");

}


// --------------------Table


let userNum=+prompt("which table you want")
for(let i=1;i<=10;i++){
    console.log(userNum + " X " + i + " = " + userNum*i);
}