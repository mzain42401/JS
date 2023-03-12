let num = +prompt("enter your number");
// console.log(typeof(num));
// alert("check your number either is Odd or Even");
// console.log( );
if (num % 2 === 0 ) {
    document.write("Your number " + num + " is an even number .")
}

else if (num % 2 === 1 ) { document.write("Your number " + num + " is an Odd number .") }
else { alert("your number is not right! please enter again") }
