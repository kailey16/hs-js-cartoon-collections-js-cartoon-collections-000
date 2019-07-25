function dwarfRollCall(dwarves) {
  var string = "";
  for (var i = 0; i < dwarves.length; i++) {
    string = string + `${i + 1}. ${dwarves[i]} `;
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return array;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
    else { return false }
 }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" && "gouda" && "camembert") {
     return foods[i]
    } else {
     return "no cheese!"
    }
  }
}
