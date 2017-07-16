function loopyLighthouse(range, multiples, words) {
    
    for (i = range[0]; i <= range[1]; i++) {

        var arr = [];

        if (i % multiples[0] === 0 && i % multiples[1] === 0) {
            arr.push(words[0] + words[1]);    
        } else if (i % multiples[0] === 0) {
            arr.push(words[0]);
        } else if (i % multiples[1] === 0) {
            arr.push(words[1]);
        } else {
            arr.push(i);
        }

        arr.toString();

        var counter = 0;
        console.log(arr[counter]);
        counter++;
    }  
}