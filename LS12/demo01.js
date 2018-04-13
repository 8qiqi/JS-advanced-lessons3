//JS闭包
//一般来说，函数内的局部变量，不能在函数外得到。通过闭包可以在函数外访问局部变量。
//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体
//若一个函数离开了它创建时的作用域，通过闭包它还是会与这个作用域的变量相关联
//闭包是一个函数外加上该函数创建时所建立的作用域
//可通过闭包来访问隐藏在函数作用域内的局部变量


//使函数中的变量被保存在内存中不被释放（单例模式）
//
//由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包
//使用闭包时要注意不经意的变量共享问题，可通过立即执行表达式来解决

//下例不是闭包，f3的返回值是f2(),也就是一个变量x。而闭包是返回值为函数（或对象？）的情况
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);//1
console.log(f3);//1

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1

//下面是闭包，f3()的返回值f2,也就是一个函数，闭包里有x,f2(){..}
////f3->f2->x  f2和x组成一个闭包，只要f3没有被释放，那么相关作用域及其变量不能被释放
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());//1
console.log(f3());//2

//存在闭包a，闭包里有变量x,y是全局变量；两次输出结果不一样，是因为是两个不同的闭包
function a(x){
	return function b(y){return x+=y;}
}
console.log(a(5)(1));//6
console.log(a(5)(2));//7


function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
inc = createInc(5);//新创建了一个闭包
console.log(inc(1));//6


function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);//inc和inc2有不同的闭包
console.log(inc(1));//9
console.log(inc2(1));//6


function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1


var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？不包含
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？113、114、115；foo之外的tmp是否为闭包的一部分？不是
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18


function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);//113=2+10+101
f3(10);//114=2+10+102
//思考有几个闭包，x和z分别属于哪个闭包 
//有两个闭包，f1和f2,f1的闭包里有z,f2的闭包里有x,y是全局变量


function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //tmp和x和函数形成了一个闭包,y是全局变量，x此时是一个对象
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3



function fn() {
    var max = 10;//若屏蔽此行，则输出为多少？
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15  max此时是15


//****一共有四个闭包，c.count和c.reset两个闭包共用一个n;d.count和d.reset两个闭包共用一个n;
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},//如果改成{var x=1;return ++n;}这样,x不在闭包里面，只是一个全局变量，用完就释放
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//1
console.log(d.count());//2


function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001

//****
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在与f2被赋给了一个全局变量，全局变量没被释放
// 这导致f2始终在内存中，而f2和n形成了对应作用域（f1）的闭包
// f1中的n不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); //999
nAdd();//
result(); //1000
//思考：nAdd是闭包么? 不是（因为没有返回值，闭包返回值应该为函数？？？）
//nAdd也是全局变量。n是哪个作用域下的变量，当前作用域下的变量999。(也就是说nAdd是全局变量，里面的n是当前作用域的999)
//

//应用案例 实现数据的封装 私有属性
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());//default
john.setName("john");
console.log(john.getName());//john

var jack = Person();
console.log(jack.getName());//default
jack.setName("jack");
console.log(jack.getName());//jack


var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1; // 11,点击一下打出11一下，？？？？？？？为什么会输出呢
nAdd();
result2(); //11


var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); // 输出多少？10  (此时m=10)
nAdd();//(此时m为11)
result2(); //11（result1和result2有不同的闭包，但m变为11，所以。。）
result1();//11