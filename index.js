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
 }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] == "gouda" || foods[i] == "camembert" || foods[i] == "swiss") {
      return foods[i];
    }
  }
  return "no cheese!";
}

function wordsWithB(words) {
  for (var i =0; i < words.length; i++) {
    if (words[i].startsWith("b")) {
      var array = [];
      array.push(words[i])
  }
  return array;
  }
}
console.log(wordsWithB(["bob", "brandon", "james"]))





