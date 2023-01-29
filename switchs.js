function caseInSwitch(val){
    var awnser = ""
    switch(val){
        case 1: awnser = "Alpha"; break;
        case 2: awnser = "Beta"; break;
        case 3: awnser = "Gamma"; break;
        case 4: awnser = "Delta"; break;
        default: awnser = "Not Acceptable Input";
    }
    return awnser;

}

console.log(caseInSwitch(3));

// example of switch using numbers one to four to select different awnsers insted of else ifs
// note without break statements at the end cases will wrap around into each other, not wanted.
// added a default which acts as an else to possible cases.


function sizes(val){
    var awnser = ""
    switch(val){
        case 1:
        case 2:
        case 3:
            awnser = "low"; break;
        case 4:
        case 5:
        case 6:
            awnser = "high"; break;
        default: awnser = "Not Acceptable Input";
    };
    return awnser;
}

console.log(sizes(7));

// switch where multiple cases give the same awnser, just remove break and statement between them
// so it can wrap around into the next.
