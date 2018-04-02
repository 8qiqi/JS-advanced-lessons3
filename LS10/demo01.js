//JS作用域及特点

//1）什么是作用域

//作用域就是‘变量与函数的可访问范围’（变量生效的区域范围，即在何处可以被访问到）
//作用域控制着‘变量与函数的可见性和生命周期’，它也是根据名称‘查找变量的一套规则’
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);//d is not defined
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
//console.log(a,b,c,d);//c、d is not defined
//变量d只能在bar作用域中被访问
//变量c只能在fn和bar作用域中被访问到

//词法作用域
//JS采用的是词法作用域（静态性），这种静态结构决定了一个变量的作用域
//词法作用域不会被函数从哪里调用等因素影响，与调用形式无关（体现了静态性）
var name = "Jack";
function echo() {
    console.log(name);
}
echo();

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack
//调用foo函数中的echo函数，查找name时会在echo内部和以上查找

//静态词法作用域的补充部分
//通过new Function创建的函数对象不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();//g
//foo()()两个括号才能调用new Function创建的构造函数

var scope='global';
function checkscope(){
	var scope='local';
	return new Function("return scope");
}
console.log(checkscope()());//global

var scope='global';
function checkscope(){
	var scope='local';
	return function(){
		return scope;
	};
}
console.log(checkscope()());//lobal

//块作用域
//JS（ES5）采用的是函数级作用域，没有块作用域
{
    var a = 4;
}
console.log(a);//4


var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);//234
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}

//使用IIFE来解决上述问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);//123
    //alert("userId = "+userId);
};
//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
//通过立即执行表达式限制变量的作用域
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
