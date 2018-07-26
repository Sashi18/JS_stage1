/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr = [1, 2, 3, 4, 5],
    sum = 0, 
    prod = 1;

for(var i = 0;i < arr.length;i++){
  sum += arr[i];
  prod *= arr[i];
}

console.log("Sum: "+sum+"\nProduct: "+prod);

