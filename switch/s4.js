/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var text;
var favCar = "BMW";
switch(favCar){
  case "BMW":
    text = "German Car";
    break;
  case "Ford":
    text = "American Car";
    break;
  case "Peugeot":
    text = "French Car";
    break;
  default:
    text = "Unknown car name.";
}
console.log(text);