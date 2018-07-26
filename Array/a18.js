/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var items = [1, 2, 3, 4, 5, 7, 8, 9];

function binary_Search(arr, val){
  var h = arr.length-1,
      l = 0;
  while(l < h){
    var m = Math.floor((l+h)/2);
    if(arr[m] == val)
      return m;
    else if(arr[m] > val){
      l = 0;
      h = m;
    }
    else if(arr[m] < val){
      l = m;
      h = arr.length-1;
    }
  }
  return -1;
}

console.log(binary_Search(items, 1)); 
console.log(binary_Search(items, 5));