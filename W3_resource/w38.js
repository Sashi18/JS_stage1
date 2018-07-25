/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var r = prompt("Enter Radius");


function area(x){
  return (PI*x*x*10)/10;
}

function peri(x){
  return (2*PI*x*10)/10;
}

console.log("Area: "+area(r)+"\nPerimeter: "+peri(r));
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/10:21
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/10:21
*/
/*
Exception: SyntaxError: redeclaration of const PI
@Scratchpad/10:1:1
*/