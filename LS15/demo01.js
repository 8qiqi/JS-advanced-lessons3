//JS对象及继承方式综述
//JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
//JavaScript的继承是对象-对象的原型继承，为面向对象提供了动态继承的功能，对象要实现继承首先要有原型对象
//任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象

//第一种方式创建对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);//true
//直接创建对象的原型是Object.prototype

//第二种方式创建对象
//通过create方法创建的对象的原型，是create括号里面的对象
var newObj = Object.create(obj);
newObj.age = 23;
//console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);//true
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null


//第三种继承方式
function Person(name,age){
	this.name=name,
	this.age=age
}
Person.prototype.sayHi=function(){console.log(this.name,this.age);}//在Person上添加了SayHi方法，可以节省内存
var p=new Person('jack',30);
p.sayHi();//jack 30
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


//解析器默认把可枚举的属性写在前面
var a={};
a.__proto__===Object.prototype;//true
var b=new Object();
b.__proto__===Object.prototype;//true
//直接创建一个空对象，和create方法创建一个空对象的原型是一样的
b.__proto__.__proto__===null;//true