/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var text = "";
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;

for (var i = 0;i < food.length;i++) {
    text += "I love " + food[i] + "\n";
}
console.log(text);