/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a = prompt("Enter a word");

var l = a.length;
var arr = [];

function myFunction(x){
  for(var i = 0;i < l;i++){
    for(var j = i+1;j <= l;j++){
      arr.push(x.substring(i, j));  
    }
  }
}
myFunction(a);
console.log(arr);
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/8:13
*/
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/8:13
*/
