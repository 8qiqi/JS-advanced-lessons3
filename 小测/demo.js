var a=[1,2,3];var b=a;b.shift();
console.log(a);//[2, 3] ab指向同一空间

console.log(typeof Math);//object

var a={x:1,y:2};var v={x:1,y:2};
console.log(a==b,a===b,a.x==b.x);//false false trues

(5>4)&&([]==[])//false 数组是对象
({})&&null//null  {}返回true,短路原则，返回右操作数，返回null

for(var i=1;i<=3;i++){
	setTimeout(function(){console.log(i);},0);
}//4 4 4  JS中无块作用域，变量共享问题

for(var i=1;i<=3;i++){
	(function(i){
		setTimeout(function(){console.log(i);},0)
	}(i))
}//1 2 3 使用立即执行表达式解决变量共享问题

var foo=1;
var ww=function(){console.log(foo);var foo=2;console.log(foo)}
console.log(ww());
//undefined 2  局部作用域会屏蔽外部变量；预解析

var tmp=10;
function foo(x){
	var tmp=3;
	return function(y){console.log(x+y+(++tmp));}
}//x tmp 和内部函数形成了闭包
var fee=foo(2);
fee(10);fee(10);fee(10);//16 17 18

var a=15+(3+"2");
console.log(a);//1532

function add(a,b){this(a,b);console.log(a+b);}
function sub(a,b){console.log(a-b);}
var arr=[3,1];
add.apply(sub,arr);// 2 4
//sub调用add函数，此时this为sub,执行this(a,b)，相当于执行sub(a,b),输出2
//执行console.log(a+b),输出4

function foo(){
	var i=0;
	return function(){console.log(++i);}
}
var a=foo();
var b=foo();
a();a();b();//1 2 3
//含有两个闭包

//检查包含三个连续的数字的正则表达式为\d{3}

var obj={};
var newobj=Object.create(obj);
console.log(newobj.__proto__===obj);//true
console.log(obj.__proto__===Object.prototype);//true

var x=1;
function foo(y){
	y=2;
}
foo(x);
console.log(x);//1 基本数据类型形参改变不影响实参

var x=[1];
function foo(y){
	y[0]=2;
}
foo(x);
console.log(x[0]);//2 引用数据类型形参改变影响实参