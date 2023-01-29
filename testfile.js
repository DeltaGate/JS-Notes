function betterThanAverage(classPoints, yourPoints) {
    return yourPoints <= classPoints.reduce((a, b) => a + b, 0) / classPoints.length+1;
  };

console.log(betterThanAverage([3,2], 5));