//this的工作原理

//part11111111111111  this指向
//1)全局范围内
this;
//指向全局对象

//2)函数调用
foo();
//指向全局对象

//3）方法调用
test.foo();
//this指向test对象

//4)调用构造函数
new foo();
//如果函数倾向于和new关键词一块使用，则我们称这个函数是构造函数，
//在函数内部，this指向新创建的对象

//part22222222222   显示的设置this??？？？
//当使用function.prototype上的call或者apply方法时，函数内的this
//将会被显式设置为函数调用的第一个参数
function foo(a,b,c){}
var bar={};
foo.apply(bar,[1,2,3]);
foo.call(bar,1,2,3);//传递到foo的参数是a=1,b=2,c=3

//part33333333333   方法的赋值表达式
var test = someObject.methodTest;
test();
//test 就像一个普通的函数被调用；
//因此，函数内的 this 将不再被指向到 someObject 对象
//??？？？？？指向谁呢


//作用域与命名空间
//JS支持一对花括号创建的代码段，但是并不支持块级作用域；而仅仅支持函数作用域
function test() { // 一个作用域
    for(var i = 0; i < 10; i++) { // 不是一个作用域
        // count
    }
    console.log(i); // 10
}

//如果 return 对象的左括号和 return 不在一行上就会出错。
function add(a, b) {
    return 
        a + b;
    //return a+b;
}
console.log(add(1, 2));//undefined


//隐式的全局变量
foo = '42';//全局作用域内定义了变量foo
var foo = '42'//当前作用域内定义变量foo


var foo = 42;
function test() {
    // 局部作用域
    foo = 21;
}
//var foo=34;//21
test();
//foo=34;//34
foo; // 21


for(var i = 0; i < 10; i++) {
    subLoop();
}
 
function subLoop() {
    // subLoop 函数作用域
    for(i = 0; i < 10; i++) {
		console.log(i);
 		// 没有使用 var 声明变量
        // i是全局的，执行完一次循环后，i变成9,上面的循环结束
    }//输出1-9一遍
// function subLoop() {
//     // subLoop 函数作用域
//     for(var i = 0; i < 10; i++) {
// 		console.log(i);
//  		// 没有使用 var 声明变量
//         // i是全局的，执行完一次循环后，i变成9,上面的循环结束
//     }//输出1-9十遍


//局部变量
//局部变量的两种声明方式：作为函数参数；通过var关键字声明


//数组
//数组遍历
//为 length 设置一个更小的值会截断数组，但是增大 length 属性值不会对数组产生影响。
var foo = [1, 2, 3, 4, 5, 6];
foo.length = 3;
foo; // [1, 2, 3]
 
foo.length = 6;
foo; // [1, 2, 3，empty,empty,empty]

//Array构造函数
//使用构造函数创建数组，
//在传多个值时，是传入数组里的值；
//传入一个字符串，构造函数会返回含有该字符串的数组
[1, 2, 3]; // 结果: [1, 2, 3]
new Array(1, 2, 3); // 结果: [1, 2, 3]
 
[3]; // 结果: [3]
new Array(3); // 结果: [] 
new Array('3') // 结果: ['3']
 
// 译者注：因此下面的代码将会使人很迷惑
new Array(3, 4, 5); // 结果: [3, 4, 5] 
new Array(3) // 结果: []，此数组长度为 3

//对象的类定义
//Object.prototype.toString 返回一种标准格式字符串，所以上例可以通过 slice 截取指定位置的字符串

//类型转换
//转换为字符串:将一个值加上空字符串可以轻松转换为字符串类型。
'' + 10 === '10'; // true

//转换为数字
//使用一元的加号操作符，可以把字符串转换为数字
+'10' === 10; // true

//字符串转换为数字的常用方法
+'010' === 10//true
Number('010') === 10//true
parseInt('010', 10) === 10  //true// 用来转换为整数
 
+'010.2' === 10.2//true
Number('010.2') === 10.2//true
parseInt('010.2', 10) === 10//true

//转换为布尔型
//通过使用 否 操作符两次，可以把一个值转换为布尔型。
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true


