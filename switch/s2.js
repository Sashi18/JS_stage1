/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var text;
  var fruits = "Apple";

  switch(fruits) {
    case "Banana":
      text = "Banana is good!";
      break;
    case "Orange":
      text = "I am not a fan of orange.";
      break;
    case "Apple":
      text = "How you like them apples?";
      break;
    default:
      text = "I have never heard of that fruit.";
  }
console.log(text);
/*
Exception: ReferenceError: Apple is not defined
@Scratchpad/18:11:7
*/