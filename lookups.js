

function alphaLookup(val){
    var result = '';


var lookUp = {
    'alpha' : 'Adams',
    'bravo' : 'Bostin',
    'Charlie': 'Chicargo',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
};

result = lookUp[val];
return result;

};

console.log(alphaLookup('bravo'));

// lookup function that uses a object to select an outcome for the data based on input rather than a switch.