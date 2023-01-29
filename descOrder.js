function descendingOrder(n){
    n = n.toString().split('').sort().reverse().join("")
    return parseInt(n);
  };

  console.log(descendingOrder(151));



