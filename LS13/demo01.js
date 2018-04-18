//JS对象是一种复合值，是若干无序属性的集合，可以通过属性名来访问对象的属性
//函数作为某一个对象的属性时，称其为该对象的方法
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi

var obj={
	name:'齐琦',
	age:22,
	show:function(){
		console.log('我的名字叫'+this.name+'我今年'+this.age+'了');
	}
};
obj.show();	//我的名字叫齐琦我今年22了

//JS对象分类
//内置对象：由ECMAScript规范定义的对象或构造器对象（数组、函数等）
//宿主对象：由JS解析器所嵌入的宿主环境定义的
//自定义对象：运行中的用户自定义JS代码创建的对象
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object

console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false    **
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false    **
console.log(JSON instanceof Object);//true