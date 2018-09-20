const func1 = function(a,b,c){
	return a + b * c;
};

const func2 = function() {
	return "Hello World";
};

const func3 = function(a,b) {
	console.log(a + ' ' + b);
};

const func4 = function(a,b,c) {
	if(a.length >= b.length && a.length >= c.length)
		return a;
	else if(b.length >= a.length && b.length >= c.length)
		return b;
	else
		return c;

	//actually I could have done this and have the same effect
	/*
		if(a.length >= b.length && a.length >= c.length)
			return a;
	    
	    if(b.length >= a.length && b.length >= c.length)
			return b;

		return c;
	*/
};
const func5 = function(a,b){
	if(a == b)
		return 0;

	if(a > b)
		return 1;

	return -1;
};

const multiply = function(a,b) {
	return a * b;
};

const divide = function(a,b){
	return a / b;
};

const triangleArea = function(base, height){
	return divide(multiply(base,height),2);
};

const numLength = function(number) {
	return (number+"").length;
};

const func6 = function(st1, st2, num) {
	const st = st1 + st2;

	return (st.length > num) ? 1 : -1;
};

const runStuff = function(a,b,st){
	if(st === "rectangle")
		return a * b;
	if(st === "triangle")
		return triangleArea(a,b);
	return -1;
};


const ans = runStuff(5,6,"triangle");
alert(ans);