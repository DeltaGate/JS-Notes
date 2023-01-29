var ourArray = ["Hello", "World", "Peas"]

console.log(ourArray);

console.log(ourArray[1]);

// creating an array then [printing it or selecting one part to print]

var newArray = [["The Universe", 42], ["Everything", 101010]];

console.log(newArray[0][1] + " " + newArray[1][1])

// multiple arrays inside an array and choosing from them for data.

var numArray = [2, 3, 6, 8];

numArray[1] = 4;

console.log(numArray);

// changing an established number in an array

var pushArray = [["Xenomorph", "Human", "Predator"]];

pushArray.push (["Jaffa", "Replicators", "Goa'uld"]);

console.log(pushArray);

// adding an array inside another array after its been established

var popArray = pushArray.pop([0])

console.log(popArray);

// removing an array from within an array of an established array (yes this is getting dumb)      technically this selects the last array in the array of arrays and then saves
// to the array over the current array.

pushArray = [["Xenomorph", "Human", "Predator"]];

pushArray.push (["Jaffa", "Replicators", "Goa'uld"]);

console.log(pushArray);

var pop2Array = pushArray.shift();

console.log(pop2Array);

// selecting the first array from an array of arrays and pasting that as current array.

var unshiftArr = ["world"];

unshiftArr.unshift("Hello");

console.log(unshiftArr);

//unshift adds to the front of an array where as push adds to the end

var shoppingList = [['Ceral', 3], ['Bacon', 1], ['Toliet Paper', 6], ['Susages', 2]]

// an array of arrays ( IDK why the tutorial did this, they didnt do anything with it)

function arrayDiff(a, b) {
     return a.filter(e => !b.includes(e));
}


  console.log(arrayDiff([1, 2], [1]));

  // filter whats in array b out of array a