//作用域链与执行上下文
//http://www.cnblogs.com/zxj159/archive/2013/05/17/3084598.html
//https://www.cnblogs.com/zero-zf/p/5875089.html

//如果有多个文具店和多个银行，那么执行就有多种可能，形成不同的链式关系
//依然要遵从静态词法作用域（在A文具店，应该有A店老板，而不应有B店老板）

//执行时，当前执行上下文，对应一个作用域链环境来管理和解析变量和函数（动态性）
//变量查找按照由内到外的顺序（遵循词法作用域），直到完成查找，若未查询到则报错
//当函数执行结束，运行期上下文被销毁，此作用域链环境也随之被释放

//作用域链：它的用途是保证对执行环境有权访问的所有变量和函数的有序访问
//词法作用域和静态作用域：词法作用域等同于静态作用域，静态作用域规则查找一个变量声明时依赖的是源程序中块之间的静态关系；
//动态作用域规则依赖的是程序执行时的函数调用顺序。
//说的具体点，就是静态作用域查找的是距离当前作用域最近的外层作用域中同名标识符的声明，
//而动态作用域则是查找最近的活动记录


//
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");//设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);
    console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点




// 将goToBank函数嵌套到goToStore函数中，3层的链，分析此时的作用域链
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");//设置断点
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");//设置断点
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");//设置断点
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");//设置断点
    }
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}

function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");//设置断点
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");//设置断点
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");//设置断点
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");//设置断点
    }
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}