function range(start, end, step) {
    if (isNaN(start + end + step)) {
        console.log('not a number');
        return [];

    } else if (step < 1) {
        console.log('incorrect step value');
        return [];

    } else if (start > end) {
        console.log('incorrect start and end values');
        return [];

    } else {
        var arr = [];
        arr.push(start);

        for (;start < end;) {
            start = start + step;
            
            if (start > end) {
                arr.push(end);
                return arr;
            }
            
            arr.push(start);
            
        }
        
        return arr;
    }
}

console.log(range(10, 33, 5));