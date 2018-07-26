/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr = [1, 2, 3, 4, 5];
var l = arr.length;

function fun(arr, l){
  var sum  = 0;
  for(var i = 0;i < l;i++){
    sum += arr[i]*arr[i];
  }
  return sum
}

console.log(fun(arr, l));