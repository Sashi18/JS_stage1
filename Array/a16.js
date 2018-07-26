/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function leap(y1, y2){
  for(var i = y1;i <= y2;i++){
    if(i%400 == 0)
      console.log(i+"\n");
    else if(i%100 == 0)
      continue;
    else if(i%4 == 0)
      console.log(i+"\n");
  }
}

leap(1900, 2000);