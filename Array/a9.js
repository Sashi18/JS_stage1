/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var str = 'The Quick Brown Fox';

for(var i = 0;i < str.length;i++){
  var c = str.charCodeAt(i);
  console.log(c);
  if(c >= 65 && c <= 90)
    str = str.replace(String.fromCharCode(c), String.fromCharCode(c+32));
  else if(c >= 90 && c <= 122)
    str = str.replace(String.fromCharCode(c), String.fromCharCode(c-32));
}

console.log(str);