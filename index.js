function theBeatlesPlay(musicians, instruments) {
  var musiciansArray = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}