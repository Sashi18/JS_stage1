/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
};

//var size = Object.keys(student).length;
function leng(obj){
  var size = 0, key;
  for(key in obj){
    if(obj.hasOwnProperty(key))
      size++;
  }
  return size;
}

console.log(leng(student));