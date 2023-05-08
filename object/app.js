var student = {
    name: "zain",
    age: 19,
    roll: 136,
    className: "matric",
    color: "white",
     disctMon : [1, 2, 3, 4, 5],
    price: 100,
    anuualPrice:function disct(distPercent) {

        var date = new Date()
        var mon = date.getMonth()
        for (var i = 0; i < this.disctMon.length; i++) {
            if (mon === this.disctMon[i]) {
                var newPrice = student.price * distPercent
                break
            }
        }
        return newPrice
    
    }
}
// var key = "color"
// console.log(student[key]);

var price=student.anuualPrice(.9)
console.log(student);
console.log(price);
