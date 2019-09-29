var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  var array =[]
  for (var i=0;i<dwarves.length;i++){
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("")
}

function summonCaptainPlanet(planeteerCalls){
return planeteerCalls.map(a=>a.toUpperCase()+"!")
}


function longPlaneteerCalls(words) {
 for(var i=0;i<words.length;i++){
   if (words[i].length>4){
     return true
   }
 }
 return false
}
var words = ["wind" , "fire"]
longPlaneteerCalls(words)

function findTheCheese (foods) {
var cheese = ["cambert" , "cheddar" , "gouda"];
for(var i = 0; i < foods.length; i++) {
  var cheeseIdx = cheese.indexOf(foods[i]);
  if(cheeseIdx !== -1) {
    return foods[i];
  }
}
return "no cheese!";
}

findTheCheese(["banana" , "cheddar" , "sock" , "gouda"]);
