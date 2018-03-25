typeof null;//object  历史兼容问题
typeof function;//function
typeof new Object();//object
typeof [1,2];//object
typeof NaN;//number
 //instanceof检测引用类型，如果左操作数是基本类型，直接返回false
 [1,2] instanceof Array;
 [1,2] instanceof Object;
 function instanceof Function;
 function instanceof Object;
var a=(1,2,3);//3取最右边的
//没有块级作用域
{var x=1;..}与var x=1;{..}一致
for(var i=0;i<10;i++){}与var i=0;for(;i<10;i++){}一致，i可以在循环外访问
在函数内定义的变量是局部的，函数外不能访问到
function foo(){
	var a=1;
	console.log(a)
}
foo();//1
console.log(a)//undefined
定义变量var a=b=1;  b是隐式创建的全局变量.避免这种情况，var a=1,b=1;
function foo(){
	var a=b=1;
}
foo();
console.log(typeof a);//undefined
console.log(typeof b);//number

//函数声明和函数表达式的预处理
//函数声明
foo();//true
function foo（）{
	console.log(1);
}
//函数表达式
foo();//false
var foo=function(){
	console.log(1);
}
//运算顺序
//算术操作符 → 比较操作符 → 逻辑操作符 → "="赋值符号

//创建数组
var myarray = new Array(66,80,90,77,59);（var myarray = new Array();创建一个空数组）
var myarray = [66,80,90,77,59];
//二维数组
var myarr=new Array();
for(var i=0;i<3;i++){
    myarr[i]=new Array();
    for(var j=0;j<6;j++)
    myarr[i][j]=i+j;
}