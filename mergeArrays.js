function merge (arrOne, arrTwo) {
   
    var arr = [];
   
    for (i = 0; i < arrOne.length; i++) {
        arr.push(arrOne[i]);
    }
    
    for (x = 0; x < arrTwo.length; x++) {
        arr.push(arrTwo[x]);
    }
    
    arr.sort();
    return arr;
}