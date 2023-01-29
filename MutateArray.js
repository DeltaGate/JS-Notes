const s = [5, 7, 2];

function editInPlace() {

    //s = [2, 5, 7]; not possible as const

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    return s;

}

console.log(editInPlace());

// an example of how to mutate an array in order to get around
// type of const that would normally not allow this change

// you can use Object.freeze(s) to stop this mutation.
// makes it read only



