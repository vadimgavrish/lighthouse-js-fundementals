var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;

while (counter < ingredients.length) {
    console.log(ingredients[counter]);
    counter++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var position = ingredients.length - 1;

for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[position]);
    position--;
}