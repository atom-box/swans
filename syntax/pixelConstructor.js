//  This file is an example of
// 1) constructor  2) 2-d array of pixel objects 3) prototype for the method
// Reason: just kind of making it up as I go.  5/21/2019




let pixel = function(r, g, b){
	// allowed vals 0-255
	this.red = r;
	this.green = g;
	this.blue = b;
};

// todo 1) write the math 2) figure out hexadecimal syntax in JS
pixel.prototype.shortify = function(){
	// returns a three digit HEX(!) number for color
	// r, g, b -> #2
	return 0xf4e;
}

let WIDTH = 680, HEIGHT = 420;


/**
* @parameters: width and height of desired image
*	@returns: array of arrays of PIXEL objects
*
*/
let init = function(w, h){
	let img = [[{}]];
	for(; h > -1; h--){
		for(; w > -1; w--){
			console.log(`-${h}--${w}-`);
		}
	}
}


init(22, 45);


