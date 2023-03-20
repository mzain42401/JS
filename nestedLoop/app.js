// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {

//     for (var j = 0; j < lastNames.length; j++) {

//         fullNames.push(firstNames[i]+lastNames[j])
//     }
// }
// console.log(fullNames);


var text ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, aperiam. Quidem atque dolore optio eaque? Minus World War II nemo sequi ullam. Aliquid optio perferendis, et odit nobis ratione maiores nisi sit deserunt.";
var find=["World War II","ullam"]
for (var i = 0; i < text.length; i++) {
     for(var j=0;j<find.length;j++){
          if (text.slice(i, i + 12) === find[j] ) {
               text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
          }
          console.log("z");
     }
     }
    
    console.log(text);
    console.log(text);