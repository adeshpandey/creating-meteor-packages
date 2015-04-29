// Write your package code here!
if (typeof HelloWorld === 'undefined') {
  HelloWorld = {};
}

HelloWorld.sayHello = function(name){
	return "Hello "+name;
};