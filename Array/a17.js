/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr = [1, 2, 3, 4, 5, 7, 8, 9];
var d = new Date();

for(var i = 0;i < arr.length;i++){
  var j = Math.floor(d.getSeconds())%(i+1);
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);