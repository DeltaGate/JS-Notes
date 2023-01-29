function arrayDiff(a, b) {
  
    for(var i = a.length - 1; i >= 0; i--){
        console.log(i);
      for(var x = b.length - 1; x >= 0; x--){
        console.log(x);
        if(a[i] == b[x]){
          console.log('detect')
          a.splice(i, 1);
        }
      };
    };

    return a;
    
  };


  console.log(arrayDiff([1, 2], [1]));