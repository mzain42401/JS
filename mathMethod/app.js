let user=prompt()
let lengthOfuser=user.length;
// console.log(lengthOfuser);
for(var i=0; i < lengthOfuser; i++){
if( user.slice(i,i+2) === "  "){
    alert("don't use double space");
    break
}

}
