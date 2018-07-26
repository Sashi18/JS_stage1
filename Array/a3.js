/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function myFunc(arr, n){
  var a = [];
  if(n === undefined)
    return arr[0];
  var l = arr.length;
  if(l < n)
    return arr;
  if(n <= 0)
    return a;
  for(var i = 0;i < n;i++){
    a[i] = arr[i];
  }
  return a;
}

console.log(myFunc([7, 9, 0, -2])); 
console.log(myFunc([],3));
console.log(myFunc([7, 9, 0, -2],3));
console.log(myFunc([7, 9, 0, -2],6));
console.log(myFunc([7, 9, 0, -2],-3));