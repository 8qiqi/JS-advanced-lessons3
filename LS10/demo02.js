//JS执行上下文与调用栈
//执行上下文指代码执行时的上下文环境（包括局部变量、相关的函数、相关自由变量等)
//JS运行时会产生多个执行上下文，处于活动状态的执行上下文环境只有一个
//执行到断点时，就有一个当前断点所对应的执行上下文（对应当前执行环境）

//代码调试
//Sources-->Snippets-->New snippet-->Run
//Watch设置关心的变量
//Scope观察当前上下文环境，快速查找当前能够访问到的环境
//Call Stack函数调用栈；栈底对应全局上下文环境，栈顶对应的是当前正在执行的上下文环境
//代码执行时JS引擎会以栈的方式来处理和追踪函数调用（函数调用栈 Call Stack）

console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];//银行中
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();//笔没油了，去商店买笔
console.log("在家-继续做作业...全局上下文");

/*
//理解执行上下文（通俗的例子）,嵌套的情况------没有什么不同
var xx = ["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中 1 ...");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中
    console.log("在文具店-买文具中  ...");
    function goToBank(){
        var zz = ["银行职员","柜员机"];//银行中
        console.log("在银行-取钱 ... 返回文具店");
    }
    console.log("在文具店-买文具中  ... 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ... 返回家");
}
console.log("在家-做作业中 2 ... 发现笔没油了");
goToStore();//笔没油了，去商店买笔
console.log("在家-继续做作业...");
*/


console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar();
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点