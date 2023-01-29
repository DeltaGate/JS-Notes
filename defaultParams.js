function increment(number, value = 1){
    return number + value;
};

console.log(increment (5,2));
console.log(increment(5));

// example of setting default parameters


function sum(...args) {
    return args.reduce((a,b) => a + b, 0);
};

console.log(sum(1,2,3,4,5))

// rest operator that can take as many arguments as we like and puts them into an array
// called args.



