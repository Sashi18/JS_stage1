/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


function vol(r, h){
  return (PI*r*r*h).toFixed(4);
}

console.log(vol(3.33, 4.5666));
/*
Exception: SyntaxError: redeclaration of const PI
@Scratchpad/6:1:1
*/