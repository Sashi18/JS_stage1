var library = {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
};

var arr = [];

function myFunc(x){
	for(var key in x){
		arr[x[key]] = key;
	}
}

myFunc(library);

console.log(arr);
/*
Exception: SyntaxError: missing ] in index expression
@Scratchpad/12:11
*/