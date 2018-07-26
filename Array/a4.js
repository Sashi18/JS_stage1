/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function last(arr, n){
  var a = [];
  var l = arr.length;
  if(n === undefined)
    return arr[l-1];
  if(l < n)
    return arr;
  if(n <= 0)
    return a;
  for(var i = l-n;i < l;i++){
    a[i-(l-n)] = arr[i];
  }
  return a;
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));