var x="Hello World";

var message="in global";
console.log("global: message=" + message);

function a (){
	var message = "inside a";
	console.log("a: message = " + message);
     function b (){
 	console.log("b: message = "+ message);
 	b();
 }
}
 


 a();