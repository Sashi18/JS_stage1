/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr = [];

function add(a, key, val){
  arr[key] = val;
}

function display(a){
  console.log(a);
}

add(arr, 0, "b");
add(arr, 1, "b");
add(arr, 2, 5);

display(arr);