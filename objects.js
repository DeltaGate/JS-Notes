var ourDog = {
    "Name" : "Oli",
    "Legs" : 4,
    "Tails": 1,
    "Friends": ["Everything!"]
};

// this counts as an object, a varible containing multiple properties and data pertaining to them.

var testObj = {
    "hat": "Top Hat",
    "shirt": "Polo",
    "shoes": "Slippers"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// using obj to assign values to other varibles


const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  

  const entreeValue = testObj2["an entree"];   
  const drinkValue = testObj2["the drink"];    

  // when obj propertys have a space you need to use square brackets to select them this above.

  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.name = "Happy Camper";

  console.log(ourDog.name);

  // declaring an object then manipluating its data.

  ourDog.bark = "Bow Wow";

  console.log(ourDog.bark);

  // adding a property to an object and then calling it

  delete ourDog.bark;

  // deleting property from obj

  ourDog['bark'] = 'woof'

  console.log(ourDog.bark);

  // another way to add a property to a obj

  var myObj = {
    'goku': 'kahmamaha',
    'Krillian': 'Distructo Disk',
    'vegita': "Bitch i'm Adorable"
  };


  
  function checkObject(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp]
    } 
    return 'Not Found';

  };

  console.log(checkObject('gok'));

  // checking if an object contains an property and returning based on that


  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = undefined;

  gloveBoxContents = myStorage.car.inside["glove box"];

  console.log(gloveBoxContents);

  gloveBoxContents = myStorage.car.outside.trunk;

  console.log(gloveBoxContents);

  // reading from nested objects.


  