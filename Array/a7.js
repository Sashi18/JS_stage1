/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function swap(arr, x, y){
  var t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
}

function sort(arr){
  var l = arr.length;
  for(var i = 0;i < l - 1;i++){
    for(var j = 0;j < l - i - 1;j++){
      if(arr[j] > arr[j+1])
        swap(arr, j , j + 1);
    }
  }
  return arr;
}

console.log(sort(arr1))