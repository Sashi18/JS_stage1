/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var n = "025468";
var arr = [];
var j = 0;
for(var i = 0;i < n.length;i++){
  if(arr !== undefined && arr.length > 0){
    if(arr[j-1]%2 == 0 && n[i]%2 == 0){
      arr[j] = "-";
      arr[j+1] = n[i];
      j += 2;
    }
    else{
      arr[j] = n[i];
      j++;
    }
  }
  else{
    arr[j] = n[i];
    j++;
  }
}

console.log(arr.join(""));