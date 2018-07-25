var library = {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
};

var arr = [];

function myFunc(x){
	for(var key in x){
		arr[key] = x[key];
	}
}

myFunc(library);

console.log(arr);