/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
    o = ["th","st","nd","rd"];

for(var i = 0;i < color.length;i++){
  if((i+1)<o.length)
    console.log((i+1)+o[i+1]+" choice is "+color[i]);
  else
    console.log((i+1)+o[0]+" choice is "+color[i]);
}