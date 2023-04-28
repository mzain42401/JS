var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var mydate = new Date();
var myday = mydate.getDay();
console.log(myday);
switch (myday) {
    case 0:
        console.log(dayNames[myday]); 

        break;
    case 1:
       console.log(dayNames[myday]); 
        break;
    case 2:
        console.log(dayNames[myday]); 

        break;
    case 3:
        console.log(dayNames[myday]); 

        break;
    case 4:
        console.log(dayNames[myday]); 

        break;
    case 5:
        console.log(dayNames[myday]); 

        break;
    case 6:
        console.log(dayNames[myday]); 

        break;
    default: alert("wrong")
}