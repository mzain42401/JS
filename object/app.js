// function Student (name,roll,height,weigth) {
// this.name=name;
// this.roll=roll;
// this.height=height;
// this.weigth=weigth
// }
// var zain=new Student("zain",9022,5.7,"67kg")
// console.log(zain);

var likerName=prompt("enter your name")
var likerGender=prompt("enter your gender")

function ContructuorFunction(name ,  gender){
    this.Name=name;
    this.Gender=gender
    this.liked=function(user){
        
            console.log(this.Name + " liked " + user);
        
    }
    
    
    }
    



    
var first=new ContructuorFunction(likerName ,likerGender)
console.log(first);
function clicked(name){
if(name==="Aliza" && likerGender==="male"){
    alert("not allowed")
}
else{
    first.liked(name)
}
}






















// var obj={
//     name:"ZAIN",
//     roll:930,
//     class:"matric"
// }

// console.log(obj);
// delete obj.class
// console.log(obj);
// obj.roll=1222
// console.log(obj);













// var student = {
//     name: "zain",
//     age: 19,
//     roll: 136,
//     className: "matric",
//     color: "white",
//      disctMon : [1, 2, 3, 4, 5],
//     price: 100,
//     anuualPrice:function disct(distPercent) {

//         var date = new Date()
//         var mon = date.getMonth()
//         for (var i = 0; i < this.disctMon.length; i++) {
//             if (mon === this.disctMon[i]) {
//                 var newPrice = student.price * distPercent
//                 break
//             }
//         }
//         return newPrice
    
//     }
// }
// var key = "color"
// console.log(student[key]);

// var price=student.anuualPrice(.9)
// console.log(student);
// console.log(price);
