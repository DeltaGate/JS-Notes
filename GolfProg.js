var names = ["Hole In One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

function golf (par, strokes){
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par -2) {
        return names[1]
    } else if (strokes == par -1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par +1) {
        return names[4]
    } else if (strokes == par +2) {
        return names[5]
    } else if (strokes == par +3) {
        return names[6]
    } 

};

console.log(golf(5, 2));

// if else chain to create a golf scoring program.