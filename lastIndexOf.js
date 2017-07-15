function lastIndexOf (arr, num) {
    
  if (arr.length === 0) {
      return -1;    
    }
    
  var index = 0;
  var timesFound = 0;
    
  for (i = 0; i < arr.length; i++) {   
         if (arr[i] == num) {
             index = i;
             timesFound++;
         }
    }

    if (timesFound === 0) {
        return -1;
    }
    
    return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);