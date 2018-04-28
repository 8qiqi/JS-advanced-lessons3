//解析器默认把可枚举的属性写在前面
var a={};
a.__proto__===Object.prototype;//true
var b=new Object();
b.__proto__===Object.prototype;//true
//直接创建一个空对象，和create方法创建一个空对象的原型是一样的
b.__proto__.__proto__===null;//true


var obj={
	a:12,
	b:34,
	c:34
};
var obj2=Object.create(obj);
obj2.d=456;
console.log(obj2.__proto__===obj);
//通过create方法创建的对象的原型，是create括号里面的对象

//直接创建对象的原型是Object.prototype


//原型是共享的
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=2;
obj2.__proto__.x=5;
obj2.x;//5
obj3.x;//5

//in 可以访问当前对象的属性和原型链上的属性，包括不可枚举类型

function Person(name,age){
	this.name=name,
	this.age=age
}
Person.prototype.sayHi=function(){console.log(this.name,this.age);}//在Person上添加了SayHi方法，可以节省内存
var p=new Person('jack',30);
p.sayHi();//jack 30undefined
p.__proto__===Person.prototype;//true
Person.__proto__===Object.prototype;//false
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true

//通过new创建对象，创建的这个对象的原型是new后面的东西的prototype属性
var arr=new Array();
arr.__proto__===Array.prototype;//true

var obj=new Object();
obj.__proto__===Object.prototype;//true

var f=new Function();
f.__proto__===Function.prototype;//true

//constructor 属性返回对创建此对象的数组函数的引用。
var test=new Array();

if (test.constructor==Array)
{
document.write("This is an Array");
}
if (test.constructor==Boolean)
{
document.write("This is a Boolean");
}
if (test.constructor==Date)
{
document.write("This is a Date");
}
if (test.constructor==String)
{
document.write("This is a String");
}

//This is an Array


function employee(name,job,born)
{
this.name=name;
this.job=job;
this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);

document.write(bill.constructor);
//function employee(name, job, born)
//{this.name = name; this.job = job; this.born = born;}