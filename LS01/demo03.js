//实参数量多于形参，隐藏的实参在arguements中
function f(a){
	console.log(a);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
f(1,2,3)
VM137:2 1
VM137:3 2
VM137:4 3


function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？
console.log("a:",a);//是否报错？

VM141:5 b: 3
VM141:6 Uncaught ReferenceError: a is not defined
    at <anonymous>:6:18
(anonymous) @ VM141:6
//相当于var a=3;b=3;a是局部变量，b是全局变量
window.b;
3
function foo(){
	var a,b=3;
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？
console.log("a:",a);//是否报错？
VM211:5 Uncaught ReferenceError: b is not defined
    at <anonymous>:5:18