for (i = 100; i <= 200; i++) {
    
    var arr = [];
    
    if (i % 3 === 0 && i % 4 === 0) {
        arr.push('LoopyLighthouse');
    } else if (i % 3 === 0) {
        arr.push('Loopy');
    } else if (i % 4 === 0) {
        arr.push('Lighthouse');
    } else {
        arr.push(i);
    }
    
    arr.toString();
    
    var counter = 0;
    console.log(arr[counter]);
    counter++;
}



