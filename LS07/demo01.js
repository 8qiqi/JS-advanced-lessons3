//函数定义与调用

//3种定义方式
//1)函数声明形式（有函数名）
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//2）函数表达式形式（可以为匿名函数）
var max=function foo(a,b){
    return a>b?a:b;
}
max(2,3);
//3)Function构造函数实例化
var max=new Function('a','b','return a>b?a:b');
max(2,3);

//4种调用方式（注意调用函数的主体）
//1)作为函数直接调用（全局对象或undefined）
function test1() {
	//'use strict'
    console.log("this is",this);
}
test1();//undefined or window

//存在嵌套？
//例1
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window
//例2
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x)
		}
		foo();
	}
}
obj.test();//45 嵌到函数里面，this不指向对象了
//例3
var o={
	m:function(){
		var self = this;     //将this的值保存至一个变量中
		console.log(this===o);//true
		f();
		function f(){
			console.log(this===o);//false,this的值为window或者undefined
			console.log(self===o);//true,self指外部函数的this值
		}
	}
};
//总结：this是一个关键字，不是变量，也不是属性名。
//js不允许给this赋值。和变量不同，关键字this没有作用域的限制，
//嵌套的函数不会从调用它的函数中继承this。如果嵌套函数
//作为方法调用，this的值指向调用它的对象。若作为嵌套函数调用
//其this值不是全局对象window(非严格模式下)就是undefined(严格模式)
//若想访问这个外部函数的this值，需要将this值保存在一个变量里，
//这个变量和内部函数都在同一个作用域内

//2)作为方法调用（this为调用此方法的对象）
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//23 {name: "obj", x: 23, test: ƒ}
//动态添加方法
var name='qiqi';
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();//Hi，i'm obj
sayHi();//Hi，i'm qiqi
/*
//思考如下代码 详情参见高阶函数章节
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
*/

//3)通过call()和apply()间接调用（移花接木/吸星大法）
//this为函数对象的call/apply方法的首个参数
objA = {name:"AA"};
objB = {name:"BB"};
objC = {name:"CC"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB,objC);//BB

//4)作为构造函数调用（this为实例化出来的对象）
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack



//补充：
var arr=[1,2,3,4,5];
arr instanceof Array;
true
arr.x=6;
arr;
(5) [1, 2, 3, 4, 5, x: 6]
arr instanceof Array;
true

//数组里数值大小在0~2的23次方之内，作为值存储，之外作为属性存储
var arr=[];
arr[0]=3;
arr[-1]=2;


