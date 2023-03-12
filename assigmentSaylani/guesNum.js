let randomNum = Math.round(Math.random() * 10);
let userNum = +prompt("Guse the num 0-10")
if (randomNum === userNum) {
    alert("Matched")
}
else {
    alert("you fail the gused number is " + randomNum)
}