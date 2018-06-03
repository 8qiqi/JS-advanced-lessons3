console.log();

console.assert();//断言。正确的话不会输出，错误的话会输出
console.assert(3>2);//无输出
console.assert(3<2);//false
console.assert(3<2,"有问题输出");//Assertion failed: 有问题输出

console.error();//断定是一个错误信息，红色形式显示
console.warn();//警告信息，黄色形式显示




try{
	try{
		throw "oops"
	}
	catch(ex){
		console.log("inner",ex);
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}