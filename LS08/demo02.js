//函数对象的属性及方法

//函数对象的属性

//1)函数对象属性之arguments 实参集合(arguments 是Symbol类型，独一无二的，具体参见后续ES6部分)
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象//Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments.length);//4
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);//[1, 2, 3, 4]
};
foo(1,2,3,4);

//2)//函数对象属性之length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.
//函数对象属性之caller 获取调用当前函数的函数。例一
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);

test();//output: test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter();//call from the function testOuter

var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();ƒ abc(){this.foo1();}

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));//24

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true


//函数对象的方法

//函数对象方法之 call 调用一个普通函数或对象的方法时，用另一个对象替换当前对象
//call([thisObj[, arg1[, arg2[, [, argN]]]]])
//它允许您将函数的 this 对象从初始上下文变为由 thisObj 指定的新对象。
// 如果没有提供 thisObj 参数，则 global 对象被用作 thisObj。
// 与apply方法不同的地方是，apply的第二个参数类型必须是Array，
// 而call方法是将所有的参数列举出来，用逗号分隔
function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);//i'm: i can swim ___ 1 2
swim.call(me,3,4);//i'm:ABC i can swim ___ 3 4
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8
bird.fly.apply(me,[7,8]);//i'm:ABC i can fly ___ 7 8
swim.call(null,1,2);//i'm: i can swim ___ 1 2

//函数对象方法之 apply
//functionName.apply([thisObj[,argArray]])
//与call方法不同的地方是，apply的第二个参数类型必须是Array
swim.apply(me,[9,10]);//i'm:ABC i can swim ___ 9 10
bird.fly.apply(me,[11,12]);//i'm:ABC i can fly ___ 11 12
swim.apply(null,[13,14]);//i'm: i can swim ___ 13 14

//bind 参数的问题 例三
// 该绑定函数将 bind 方法中指定的参数用作第一个参数和第二个参数。
// 在调用该绑定函数时，指定的任何参数将用作第三个、第四个参数（依此类推）
// Define the original function with four parameters.
var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
// Create a new function that uses the 12 and "a" parameters
// as the first and second parameters.
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.
displayArgs2("b", "c");// Output: 12 a b c


//函数对象方法之 toString与valueOf 继承自Object.prototype的方法
//返回对象的字符串表示形式。objectname.toString([radix])
//关于toString与valueOf的详细内容参见JS对象相关章节
var foo = function () {
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());//function () {console.log("foo");}  ___  string
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());//ƒ () {console.log("foo");} " ___ " "function"

console.log(foo.hasOwnProperty("toString"));//false
console.log(Object.prototype.hasOwnProperty("toString"));//true

console.log(foo.hasOwnProperty("valueOf"));//false
console.log(Object.prototype.hasOwnProperty("valueOf"));//true
