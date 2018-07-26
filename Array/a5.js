/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myColor = ["Red", "Green", "White", "Black"];

var str = "";

for(var i = 0;i < myColor.length;i++){
  str += myColor[i];
  if(i != myColor.length - 1)
    str += ",";
}

console.log(str);
console.log(str);
str = "";
for(var i = 0;i < myColor.length;i++){
  str += myColor[i];
  if(i != myColor.length - 1)
    str += "+";
}

console.log(str);