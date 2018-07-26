/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr = [];

for(var i = 0;i < arr1.length;i++){
  arr[arr1[i]] = (arr[arr1[i]] === undefined)?1:(arr[arr1[i]]+1);
}

var ind, val = 0;

for(key in arr){
  if(arr[key] > val){
    ind = key;
    val = arr[key];
  }
}

console.log(ind+"("+val+" times)");