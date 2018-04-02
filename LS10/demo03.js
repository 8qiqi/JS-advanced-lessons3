//作用域链与执行上下文

//如果有多个文具店和多个银行，那么执行就有多种可能，形成不同的链式关系
//依然要遵从静态词法作用域（在A文具店，应该有A店老板，而不应有B店老板）

//执行时，当前执行上下文，对应一个作用域链环境来管理和解析变量和函数（动态性）
//变量查找按照由内到外的顺序（遵循词法作用域），直到完成查找，若未查询到则报错
//当函数执行结束，运行期上下文被销毁，此作用域链环境也随之被释放


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