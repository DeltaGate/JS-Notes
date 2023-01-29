function Reuseable(){
 console.log('hello world')
}

Reuseable();

// created a basic function and the call for said function.


function functionArgs(a, b){
    console.log(a+b);
}

functionArgs(10, 5);

// function calls an addtion and prints to console.

var test = 5;

function processArg(num){
    return (num + 3) * 5;
}

test = processArg(test);

console.log(test);

// returning value up to a global varible 


function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after: " + JSON.stringify(testArr));

// creating a que system of using an array to contain numbers then 
// pushing a new number into que, returning a shift which steals
// the first number off the que thus keeping the que size consistant


function testEqual(val){
    return val == 12
}

console.log(testEqual(12));

// equality check using the comparison opporator == and what I learnt
// from code wars
// note you can use === to not allow type conversions, strick equality


function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes"
    }
    return "No";
}

console.log(testLogicalAnd(32));

//And check using && (this means and) to check if a value is between two brackets
// i fucking love this

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside"
    }
    return "Inside"
}

console.log(testLogicalOr(13));

// Or check (|| is or in js), using or to find out if a passed number
// can be found in the range of 10 to 20
// I also fucking love this

