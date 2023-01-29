var test = "I am a \"doubled qouted string\" inside double quotes";

console.log(test);

// escape clause added to string to stop quotes from flipping out
// you can achieve the same by using '' or `` insted on the outside

var test2 = ' but i dont want to';

var test3 = test + test2;

console.log(test3);

// concating strings

var fname = "Eren";

var nameLength = fname.length;

console.log(nameLength);

// logging name lengths

var secondLetter = fname[1];

console.log(secondLetter);

// getting the second letter of a stored string a saving it.